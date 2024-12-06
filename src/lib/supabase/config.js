import { createClient } from "@supabase/supabase-js";

// Create a single supabase client for interacting with your database
// const supabase = createClient(
//   "process.env.PUBLIC_SUPABASE_URL",
//   "process.env.SUPABASE_ANON_KEY"
// );

const supabase = createClient(
  "https://fxqrczxllnudveepvwnu.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ4cXJjenhsbG51ZHZlZXB2d251Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzI5ODgzMjMsImV4cCI6MjA0ODU2NDMyM30.aminGMYVKkAvTq-ulEHeiROGrDAH83s6z3lWqv_cqno"
);

const signInWithEmailOTP = async (email) => {
  try {
    const user = await supabase.auth.signInWithOtp({
      email: email,
      options: {
        emailRedirectTo: "http://localhost:5173/",
        channel: "email",
        type: "otp",
      },
    });
    if (user) {
      console.log("user", user);
    }
  } catch (error) {
    console.log("Error Occured during sign in :", error);
    // setErrorMessage("Failed to process the request. Please try again.");
  }
};

export default signInWithEmailOTP;
