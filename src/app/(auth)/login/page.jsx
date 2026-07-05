"use client"

import { loginUser } from "@/action/server/auth";
import { signIn } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-toastify";

const LoginPage = () => {
  const route = useRouter()
  const handelLogin = async (e) => {
    e.preventDefault();

    const email = e.target.email.value
    const password = e.target.password.value

    const result = await signIn("credentials",{
      email,
      password,
      redirect: false
    })

    if(result.ok){
      toast.success("Login Successfull")
      route.push("/")
    }else{
      toast.error("Try Again")
    }

  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Welcome Back</h1>
          <p className="text-center text-base-content/70 mb-4">
            Login to your account
          </p>

          <form onSubmit={handelLogin} className="space-y-4">
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Email</span>
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>

                <Link
                  href="/forgot-password"
                  className="label-text-alt link link-hover text-primary"
                >
                  Forgot Password?
                </Link>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Enter your password"
                className="input input-bordered w-full"
                required
              />
            </div>

            <button type="submit" className="btn btn-primary w-full mt-2">
              Login
            </button>
          </form>

          <div className="divider">OR</div>

          <button className="btn btn-outline w-full">
            <FcGoogle className="text-2xl" />
            Continue with Google
          </button>

          <p className="text-center mt-4">
            Don't have an account?{" "}
            <Link href="/register" className="link link-primary font-medium">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
