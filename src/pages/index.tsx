import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import Image from "next/image";
import { api } from "@utils/api";

export default function Home() {
  const { data: session } = useSession();
  return (
    <>
      <Head>
        <title>JRNL</title>
        <meta name="description" content="An AI Empowered Journalling App" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex items-center">
        <div className="m-auto mt-64 flex flex-col justify-center gap-5 text-center align-middle">
          <h1 className="font-poppins bg-gradient-to-br from-white to-slate-600 box-decoration-slice bg-clip-text p-2 text-7xl font-extrabold text-transparent">
            JRNL
          </h1>
          <h2 className="font-montserrat bg-gradient-to-tr from-white to-slate-600 bg-clip-text text-5xl text-transparent">
            Your AI Journal
          </h2>
          <button
            className="font-poppins mx-auto rounded-lg bg-gradient-to-br from-indigo-500 to-indigo-600 px-20 py-2 font-semibold text-neutral-50 hover:bg-gradient-to-br hover:from-indigo-600 hover:to-indigo-700"
            onClick={session ? () => signOut() : () => signIn()}
          >
            {session ? "Sign Out" : "Sign In"}
          </button>
        </div>
      </div>
    </>
  );
}
