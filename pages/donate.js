import Head from "next/head";

export default function Donate() {
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
        <h1 className="text-xl font-semibold mb-3">Your Donation Details</h1>
        <div className="w-full grid grid-cols-2">
          <div className="w-full flex flex-col gap-3">
            <select name="" id="" className="py-2 px-3 rounded bg-shbackground">
              <option value="">Select Type</option>
              <option value="">Food</option>
              <option value="">Grocery</option>
              <option value="">Medicine</option>
              <option value="">Stationary</option>
              <option value="">Cloths</option>
            </select>
            <input
              className="py-2 px-3 rounded bg-shbackground"
              type="text"
              placeholder="Amount / Weight"
            />
            <input
              className="py-2 px-3 rounded bg-shbackground"
              type="text"
              placeholder="Expiration Time"
            />
            <div className="w-full">
              <label
                className="flex flex-row items-center justify-start"
                htmlFor=""
              >
                <span className="w-1/2">Donation Location:</span>
                <select
                  name=""
                  id=""
                  className="py-2 px-3 rounded bg-shbackground w-full"
                >
                  <option value="">Select Type</option>
                  <option value="">Komolapur slums</option>
                </select>
              </label>
            </div>
            <span className="text-accent font-light">
              Location detected automatically by your location
            </span>
            <button className="bg-accent text-white p-2 rounded text-lg font-semibold w-min mt-3">
              Donate
            </button>
          </div>
          <div className="row-span-1 w-full"></div>
        </div>
      </main>
    </div>
  );
}
