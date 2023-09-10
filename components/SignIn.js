import React, { useContext } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { authContext } from "@/lib/store/auth-context";

import { FcGoogle } from "react-icons/fc";

function SignIn() {
  const { googleLoginHandler } = useContext(authContext);
  const googleProvider = new GoogleAuthProvider();
  const googleLoginHandler = () => {
  signInWithPopup(auth, googleProvider)
    .then((result) => {
      // Handle successful sign-in
      const user = result.user;
      console.log("Successfully signed in with Google:", user);
    })
    .catch((error) => {
      // Handle sign-in error
      console.error("Error signing in with Google:", error);
    });
};
  return (
    <main className="container max-w-2xl px-6 mx-auto">
      <h1 className="  text-6xl font-bold text-center mt-0">FINANCIO</h1>
<p className="text-6md text-center font-bold mb-4 ">AFFORD THAT DREAM</p>
      <div className=" overflow-hidden  rounded-2xl">
        <div className="h-60 w-35">
          <img
            className="object-cover w-lg h-s mx-auto mt-5 shadow-md "
            src="https://imgs.search.brave.com/F-ASGfYKdVOeoA1b-dkElXv4JJDlnb4cZIAkUVTODvc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9jZG4u/d2FsbHBhcGVyc2Fm/YXJpLmNvbS8zLzQw/L3d2bGp5ay5qcGc"  
                    />
                    
        </div>

       
      </div>
      <div className="px-4 py-4">
      

      <button
        onClick={googleLoginHandler}
        className="flex self-start  p-4 mx-auto mt-0 font-medium text-white align-middle bg-gray-700 rounded-lg"
      >
        <FcGoogle className="text-2xl" /> SIGN IN
      </button>
    </div>
    </main>
  );
}

export default SignIn;
