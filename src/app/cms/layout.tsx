import type { PropsWithChildren } from "react";
import { Protect } from "@clerk/nextjs";
import { checkRole } from "@/utils/auth/roles";

export default function CMSLayout(props: PropsWithChildren) {


  return (
    <div className="w-screen h-screen ">
      <h1>i am sidebar</h1>
      <Protect
        condition={() => checkRole("admin")} // Check if user has the "org:admin" role
        fallback={<p className="w-screen mx-auto mt-20">Only an Admin can access this page.</p>}
      >
        {props.children}
      </Protect>
    </div>
  );
}
