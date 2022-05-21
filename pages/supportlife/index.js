import Head from "next/head";
import Image from "next/image";
import PatientPanel from "../../components/SupportLife/PatientPanel.js/PatientPanel";

const PatientList = [
  {
    id: 1,
    title: "Support for a cancer patient",
    patientName: "Hossain Shariar Akash",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby:"Abdullah Al Muktadir",
    timestamp:"18 minutes ago",
    phone:"01533891348",
    docReg:"25964168",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend."
  },
  {
    id: 2,
    title: "Support for an urine disease patient",
    patientName: "Akiul Islam",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby:"Abdullah Al Muktadir",
    timestamp:"18 minutes ago",
    phone:"01533891348",
    docReg:"25964168",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend."
  },
  {
    id: 3,
    title: "Support for a cancer patient",
    patientName: "Sakib Al Hasan",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby:"Abdullah Al Muktadir",
    timestamp:"18 minutes ago",
    phone:"01533891348",
    docReg:"25964168",
    desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend."
  },
];

export default function SupportLife() {
  return (
    <div>
      <Head>
        <title>Shebok | Support Life</title>
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
          {/* PatientPanel */}
          <div className="mt-5 w-full h-80 flex flex-col gap-5 overflow-auto">
            {PatientList.map((item) => {
              return (
                <div className="" key={item.id}>
                  <PatientPanel item={item} />
                </div>
              );
            })}
          </div>
        </div>
      </main>
    </div>
  );
}
