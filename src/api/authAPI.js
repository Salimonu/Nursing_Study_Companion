import supabase, { supabaseUrl } from './supabase';

export async function signUp({ firstName, email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        first_name: firstName,
        whatsapp: '',
        avatar: '',
      },
    },
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function login({ email, password }) {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
}

export async function logout() {
  const { error } = await supabase.auth.signOut();
  if (error) throw new Error(error.message);
}

export async function getCurrentUser() {
  const {
    data: { session },
    error: sessionError,
  } = await supabase.auth.getSession();

  if (sessionError) throw new Error(sessionError.message);

  if (!session) return null;

  return session.user;
}

export async function updateCurrentUser({
  password,
  fullName,
  avatar,
  whatsapp,
}) {
  const updates = {};

  if (password) updates.password = password;

  const metadata = {};
  if (fullName) metadata.first_name = fullName;
  if (whatsapp) metadata.whatsapp = whatsapp;

  if (Object.keys(metadata).length > 0) updates.data = metadata;

  const { data, error: userError } = await supabase.auth.updateUser(updates);

  if (userError) throw new Error(userError.message);

  if (!avatar) return data;

  const userId = data.user.id;

  // Get the current user's avartar URL, if any.
  const currentAvatarUrl = data.user.user_metadata?.avatar;

  if (currentAvatarUrl) {
    try {
      const path = currentAvatarUrl.split(
        '/storage/v1/object/public/avatars/'
      )[1];
      if (path) {
        const { error: deleteError } = await supabase.storage
          .from('avatars')
          .remove([path]);
        if (deleteError)
          console.warn('Could not delete old avatar:', deleteError.message);
      }
    } catch (err) {
      console.warn('Error deleting old avatar:', err.message);
    }
  }

  // Upload the avatar to the storage bucket.
  const avatarName = `avatar-${data.user.id}-${Math.random()}`;
  const { error: storageError } = await supabase.storage
    .from('avatars')
    .upload(avatarName, avatar, {
      cacheControl: '3600', // cache for 1 hour
      upsert: false, // fail if file with same name exists
    });

  if (storageError) throw new Error(storageError.message);

  // Update the user table with the avatar URL
  const avartarUrl = `${supabaseUrl}/storage/v1/object/public/avatars/${avatarName}`;
  const { data: updatedUser, error: avatarError } =
    await supabase.auth.updateUser({
      data: {
        ...metadata, // retain previously updated metadata
        avatar: avartarUrl,
      },
    });

  if (avatarError) throw new Error(storageError.message);

  return updatedUser;
}
