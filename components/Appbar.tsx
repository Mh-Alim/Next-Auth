"use client";
import { useRouter } from "next/navigation";
import { signIn, signOut, useSession } from "next-auth/react";
const Appbar = () => {
  const router = useRouter();

  const session = useSession();
  return (
    <div>
      <button onClick={() => signIn()}>Signin</button>
      <button onClick={() => signOut()}>logout</button>

      <div>
        <div>Token Details</div>
        <div>{JSON.stringify(session)}</div>
      </div>
    </div>
  );
};

export default Appbar;
