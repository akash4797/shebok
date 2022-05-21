import React from "react";
import Image from "next/image";
import Link from "next/link";

const options = [
  {
    id: 1,
    name: "Support Life",
    imgaePath: "/icons/dashboard/supportlife.svg",
    link: "/supportlife",
  },
  {
    id: 2,
    name: "Support a cause",
    imgaePath: "/icons/dashboard/supportacause.svg",
    link: "/supportcause",
  },
  {
    id: 3,
    name: "Donate",
    imgaePath: "/icons/dashboard/donate.svg",
    link: "/donate",
  },
  {
    id: 4,
    name: "Register cause",
    imgaePath: "/icons/dashboard/registercause.svg",
    link: "/registercause",
  },
];

export default function Dashboard() {
  return (
    <div className="px-14 w-full h-96 font-aileron flex justify-center items-center gap-5 flex-wrap overflow-auto">
      {options.map((items) => {
        return (
          <div key={items.id}>
            <Link href={items.link}>
              <a>
                <div className="w-72 h-44 bg-shbackground flex flex-col justify-center items-center gap-3 rounded-xl shadow-lg hover:bg-shbackgroundbl cursor-pointer">
                  <Image
                    src={items.imgaePath}
                    alt={"support life"}
                    width={77}
                    height={67}
                  />
                  <h4 className=" font-semibold text-xl">{items.name}</h4>
                </div>
              </a>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
