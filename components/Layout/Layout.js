import React from "react";
import TopPart from "../TopPart/TopPart";
import { useRouter } from "next/router";

export default function Layout({ children }) {
  const route = useRouter();
  const path = route.pathname;
  return (
    <div className="bg-shbackground h-screen p-12 font-aileron overflow-hidden relative">
      <div className="bg-white h-full w-full rounded-lg shadow-lg">
        {path != "/login" ? <TopPart /> : null}
        {/* <TopPart /> */}
        <div className="mt-1">{children}</div>
      </div>
    </div>
  );
}
