"use client"

import { postUser } from "@/action/server/auth";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const RegisterPage = () => {

  const route = useRouter()

  const handelRegister = async (e)=>{
    e.preventDefault();

    const nid = e.target.nid.value
    const name = e.target.name.value
    const email = e.target.email.value
    const number = e.target.contact.value
    const pass = e.target.password.value

    const user = {
      name,
      email,
      number,
      nid,
      pass
    }

    const result = await postUser(user)

    if(result.acknowledged){
      toast.success("Register Successfull")
      route.push("/login")
    }else{
      toast.error(result.message)
    }
  }


  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 px-4 py-10">
      <div className="card w-full max-w-lg bg-base-100 shadow-xl">
        <div className="card-body">
          <h1 className="text-3xl font-bold text-center">Create an Account</h1>
          <p className="text-center text-base-content/70 mb-4">
            Register to get started
          </p>

          <form onSubmit={handelRegister} className="space-y-4">
            {/* NID */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">NID No.</span>
              </label>
              <input
                type="number"
                name="nid"
                placeholder="Enter your NID number"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Name */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Full Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your full name"
                className="input input-bordered w-full"
                required
              />
            </div>

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

            {/* Contact */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Contact Number</span>
              </label>
              <input
                type="tel"
                name="contact"
                placeholder="01XXXXXXXXX"
                className="input input-bordered w-full"
                required
              />
            </div>

            {/* Password */}
            <div className="form-control">
              <label className="label">
                <span className="label-text font-medium">Password</span>
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create a password"
                className="input input-bordered w-full"
                required
                minLength={6}
                pattern="^(?=.*[a-z])(?=.*[A-Z]).{6,}$"
                title="Password must be at least 6 characters and contain at least one uppercase and one lowercase letter."
              />

              <label className="label">
                <span className="label-text-alt text-base-content/70">
                  Password must contain:
                </span>
              </label>

              <ul className="text-sm text-base-content/70 list-disc ml-5 space-y-1">
                <li>At least 6 characters</li>
                <li>At least one uppercase letter (A-Z)</li>
                <li>At least one lowercase letter (a-z)</li>
              </ul>
            </div>

            <button type="submit" className="btn btn-primary w-full mt-4">
              Register
            </button>
          </form>

          <p className="text-center mt-6">
            Already have an account?{" "}
            <Link href="/login" className="link link-primary font-medium">
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
