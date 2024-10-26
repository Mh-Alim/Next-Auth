import { NEXT_AUTH } from "@/lib/auth";
import { getServerSession } from "next-auth";
import React from "react";

const page = async () => {
  const session = await getServerSession(NEXT_AUTH);
  return (
    <div>
      <p>User Details on server component</p>
      <p>{JSON.stringify(session)}</p>
    </div>
  );
};

export default page;
