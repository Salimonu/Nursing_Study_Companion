import supabase from './supabase';

export const fetchSubscriptionStatus = async () => {
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser();

  if (authError || !user) {
    return 'free';
  }

  const { data, error } = await supabase
    .from('user_profiles')
    .select('subscription_status')
    .eq('id', user.id)
    .single();

  if (error) {
    console.error(error);
    return 'free';
  }

  return data?.subscription_status ?? 'free';
};
