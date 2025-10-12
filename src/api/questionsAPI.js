import supabase from './supabase';

export const getQuestions = async section => {
  const { data: questions, error } = await supabase
    .from('questions')
    .select('*')
    .eq('section', section);

  if (error) {
    console.error(error);
    throw new Error(
      `Sorry! Questions for ${section} could not be found! Pls, Try again`
    );
  }

  return questions;
};
