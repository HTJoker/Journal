"use client";

import Link from "next/link";
import { XMarkIcon, Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import { signOut, useSession } from "next-auth/react";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { data: sessionData } = useSession();

  if (sessionData) {
    return (
      <nav className="absolute left-0 top-0 z-10 flex w-full flex-col items-center justify-between gap-8 bg-slate-950 bg-transparent p-7 backdrop-blur-md md:fixed md:flex-row md:gap-0">
        <div className="flex w-full items-center justify-between font-poppins text-xl font-bold  tracking-tight text-neutral-100 md:text-4xl">
          <Link href="/">JRNL</Link>
          <div className="flex md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <XMarkIcon width={30} /> : <Bars3Icon width={30} />}
          </div>
        </div>
        <div className="flex w-full justify-end">
          <ul
            className={`flex flex-col items-center font-poppins text-xl font-medium text-neutral-100 md:flex-row md:items-center md:justify-end md:gap-10 ${
              !isOpen && "hidden md:flex"
            }`}
          >
            <Link href="/entries">Entries</Link>
            <Link href="/write">Write</Link>
            <button className="w-min" onClick={() => void signOut()}>
              Logout
            </button>
          </ul>
        </div>
      </nav>
    );
  }
};

export default Nav;
