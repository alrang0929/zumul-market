import supabase  from "../api/supabaseClient";

export const saveUser = async (user) => {
  const { name, email, profileImage } = user;

  const { data, error } = await supabase.from("users").insert([
    {
      name,
      email,
      profile_image: profileImage,
      type: "fan",
    },
  ]);

  if (error) {
    console.error("Failed to save user:", error);
  } else {
    console.log("User saved successfully:", data);
  }
};
