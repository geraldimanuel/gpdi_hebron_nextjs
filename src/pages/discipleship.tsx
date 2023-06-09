import React from "react";
import Image from "next/image";
import { Button } from "@/components/Button/Button";
import { Footer } from "@/components/Footer/Footer";
import { Card } from "@/components/Card/Card";
import { motion } from "framer-motion";
import Head from "next/head";
import { animate, animate_down2, animate_down_up } from "@/lib/FramerAnimation";

export default function discipleship() {
	return (
		<>
			<Head>
				<title>GPdI Hebron | HoME</title>
				<meta name="description" content="Meta description for the Home page" />
			</Head>
			<section className="w-full h-[500px] relative" id="section1">
				<div className="relative bg-gradient-to-t h-full from-black via-transparent to-transparent">
					<Image
						src="/Discipleship_Banner_4.webp"
						alt=""
						fill
						className="h-full object-cover -z-10"
					/>
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.3 }}
						className="flex flex-col items-start md:px-8 max-w-xs md:max-w-5xl mx-auto py-36 md:py-28"
					>
						<Image
							src="/Logo_Spot_White.webp"
							alt=""
							width={170}
							height={0}
							className="w-2/5 md:w-44 mb-5"
						/>
						<Image
							src="/Logo_HOME.webp"
							alt=""
							width={380}
							height={0}
							className="mb-8"
						/>
						<Button href="https://www.instagram.com/spot_gen" text="Join Us" />
					</motion.div>
				</div>
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
					<p className="mt-5">
						HOME is where Sahabat Jiwa conducts anointing and discipleship,
						teaching individuals to follow all of Christ's commandments. It is a
						space dedicated to nurturing and empowering souls, guiding them on
						their spiritual journey. Within the HOME discipleship, Sahabat Jiwa
						creates a community where individuals find support, understanding,
						and the opportunity to grow in their faith.
					</p>
				</div>
			</motion.section>
			<section
				id="section3"
				className="max-w-xs md:max-w-5xl mx-auto py-8 md:py-14 md:px-8"
			>
				<div className="grid grid-cols-2 md:grid-cols-4 gap-4 items-center">
					<div className="flex flex-col gap-4 mt-8 md:mt-0 justify-center">
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/1.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/2.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/3.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
					</div>
					<div className="flex flex-col gap-4">
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/4.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/5.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/6.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
					</div>
					<div className="flex flex-col gap-4 -mt-16 md:mt-0 justify-center">
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/7.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/8.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down2}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/9.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
					</div>
					<div className="flex flex-col gap-4">
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/10.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/11.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/12.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
						<motion.span
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down_up}
							viewport={{ once: false, margin: "100px", amount: 0.1 }}
						>
							<Image
								src="/group_image/13.jpg"
								alt="Stockphoto"
								width={250}
								height={0}
								className="object-cover"
							/>
						</motion.span>
					</div>
				</div>
			</section>
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
					<p className="mt-5">
						At HOME, we strive to embody the teachings of Jesus Christ by
						nurturing and caring for His flock with love and compassion. We
						believe in the transformative power of faith, humility, and leading
						by example, as outlined in the Scriptures.
					</p>
				</div>
			</motion.section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="section5"
				className="max-w-xs md:max-w-5xl mx-auto grid md:grid-cols-2 auto-rows-min gap-4 md:justify-between py-3 md:py-0 -z-20   md:px-8"
			>
				<Card
					heading="Holiness"
					text="In HOME, we are called to live in holiness as the foundation of our lives as children of God, embracing a life dedicated to righteousness and purity."
				/>
				<Card
					heading="Obedience"
					text="In HOME, we learn to live in obedience to the Word of God, aligning our actions and choices with His divine guidance and teachings."
				/>
				<Card
					heading="Ministry"
					text="HOME should thrive in a spirit of service, actively engaging in various forms of ministry to meet the needs of others and spread God's love within and beyond our community."
				/>
				<Card
					heading="Evangelism"
					text="HOME serves as a vessel for us to proclaim the good news, encouraging and equipping one another to share the Gospel with the world, inviting others to experience the transformative power of Christ."
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
				<div className="flex flex-col md:gap-44 md:flex-row justify-between items-center">
					<div className="flex md:basis-8/12 font-semibold text-4xl">
						<p>We're not meant to live life by ourselves.</p>
					</div>
					<div>
						<div className="w-5/6 md:w-full font-medium text-lg md:text-xl md:me-24 mt-3 md:mt-0">
							<p>Join us and find your small groups now in HOME!</p>
						</div>
					</div>
				</div>
				<div className="flex flex-wrap items-start md:justify-center gap-3 mt-12 md:mt-10">
					<Button href="https://wa.me/+6281349677136" text="Counseling" />
					<Button href="https://wa.me/+6281288690614" text="Contact Us" />
				</div>
			</motion.section>
			<section
				id="section7"
				className="w-full h-[300px] md:h-[600px] block relative -z-10"
			>
				<Image
					src="/Discipleship_Banner_3.webp"
					fill
					alt=""
					className="object-cover"
				/>
			</section>
			<Footer />
		</>
	);
}
