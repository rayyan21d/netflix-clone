import { getSession, signOut } from "next-auth/react";
import { NextPageContext, InferGetServerSidePropsType } from "next";
import useCurrentUser from "@/hooks/useCurrentUser";
import Navbar from "@/components/Navbar";

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
      <Navbar />
    </>
  );
}
