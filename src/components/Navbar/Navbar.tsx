import { Icon } from "@iconify/react";
import Image from "next/image";
import { useState } from "react";

type Props = {
	open: boolean;
};

export const Navbar = () => {
	const [open, setOpen] = useState(false);

	const handleToggle = () => {
		setOpen(!open);
	};

	return (
		<div
			className={`${
				open
					? "fixed top-0 left-0 right-0 bottom-0 bg-white z-50 transform transition duration-300 ease-in-out"
					: "fixed top-[40px] left-[40px] flex-row justify-start"
			}`}
		>
			<nav
				className={`rounded-lg items-center cursor-pointer h-12 ${
					open
						? "bg-[#00347E] fixed top-[40px] left-[40px] w-12 flex items-center justify-center transform transition duration-300 ease-in-out"
						: "bg-white flex px-3 gap-3 transform transition duration-300 ease-in-out"
				}`}
				onClick={handleToggle}
			>
				{open ? (
					<Icon icon="akar-icons:cross" width={25} />
				) : (
					<>
						<Image src="/Hebron.png" alt="" width={25} height={0}></Image>
						<Icon icon="mdi-light:menu" width={25} className="text-[#0A0C0F]" />
					</>
				)}
			</nav>

			{open ? (
				<div className="max-w-xs md:max-w-none mx-auto flex md:px-24 mt-28 md:mt-0 md:py-28">
					<div className="flex flex-col md:flex-row gap-6 md:gap-36 ">
						<div className="hidden md:flex md:flex-col">
							<Image src="/Hebron.png" alt="" width={130} height={0}></Image>
							<p className="text-[#00347E] text-4xl font-semibold mt-4">
								GPdI Hebron
							</p>
							<p className="text-[#00347E] text-xl font-medium">
								Gading Serpong
							</p>
						</div>
						<div>
							<p className="text-[#00347E] text-4xl font-semibold">Beranda</p>
							<div className="mt-4 flex flex-col gap-2">
								<p className="text-[#00347E] text-base font-medium">
									Tentang Kami
								</p>
								<p className="text-[#00347E] text-base font-medium">
									Berita dan Artikel
								</p>
								<p className="text-[#00347E] text-base font-medium">
									Agenda Kegiatan
								</p>
								<p className="text-[#00347E] text-base font-medium">
									Kontak Kami
								</p>
							</div>
							<p className="text-[#00347E] text-4xl font-semibold mt-4">Spot</p>
							<div className="mt-4 flex flex-col gap-2">
								<p className="text-[#00347E] text-base font-medium">
									Tentang Spot
								</p>
								<p className="text-[#00347E] text-base font-medium">
									Komsel HoME
								</p>
							</div>
						</div>
						<div className="flex flex-col gap-6 md:gap-12 md:ps-14	">
							<p className="text-[#00347E] text-4xl font-semibold">DOTS</p>
							<p className="text-[#00347E] text-4xl font-semibold">FOCC</p>
							<p className="text-[#00347E] text-4xl font-semibold">
								Hebron Kids
							</p>
						</div>
					</div>
				</div>
			) : null}
		</div>
	);
};
