import React from "react";
import Image from "next/image";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";
import { motion } from "framer-motion";
import Head from "next/head";

export default function discipleship() {
	const animate = {
		offscreen: { x: -100, opacity: 0 },
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { duration: 1 },
		},
	};

	return (
		<>
			<Head>
				<title>GPdI Hebron | HoME</title>
				<meta name="description" content="Meta description for the Home page" />
			</Head>
			<section className="w-full h-[500px] relative" id="section1">
				<Navbar />
				<Image
					src="/Discipleship_Banner.webp"
					alt=""
					fill
					className="object-cover -z-10"
				/>
				<motion.div
					initial={"offscreen"}
					whileInView={"onscreen"}
					variants={animate}
					viewport={{ once: false, amount: 0.3 }}
					className="flex flex-col items-center md:items-start px-10 md:px-8 max-w-xs md:max-w-5xl mx-auto py-32 md:py-28 "
				>
					<Image
						src="/Logo_Spot_White.webp"
						alt=""
						width={170}
						height={0}
						className="mb-5"
					/>
					{/* image home kasih mb-8 ya!*/}
					<Image
						src="/Logo_HOME.webp"
						alt=""
						width={300}
						height={0}
						className="mb-5"
					/>
					<Button text="Join Us" />
				</motion.div>
			</section>
			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				className="max-w-xs md:max-w-5xl mx-auto py-0 md:py-10 md:px-8"
				id="section2"
			>
				<div className="text-lg md:text-xl">
					<p className="font-semibold text-sm  md:text-base">What is HOME?</p>
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
			</motion.section>
			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="section3"
				className="max-w-xs md:max-w-5xl mx-auto py-8 md:py-14   md:px-8"
			>
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
			</motion.section>
			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				className="max-w-xs md:max-w-5xl mx-auto py-8 md:py-12   md:px-8"
				id="section4"
			>
				<div className="text-lg md:text-xl">
					<p className="font-semibold text-sm md:text-base">What we believe?</p>
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
			</motion.section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="section5"
				className="max-w-xs md:max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:justify-between py-3 md:py-0 -z-20   md:px-8"
			>
				<Card
					heading="Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel convallis lacus. Nam at ultrices nulla. Nam sed hendrerit magna, vel finibus nulla."
					height="380"
					width="320"
				/>
				<Card
					heading="Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel convallis lacus. Nam at ultrices nulla. Nam sed hendrerit magna, vel finibus nulla."
					height="380"
					width="320"
				/>
				<Card
					heading="Heading"
					text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel convallis lacus. Nam at ultrices nulla. Nam sed hendrerit magna, vel finibus nulla."
					height="380"
					width="320"
				/>
			</motion.section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				className="max-w-xs md:max-w-5xl mx-auto py-14 md:py-28 flex flex-col   md:px-8"
				id="section6"
			>
				<div className="flex flex-col md:flex-row justify-between items-center">
					<div className="font-semibold text-3xl md:text-4xl">
						<p>We're not meant to</p>
						<p>live life by ourselves.</p>
					</div>
					<div className="font-medium text-lg md:text-xl md:me-24 mt-3 md:mt-0">
						<p>Join us and find your small groups</p>
						<p>now in HOME!</p>
					</div>
				</div>
				<div className="flex flex-col md:flex-row md:justify-center gap-3 mt-3 md:mt-10">
					<Button text="Counseling" />
					<Button text="Contact Us" />
				</div>
			</motion.section>
			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="section7"
				className="xs:hidden md:relative md:w-full md:h-[600px] md:-z-10"
			>
				<Image
					src="/Discipleship_Banner_2.webp"
					fill
					alt=""
					className="object-cover"
				/>
			</motion.section>
			<Footer />
		</>
	);
}
