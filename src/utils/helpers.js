export const formatTime = ms => {
  const days = Math.floor(ms / (1000 * 60 * 60 * 24));
  const hours = Math.floor((ms / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((ms / (1000 * 60)) % 60);
  const seconds = Math.floor((ms / 1000) % 60);

  return { days, hours, minutes, seconds };
};

export const supabaseQuery = async (queryFn, timeout = 15000) => {
  const controller = new AbortController();

  const idTimeout = setTimeout(() => controller.abort(), timeout);

  try {
    return await queryFn(controller.signal);
  } finally {
    clearTimeout(idTimeout);
  }
};
