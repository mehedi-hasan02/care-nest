import React from "react";
import NavLink from "../buttons/NavLink";
import Image from "next/image";
import Link from "next/link";
import { SlUser } from "react-icons/sl";

const Navbar = () => {
  const nav = (
    <>
      <li>
        <NavLink href={"/"}>Home</NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-sm md:px-10">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex="-1"
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {nav}
          </ul>
        </div>
        <Link href={'/'} className="btn btn-ghost text-xl">Care<span className="text-primary">Nest</span></Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{nav}</ul>
      </div>
      <div className="navbar-end">
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
              <button>Logout</button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
