import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export const Footer = () => {
	return (
		<div className="bg-white h-full">
			<div className="max-w-xs md:max-w-5xl mx-auto flex flex-col md:flex-row py-6 md:py-14 gap-8 md:gap-28 md:px-8">
				<div className="flex flex-col gap-2">
					<div className="flex items-center gap-3">
						<Image src="/Hebron.webp" alt="hebron" width={60} height={100} />
						<div className=" text-[#00347E]">
							<p className="font-semibold text-2xl">GPdI Hebron</p>
							<p className="font-medium text-sm -mt-2">Gading Serpong</p>
						</div>
					</div>
					<div className="text-black text-sm">
						<p>Jl. Boulevard Gading Serpong</p>
						<p>Ruko Thematic Blok L39 & L50,</p>
						<p>Gading Serpong</p>
					</div>
					<div className="text-black text-xs">
						<p className="font-semibold">Phone</p>
						<p>081387243736</p>
						<p>081314467562</p>
					</div>
				</div>
				<div className="hidden md:flex flex-col text-sm font-medium gap-3">
					<p className="font-semibold text-black text-base">Church</p>
					<Link href="https://gpdi-hebron.com/about" className="text-[#808080]">About Hebron</Link>
					<Link href="https://gpdi-hebron.com/news" className="text-[#808080]">News & Events</Link>
					<Link href="https://drive.google.com/open?id=1Y5ywBS7VoIO7mk_qc2X6nz7z18Bi_PHw&pli=1&authuser=0" className="text-[#808080]">Gallery</Link>
					{/* <Link href="" className="text-[#808080]">HOME groups</Link> */}
					<Link href="https://gpdi-hebron.com/kontak" className="text-[#808080]">Contact Us</Link>
				</div>
				<div className="hidden md:flex flex-col text-sm font-medium gap-3">
					<p className="font-semibold text-black text-base">Spot</p>
					<Link href="/" className="text-[#808080]">About Spot</Link>
					{/* <Link href="" className="text-[#808080]">Service Team</Link> */}
					<Link href="/discipleship" className="text-[#808080]">HOME Discipleship</Link>
				</div>
				<div className="hidden md:flex flex-col text-sm font-medium gap-3">
					<p className="font-semibold text-black text-base">FOCC</p>
					<p className="font-semibold text-black text-base">DoTS</p>
					<p className="font-semibold text-black text-base">Hebron Kids</p>
				</div>
				<div>
					<div className="md:hidden flex flex-row gap-20">
						<div className="flex flex-col text-sm font-medium gap-3">
							<p className="font-semibold text-black text-base">Church</p>
							<Link href="https://gpdi-hebron.com/about" className="text-[#808080]">About Hebron</Link>
							<Link href="https://gpdi-hebron.com/news" className="text-[#808080]">News & Events</Link>
							<Link href="https://drive.google.com/open?id=1Y5ywBS7VoIO7mk_qc2X6nz7z18Bi_PHw&pli=1&authuser=0" className="text-[#808080]">Gallery</Link>
							{/* <Link href="" className="text-[#808080]">HOME groups</Link> */}
							<Link href="https://gpdi-hebron.com/kontak" className="text-[#808080]">Contact Us</Link>
						</div>
						<div className="flex flex-col text-sm font-medium gap-3">
							<p className="font-semibold text-black text-base">FOCC</p>
							<p className="font-semibold text-black text-base">DoTS</p>
							<p className="font-semibold text-black text-base">Hebron Kids</p>
						</div>
					</div>
					<div className="md:hidden flex flex-col text-sm font-medium gap-3 mt-8 md:mt-0">
						<p className="font-semibold text-black text-base">Spot</p>
						<Link href="/" className="text-[#808080]">About Spot</Link>
						{/* <Link href="" className="text-[#808080]">Service Team</Link> */}
						<Link href="/discipleship" className="text-[#808080]">HOME Discipleship</Link>
					</div>
				</div>


			</div>


		</div>
	);
};
