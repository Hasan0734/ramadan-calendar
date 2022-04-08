import Head from "next/head";
import Image from "next/image";
import Calendar from "../components/Calendar/Calendar";
import Pray from "../components/Pray/Pray";
import logo from "../public/image/Asset-4.png";
import left from "../public/image/Asset-7.png";
import right from "../public/image/Asset-8.png";

export default function Home() {
  return (
    <div className="bg-slate-200">
      <div className="max-w-screen-lg mx-auto h-screen ">
        <Head>
          <title>Welcome To Ramadan Calendar</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <main className="bg-white p-0">
          <div className="flex justify-between">
            <div>
              <Image height={200} src={left} alt="image" />
            </div>
            <Image src={logo} alt="image" />
            <div>
              <Image height={200} src={right} alt="image" />
            </div>
          </div>
          <div className="text-center ">
            <div className="">
              <h1 className="text-3xl">তোহফায়ে</h1>
              <h1 className="text-3xl">রমযানুল মোবারক</h1>
            </div>
          </div>

          {/* dowa */}
          <div className="mx-8 mt-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="">
                <Pray />
              </div>

              {/* clendar */}
              <div>
               <Calendar/>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
