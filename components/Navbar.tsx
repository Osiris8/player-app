"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Link from "next/link";
import { useEffect, useState } from "react";
export default function Navbar() {
  const { user } = useKindeBrowserClient();
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    const getUser = async () => {
      if (user && user.id) {
        setIsClient(true);
      }
    };
    getUser();
  }, [user]);

  return (
    <div className="navbar bg-white">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-primary"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
            </li>

            <li>
              <Link href="/#players" className="hover:text-primary">
                Players
              </Link>
            </li>
          </ul>
        </div>
        <a className="btn btn-ghost text-xl text-primary font-bold">
          <svg
            fill="#000000"
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            data-name="Layer 1"
            className="bg-white rounded-full"
          >
            <path d="M20.07,6.11a9.85,9.85,0,0,0-4.3-3.36A10,10,0,0,0,2,12c0,.19,0,.38,0,.56A9.94,9.94,0,0,0,3.33,17a10,10,0,0,0,5.89,4.65h0A10.11,10.11,0,0,0,12,22a9.45,9.45,0,0,0,1.88-.18,10,10,0,0,0,8-8.41A9.46,9.46,0,0,0,22,12,9.83,9.83,0,0,0,20.07,6.11Zm-2,.77L17,9.74l-1.62.44L13,8.49V6.64l2.49-1.81A7.81,7.81,0,0,1,18.11,6.88ZM14,11.67,13.22,14H10.77L10,11.67l2-1.43ZM12,4a8,8,0,0,1,1.11.09L12,4.89l-1.11-.8A8,8,0,0,1,12,4ZM4.88,8.37l.4,1.32-1.13.79A7.88,7.88,0,0,1,4.88,8.37Zm1.37,9.17,1.38.05L8,18.92A8.32,8.32,0,0,1,6.25,17.54ZM8,15.6l-3.15-.11A7.83,7.83,0,0,1,4.07,13l2.49-1.74L8,11.88l.89,2.76Zm.86-5.53-1.56-.7-.91-3A7.93,7.93,0,0,1,8.5,4.83L11,6.64V8.49ZM13,19.93a8.08,8.08,0,0,1-2.63-.12l-.83-2.92.83-.89h3.07l.67,1Zm2.41-.7L15.87,18l1.36.07A7.83,7.83,0,0,1,15.38,19.23Zm3.46-3.12L15.76,16l-.71-1.1.89-2.76,1.51-.41,2.36,2A7.84,7.84,0,0,1,18.84,16.11Zm.05-5.83L19.4,9a7.4,7.4,0,0,1,.53,2.13Z" />
          </svg>
          PLayerApp
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-neutral">
          <li>
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
          </li>

          <li>
            <Link href="/#players" className="hover:text-primary">
              Players
            </Link>
          </li>
        </ul>
      </div>
      {isClient ? (
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content w-10 rounded-full">
                    <span className="text-xl">{user?.given_name?.[0]}</span>
                  </div>
                </div>
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              <li>
                <a href="/player/add">Add New Player</a>
              </li>
              <li>
                <Link href="/api/auth/logout">Logout</Link>
              </li>
              <li>
                <a href={`/myplayers/${user?.id}`}>My Players</a>
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <LoginLink className="btn btn-secondary mr-2"> Sign In</LoginLink>
          <RegisterLink className="btn btn-primary"> Sign Up</RegisterLink>
        </div>
      )}
    </div>
  );
}
