import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const SocialButton = () => {
  const route = useRouter();
  const params = useSearchParams();
  const callBack = params.get("callbackUrl") || "/";
  const handelgoogleLogin = async () => {
    const result = await signIn("google", { callbackUrl: callBack });
  };

  return (
    <button onClick={handelgoogleLogin} className="btn btn-outline w-full">
      <FcGoogle className="text-2xl" />
      Continue with Google
    </button>
  );
};

export default SocialButton;
