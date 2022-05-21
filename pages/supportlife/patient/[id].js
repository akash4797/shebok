import Head from "next/head";
import Image from "next/image";

const PatientList = [
  {
    id: 1,
    title: "Support for a cancer patient",
    patientName: "Hossain Shariar Akash",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby: "Abdullah Al Muktadir",
    timestamp: "18 minutes ago",
    phone: "01533891348",
    docReg: "25964168",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
  {
    id: 2,
    title: "Support for an urine disease patient",
    patientName: "Akiul Islam",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby: "Abdullah Al Muktadir",
    timestamp: "18 minutes ago",
    phone: "01533891348",
    docReg: "25964168",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
  {
    id: 3,
    title: "Support for a cancer patient",
    patientName: "Sakib Al Hasan",
    hospitalName: "Square Hospital",
    location: "Panthopath 3/1 A",
    addedby: "Abdullah Al Muktadir",
    timestamp: "18 minutes ago",
    phone: "01533891348",
    docReg: "25964168",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Accumsan commodo, et integer et elit sit lobortis lacus. Pharetra orci, felis, elementum scelerisque vel in et sed turpis. Est, euismod nullam mauris enim imperdiet nulla magna varius pellentesque. Tristique dolor enim faucibus varius varius semper venenatis eleifend. Quis faucibus augue viverra ac leo porttitor mattis. Convallis aenean mauris amet mi vulputate tellus sem pellentesque. Nibh sit urna, tincidunt viverra porta at eleifend.",
  },
];

export default function Patient({ id }) {
  const patientDetail = PatientList.filter((item) => item.id == id);
  return (
    <div>
      <Head>
        <title>Shebok | {patientDetail[0].patientName}</title>
        <meta
          name="description"
          content="Shebok is a donation platform that allows anyone having access to a smart phone to make any form of donation (old clothes, medicines, books, leftover foods etc.) and also to volunteer for a social cause."
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="font-aileron px-10">
        <div className=" bg-shbackground h-96 rounded-lg p-5 flex flex-col overflow-auto">
          <h1 className="text-2xl font-semibold mb-3">
            {patientDetail[0].title}
          </h1>
          <h2 className="font-semibold">
            Patient Name: {patientDetail[0].patientName}
          </h2>
          <span>{patientDetail[0].hospitalName}</span>
          <span>{patientDetail[0].location}</span>
          <span>{patientDetail[0].phone}</span>
          <span className="mt-2">{patientDetail[0].desc}</span>
          <span className="font-semibold mt-3">
            Doctor Register Number: #{patientDetail[0].docReg}
          </span>
          <div className="mt-3 flex gap-4 text-accent underline">
            <button>View Prescriptions</button>
            <button>View other details</button>
          </div>
          <div className="mt-3">
            <div className="flex justify-between">
              <div className="flex gap-4">
                <button className="bg-accent text-white p-2 rounded text-lg font-semibold">
                  Call Now
                </button>
                <button className="bg-accent text-white p-2 rounded text-lg font-semibold">
                  Donate
                </button>
              </div>
              <div className="flex flex-col items-end gap-1">
                <span className="text-sm font-semibold">
                  {patientDetail[0].timestamp}
                </span>
                <div className="text-sm">
                  <span className="">Added by: </span>
                  <span className="text-accent">
                    {patientDetail[0].addedby}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

Patient.getInitialProps = async ({ query }) => {
  const { id } = query;
  return { id };
};
