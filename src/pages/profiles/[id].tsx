import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  return <h1>Profile for {session.data?.user.email} </h1>;
}
