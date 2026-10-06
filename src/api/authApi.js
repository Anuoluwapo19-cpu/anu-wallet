import { supabase } from "../lib/supabase";

export const signUp = async ({ fullName, email, password }) => {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: { data: { full_name: fullName } },
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signIn = async ({ email, password }) => {
  const { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) throw new Error(error.message);

  return data;
};

export const signOut = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) throw new Error(error.message);
};
