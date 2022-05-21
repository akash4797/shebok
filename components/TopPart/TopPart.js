import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function TopPart() {
  return (
    <div className="flex justify-between items-center px-10 py-8">
      <div className="">
        <Link href={"/"}>
          <a>
            <Image src="/logo.png" alt="logo" width={118.89} height={77.18} />
          </a>
        </Link>
      </div>
      <div className="">
        <ul className="flex text-xl gap-5">
          <li>
            <Link href={"/"}>
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href={"/support"}>
              <a>Support</a>
            </Link>
          </li>
          <li>
            <Link href={"/login"}>
              <a>Login</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
