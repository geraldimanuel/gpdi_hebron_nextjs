import Image from "next/image";
import { Merriweather } from "@next/font/google";

const merri = Merriweather({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
  style: ["italic"],
});

export default function Home() {
  return (
    <>
      <section id="Section1" className="max-w-4xl mx-auto">
        <div id="Hero" className="min-h-screen flex items-center">
          <Image
            src="/Banner.png"
            alt="Banner"
            fill
            className="relative -z-20 before:bg-black before:absolute before:inset-0 before:z-10 "
          />
          <div id="Hero Text" className="flex flex-col gap-9">
            <div className="flex flex-col">
              <p className="text-md font-semibold tracking-[5px]">
                Kami adalah
              </p>
              <h1 className="text-8xl font-bold">SPEAKER</h1>
              <div className="flex flex-row gap-7">
                <div className={merri.className}>
                  <h1 className="text-8xl font-medium">of</h1>
                </div>
                <h1 className="text-8xl font-bold">TRUTH</h1>
              </div>
            </div>
            <div>
              <button className="rounded-[6px] border-[1px] border-white ">
                <p className="text-xl font-semibold my-2 mx-8">Bergabung</p>
              </button>
            </div>
          </div>
        </div>
        <div
          id="MenuBar"
          className="fixed top-[45px] left-[45px] flex-row justify-start"
        >
          <button className="fixed bg-[#ffffff] rounded-[6px]">
            <p className="text-black my-3 mx-3">ini tombol</p>
          </button>
        </div>
      </section>
      <section id="Section2" className="max-w-4xl mx-auto pt-36">
        <div className="grid grid-cols-2 grid-flow-col">
          <div className="text-6xl font-bold">
            <h1>Insert Text.</h1>
            <h1>In Here.</h1>
          </div>
          <div className="text-2xl font-medium max-w-md">
            <h1>
              Kami percaya bahwa hidup akan lebih baik jika dikelilingi oleh
              orang-orang yang mendorong, mendukung, dan menantang kamu untuk
              bertumbuh dalam hubungan dengan Kristus.
            </h1>
          </div>
        </div>
      </section>
      <section id="Section3" className="max-w-7xl mx-auto pt-36">
        <div className="grid grid-cols-3 gap-4 relative -z-10">
          <div className="bg-red-700 h-72 relative">
            <Image src="/Stockphoto.jpg" alt="Stockphoto" fill />
          </div>
          <div className="bg-red-700 h-72 col-span-2 relative">
            <Image
              src="/Stockphoto.jpg"
              alt="Stockphoto"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-red-700 h-72 col-span-2 relative">
            <Image
              src="/Stockphoto.jpg"
              alt="Stockphoto"
              fill
              className="object-cover"
            />
          </div>
          <div className="bg-red-700 h-72 relative">
            <Image src="/Stockphoto.jpg" alt="Stockphoto" fill />
          </div>
        </div>
      </section>
      <section
        id="Section4"
        className="max-w-4xl mx-auto text-2xl text-center leading-10 pt-36"
      >
        <div>
          <span className="text-[#939090]">Kami hadir untuk </span>
          <span>membuat perbedaan,</span>
        </div>
        <div>
          <span className="text-[#939090]">
            tidak hanya pada generasi ini, tetapi juga pada{" "}
          </span>
          <span>generasi yang akan datang.</span>
        </div>
      </section>
      <section id="Section5" className="max-w-4xl mx-auto pt-36">
        <div className="grid justify-center text-center font-semibold">
          <p className="text-6xl">Bergabunglah pada</p>
          <p className="text-red-600 text-7xl">Ibadah kami!</p>
        </div>
      </section>
      <section
        id="Section6"
        className="max-w-4xl mx-auto grid gap-10 pt-36 grid-flow-col"
      >
        <div className="w-xl flex flex-col gap-10 ">
          <div>
            <p className="text-4xl font-semibold">Hebron Center</p>
          </div>
          <div>
            <span className="text-lg w-96 font-normal py-16">
              Ruko L39, Kompleks Pasar Modern Paramount, Jl. Boulevard Raya
              Gading Serpong, Kabupaten Tangerang, Banten
            </span>
          </div>
          <div className="text-3xl font-normal w-72">
            <span>Setiap hari</span>
            <span className="font-medium"> Sabtu,</span>
            <span> Pukul</span>
            <span className="font-medium"> 17:00 WIB.</span>
          </div>
          <div className="flex gap-5 mt-7">
            <a
              href="https://www.google.com/maps?ll=-6.250675,106.62271&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=12761614219598690523"
              className="rounded border-2 border-white py-2 px-8 text-1xl text-center font-bold leading-8 flex items-center"
            >
              Contact Us
            </a>
            <a
              href="https://www.google.com/maps?ll=-6.250675,106.62271&z=16&t=m&hl=en&gl=ID&mapclient=embed&cid=12761614219598690523"
              className="rounded border-2 border-white py-2 px-8 text-1xl text-center font-bold leading-8 flex items-center"
            >
              Directions
            </a>
          </div>
        </div>
        <div>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0895283011228!2d106.62251707651045!3d-6.251933668562876!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fc76ad63a58b%3A0xb11a5c84cfc0f8db!2sGPdI%20Hebron%20Gading%20Serpong!5e0!3m2!1sen!2sid!4v1683108059648!5m2!1sen!2sid"
            className="w-[550px] h-[400px]"
          ></iframe>
        </div>
      </section>
    </>
  );
}
