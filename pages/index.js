import Head from "next/head";
import Dashboard from "../components/Dashboard/Dashboard";

export default function Home() {
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
      <main className="">
        <Dashboard />
      </main>
    </div>
  );
}
