import Head from "next/head";
import Image from "next/image";
import CausePanel from "../../components/SupportCause/CausePanel/CausePanel";

const causeList = [
  {
    id: 1,
    title: "Donation for Odommya School",
    orgName: "Pothoshishu kollyan foundation",
    location: "Head Office - Cumilla",
    phone: "+8801859040673",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
  {
    id: 2,
    title: "Donation for Odommya School",
    orgName: "Pothoshishu kollyan foundation",
    location: "Head Office - Cumilla",
    phone: "+8801859040673",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
  {
    id: 3,
    title: "Donation for Odommya School",
    orgName: "Pothoshishu kollyan foundation",
    location: "Head Office - Cumilla",
    phone: "+8801859040673",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
];

export default function SupportCause() {
  return (
    <div>
      <Head>
        <title>Shebok | Support a Cause</title>
        <meta
          name="description"
          content="Shebok is a donation platform that allows anyone having access to a smart phone to make any form of donation (old clothes, medicines, books, leftover foods etc.) and also to volunteer for a social cause."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-aileron">
        <div className="px-10 w-full">
          {/* Search */}
          <div className="w-full flex justify-center items-center gap-3">
            <input
              className="py-2 px-3 rounded bg-shbackground w-full"
              type="text"
              placeholder="Search"
            />
            <button className="bg-shbackground h-full p-2 rounded flex justify-center items-center">
              <Image
                src={"/icons/global/search.svg"}
                width={25}
                height={25}
                alt={"search"}
              />
            </button>
          </div>
          {/* CausePanel */}
          <div className="mt-5 w-full h-80 flex flex-col gap-5 overflow-auto">
            {causeList.map((item) => {
              return (
                <div className="" key={item.id}>
                  <CausePanel item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
