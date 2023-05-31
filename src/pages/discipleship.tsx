import React from "react";
import Image from "next/image";
import { Merriweather } from "@next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { SpotSVG } from "@/components/SpotSVG/SpotSVG";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";

export default function discipleship() {
	return (
		<>
			<section className="h-[500px] relative" id="section1">
				<Navbar />
				<Image
					src="/Discipleship_Banner.png"
					alt=""
					fill
					className="object-cover -z-10"
				/>
				<div className="max-w-5xl mx-auto py-28">
					<Button text="Join Us" />
				</div>
			</section>
			<section className="max-w-5xl mx-auto py-10" id="section2">
				<div className="text-xl">
					<p className="font-semibold text-base">What is HOME?</p>
					<p className="mt-2">
						HOME is a small groups community by SPoT, Lorem ipsum dolor sit
						amet, consectetur
					</p>
					<p>
						adipiscing elit. Duis auctor feugiat porttitor. Ut tincidunt, ligula
						a convallis vehicula, enim ligula
					</p>
					<p>vestibulum metus, sed varius dolor libero mollis lacus.</p>
				</div>
			</section>
			<section
				id="section3"
				className="max-w-5xl mx-auto flex gap-1 justify-between"
			>
				<Card heading="hai" text="" />
				<Card heading="hai" text="" />
				<Card heading="hai" text="" />
			</section>
			<section className="max-w-5xl mx-auto py-28" id="section4">
				<div className="flex justify-between items-center">
					<div className="font-semibold text-4xl">
						<p>We're not meant to</p>
						<p>live life by ourselves.</p>
					</div>
					<div className="font-medium text-xl me-24">
						<p>Join us and find your small groups</p>
						<p>now in HOME!</p>
					</div>
				</div>
				<div className="flex justify-center gap-3 mt-10">
					<Button text="Counseling" />
					<Button text="Contact Us" />
				</div>
			</section>
			<section id="section5" className="relative -z-10">
				<Image
					src="/Discipleship_Banner_2.png"
					width={1920}
					height={0}
					alt=""
					className="object-cover"
				/>
			</section>
			<Footer />
		</>
	);
}
