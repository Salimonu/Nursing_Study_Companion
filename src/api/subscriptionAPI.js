import supabase from './supabase';

export const fetchSubscriptionStatus = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    // return 'free';
    return {
      subscription_status: 'free',
      expires_at: null,
    };
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('subscription_status, expires_at')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error(error);
    // return 'free';
    return {
      subscription_status: 'free',
      expires_at: null,
    };
  }

  // return data?.subscription_status ?? 'free';
   return {
    subscription_status: data.subscription_status ?? 'free',
    expires_at: data.expires_at ?? null, // timestamptz
  };
};
