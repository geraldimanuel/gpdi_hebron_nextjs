import React from "react";
import Image from "next/image";
import { Merriweather } from "@next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";

export default function discipleship() {
	return (
		<>
			<section className="w-full h-[500px] relative" id="section1">
				<Navbar />
				<Image
					src="/Discipleship_Banner.png"
					alt=""
					fill
					className="object-cover -z-10"
				/>
				<div className="max-w-5xl mx-auto py-28">
					<Image
						src="/logo_spot.png"
						alt=""
						width={170}
						height={0}
						className="mb-8"
					/>
					{/* image home kasih mb-8 ya!*/}
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
			<section id="section3" className="max-w-5xl mx-auto py-14">
				<div className="flex gap-4 items-center">
					<div className="flex flex-col gap-4 justify-center">
						<Image
							src="/group_image/1.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/2.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/3.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<Image
							src="/group_image/4.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/5.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/6.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col gap-4 justify-center">
						<Image
							src="/group_image/7.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/8.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/9.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
					</div>
					<div className="flex flex-col gap-4">
						<Image
							src="/group_image/10.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/11.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/12.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
						<Image
							src="/group_image/13.png"
							alt="Stockphoto"
							width={250}
							height={0}
							className="object-cover"
						/>
					</div>
				</div>
			</section>
			<section className="max-w-5xl mx-auto py-12" id="section4">
				<div className="text-xl">
					<p className="font-semibold text-base">What we believe?</p>
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
				id="section5"
				className="max-w-5xl mx-auto flex gap-1 justify-between"
			>
				<Card heading="hai" text="" />
				<Card heading="hai" text="" />
				<Card heading="hai" text="" />
			</section>
			<section className="max-w-5xl mx-auto py-28" id="section6">
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
			<section id="section7" className="relative w-full h-[600px] -z-10">
				<Image
					src="/Discipleship_Banner_2.png"
					fill
					alt=""
					className="object-cover"
				/>
			</section>
			<Footer />
		</>
	);
}
