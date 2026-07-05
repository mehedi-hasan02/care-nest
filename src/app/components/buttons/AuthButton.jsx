"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";
import React from "react";
import { SlUser } from "react-icons/sl";

const AuthButton = () => {
  const session = useSession();

  return (
    <div>
      {session.status == "authenticated" ? (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="avatar cursor-pointer">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 bg-base-200 flex items-center justify-center cursor-pointer hover:bg-base-300 transition-colors">
              {/* <Image
                src="/file.svg"
                alt="Avatar"
                width={40}
                height={40}
                className="w-full h-full object-cover"
              /> */}
              <SlUser className="text-lg text-base-content" />
            </div>
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content mt-3 z-1 w-52 rounded-box bg-base-100 shadow"
          >
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/dashboard">Dashboard</Link>
            </li>
            <li>
              <Link href="/settings">Settings</Link>
            </li>
            <li>
              <button onClick={() => signOut()}>Logout</button>
            </li>
          </ul>
        </div>
      ) : (
        <Link href={"/login"} className="btn bnt-primary">
          Login
        </Link>
      )}
    </div>
  );
};

export default AuthButton;
