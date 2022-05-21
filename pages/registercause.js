import Head from "next/head";

export default function RegisterCause() {
  return (
    <div>
      <Head>
        <title>Shebok</title>
        <meta
          name="description"
          content="Shebok is a donation platform that allows anyone having access to a smart phone to make any form of donation (old clothes, medicines, books, leftover foods etc.) and also to volunteer for a social cause."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="px-10">
        <h1 className="text-xl font-semibold mb-3">Register a Cause</h1>
        <div className="w-full grid grid-cols-2 gap-2">
          <div className="col-span-1 w-full flex flex-col gap-2">
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Title"
            />
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Patient Name"
            />
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Hospital Name"
            />
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Hospital Address"
            />
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Patient phone number"
            />
          </div>
          <div className="col-span-1 w-full flex flex-col gap-2">
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Doctor register number"
            />
            <textarea
              className="py-2 px-3 rounded bg-shbackground"
              name=""
              id=""
              cols="30"
              rows="7"
              placeholder="Description"
            ></textarea>
          </div>
        </div>
        <button className="bg-accent text-white p-2 rounded text-lg font-semibold w-min mt-3">
          Submit
        </button>
      </main>
    </div>
  );
}
