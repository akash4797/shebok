import React from "react";
import Link from "next/link";

export default function CausePanel({ item }) {
  return (
    <div className="w-full bg-shbackground p-5 rounded-lg flex justify-between">
      <div className="flex flex-col gap-1 left-side">
        <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
        <h3 className="font-semibold">{item.orgName}</h3>
        <span>{item.location}</span>
      </div>
      <div className="right-side flex flex-col justify-between items-end">
        <div className="flex flex-col items-end gap-1">
          {/* <span className="text-sm font-semibold">{item.timestamp}</span>
          <div className="text-sm">
            <span className="">Added by: </span>
            <span className="text-accent">{item.addedby}</span>
          </div> */}
        </div>
        <div className="">
          <Link
            href="/supportcause/causedetail/[id]"
            as={"/supportcause/causedetail/" + item.id}
          >
            <a className="bg-accent text-white p-2 rounded text-lg font-semibold">
              View Details
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
