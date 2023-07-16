import { getSession, signOut } from "next-auth/react";
import { NextPageContext, InferGetServerSidePropsType } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home(
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) {
  const { data: user } = useCurrentUser();

  return (
    <>
      <h1 className="text-5xl text-green-500">Netflix Clone</h1>;
      <p className="text-white">Logged in as :{user?.name}</p>
      <button
        onClick={() => signOut()}
        className="h-10 w-full bg-white hover:opacity-80"
      >
        Logout!
      </button>
    </>
  );
}
