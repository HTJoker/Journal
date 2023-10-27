import { useSession } from "next-auth/react";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect } from "react";

const index = () => {
  const { status: sessionStatus } = useSession();
  const { replace } = useRouter();

  useEffect(() => {
    if (sessionStatus === "unauthenticated") replace("/");
  }, [sessionStatus]);

  return (
    <>
      <Head>
        <title>Entries</title>
      </Head>
      <section className="flex flex-col justify-center">
        <h1 className="mt-32 text-center font-poppins text-4xl font-bold text-neutral-50">
          Entries
        </h1>
      </section>
    </>
  );
};

export default index;
