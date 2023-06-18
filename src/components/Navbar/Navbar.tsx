import { Icon } from "@iconify/react";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const { events } = useRouter();
  
  const handleToggle = () => {
    setOpen(!open);
  };

  useEffect(() => {
    events.on("routeChangeComplete", () => { setOpen(false) });

    // FIXME: gw gasuka implementasi yang ini..
    if(open) document.body.classList.add("overflow-hidden");
    else document.body.classList.remove("overflow-hidden");

    return events.off("routeChangeComplete", () => { setOpen(false) });
  }, [open])
  
  return (
    <div
    className={`fixed inset-x-0 h-screen z-50 ${open ? "overflow-auto" : "pointer-events-none overflow-hidden"}`}
      // className={`fixed flex top-0 inset-x-0 md:top-6 md:inset-x-6 ${
      //   open
      //     ? "z-50 rounded-xl"
      //     : "flex-row justify-start z-50"
      // }`}
    >
      <nav
        className={`pointer-events-auto rounded-lg min-w-[50px] flex flex-0 flex-row items-center cursor-pointer h-12 fixed top-4 left-4 transition-all text-hebron-blue z-50 duration-300 ${
          open
            ? "bg-hebron-blue justify-center"
            : "bg-white px-3 gap-3 "
        }`}
        onClick={handleToggle}
      >
        {open ? (
          <Icon icon="akar-icons:cross" className="text-white w-12" width={25} />
        ) : (
          <>
            <Image src="/Hebron.webp" alt="" width={25} height={0}></Image>
            <Icon icon="mdi-light:menu" width={25} className="text-[#0A0C0F] w-12" />
          </>
        )}
      </nav>

      <div
        className={`w-full overflow-y-auto md:overflow-y-none relative z-40 flex py-24 px-8 md:px-24 md:py-28 min-h-screen md:min-h-[initial] text-hebron-blue transition-all duration-300 bg-white md:rounded-b-xl ${
          open ? "visible translate-x-0 md:translate-y-0 opacity-100" : "invisible -translate-x-full md:translate-x-0 md:-translate-y-full opacity-0"
        }`}
      >
        <div className="flex flex-col md:flex-row gap-6 md:gap-36 ">
          <div className="md:flex md:flex-col">
            <Image src="/Hebron.webp" alt="" width={130} height={0}></Image>
            <p className=" text-4xl font-semibold mt-4">GPdI Hebron</p>
            <p className=" text-xl font-medium">Gading Serpong</p>
          </div>
          {/* TODO: keknya lebih elegan kalo bikin menunya di JSON trus tinggal looping doang disini? */}
          <div>
            <Link href="https://gpdi-hebron.com/" className=" text-4xl font-semibold">
              Beranda
            </Link>
            <div className="mt-4 flex flex-col gap-2">
              <Link href="https://gpdi-hebron.com/about" className="text-base font-medium">
                Tentang Kami
              </Link>
              <Link href="https://gpdi-hebron.com/news" className=" text-base font-medium">
                Berita dan Artikel
              </Link>
              <Link href="https://gpdi-hebron.com/agenda" className=" text-base font-medium">
                Agenda Kegiatan
              </Link>
              <Link href="https://gpdi-hebron.com/kontak" className=" text-base font-medium">
                Kontak Kami
              </Link>
            </div>
            <div className="mt-8 flex flex-col gap-2">
              <Link href="#" className=" text-4xl font-semibold">
                SPoT
              </Link>
              <Link href="/" className=" text-base font-medium">
                Tentang SPoT
              </Link>
              <Link href="/discipleship" className=" text-base font-medium">
                Komsel HoME
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 md:gap-12 md:ps-14	">
            <Link href="https://gpdi-hebron.com/agenda/descendants-of-truths-teens/26" className=" text-4xl font-semibold">
              DOTS
            </Link>
            <Link href="https://gpdi-hebron.com/agenda/umum/22" className=" text-4xl font-semibold">
              FOCC
            </Link>
            <Link href="https://gpdi-hebron.com/agenda/hebron-kids/23" className=" text-4xl font-semibold">
              Hebron Kids
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
