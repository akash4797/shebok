import Head from "next/head";

export default function Support() {
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
        <div className="mt-3 w-full flex flex-col justify-center items-center gap-2">
          <h1 className="text-xl font-bold">
            This application is developed by Planet X Inc{" "}
          </h1>
          <span className="text-2xl font-bold">Our Contact Number:</span>
          <h1 className="text-xl">01713-640923</h1>
        </div>
      </main>
    </div>
  );
}
