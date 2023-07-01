import Image from "next/image";
import { Merriweather } from "next/font/google";
import { Navbar, Button, SpotSVG, Footer, ProgramCard } from "@/components";
import { PhotoCard } from "@/components/PhotoCard/PhotoCard";
import { motion } from "framer-motion";
import Head from "next/head";
import { animate, animate_down, animate_staged } from "@/lib/FramerAnimation";

const merri = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["italic"],
});

export default function Home() {
	return (
		<>
			<Head>
				<title>GPdI Hebron | SPoT</title>
				<meta name="description" content="Meta description for the Home page" />
			</Head>
			<section id="Section1" className="">
				<div id="Hero" className="h-[60vh] md:min-h-screen relative">
					<Image
						src="/Banner.webp"
						alt="Banner"
						fill
						className="min-h-full relative -z-20 before:bg-black before:absolute before:inset-0 before:z-10 object-cover object-top"
					/>
					<div
						id="Hero Text"
						className="max-w-xs md:max-w-5xl mx-auto min-h-screen flex flex-col md:py-0 py-40 md:px-8 md:items-start md:justify-center gap-6"
					>
						<motion.div
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate}
							viewport={{ once: false, amount: 0.1 }}
							className="flex flex-col"
						>
							<p className="text-sm md:text-base font-semibold tracking-[5px]">
								We are
							</p>
							<h1 className="text-6xl md:text-8xl font-bold">SPEAKER</h1>
							<div className="flex flex-row gap-7">
								<div className={merri.className}>
									<h1 className="text-6xl md:text-8xl font-medium">of</h1>
								</div>
								<h1 className="text-6xl md:text-8xl font-bold">TRUTH</h1>
							</div>
						</motion.div>
						<motion.div
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate}
							viewport={{ once: false, amount: 0.1 }}
						>
							<div className="flex gap-2 md:gap-3">
								{/* <Button href="https://www.instagram.com/spot_gen/" text="Learn More" /> */}
								<Button
									href="https://www.instagram.com/spot_gen/"
									text="Join Us"
								/>
							</div>
						</motion.div>
					</div>
				</div>
			</section>
			<section
				id="Section2"
				className="max-w-xs md:max-w-5xl mx-auto md:pt-36 md:px-8"
			>
				<div className="md:grid md:grid-cols-2 md:grid-flow-col">
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						transition={{ staggerChildren: 0.5 }}
						variants={animate}
						viewport={{ once: false, amount: 0.1 }}
						className="text-4xl md:text-6xl font-bold"
					>
						<h1>Transforming Lives,</h1>
						<h1>Spreading Light.</h1>
					</motion.div>
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						transition={{ staggerChildren: 0.5 }}
						variants={animate_staged}
						viewport={{ once: false, amount: 0.1 }}
						className="text-base text-right mt-10 md:mt-0 md:text-left md:text-2xl font-medium max-w-md"
					>
						<h1>
							We believe that life is better when surrounded by people who
							encourage, support, and challenge you to grow in your relationship
							with Christ.
						</h1>
					</motion.div>
				</div>
			</section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.1 }}
				id="Section3"
				className="md:max-w-7xl min-h-screen pt-16 md:mx-auto md:pt-36 md:px-8"
			>
				<div className="relative">
					<div className="grid grid-cols-3 gap-1 md:gap-4 relative -z-10 grayscale">
						<div className="bg-red-700 h-52 md:h-72 relative">
							<Image
								src="/beranda_image/1.JPG"
								alt="Stockphoto"
								fill
								quality="50"
								className="object-cover"
								sizes="100%"
							/>
						</div>
						<div className="bg-red-700 h-52 md:h-72 col-span-2 relative">
							<Image
								src="/beranda_image/2.JPG"
								alt="Stockphoto"
								fill
								quality="50"
								className="object-cover"
								sizes="100%"
							/>
						</div>
						<div className="bg-red-700 h-52 md:h-72 col-span-2 relative">
							<Image
								src="/beranda_image/3.JPG"
								alt="Stockphoto"
								fill
								quality="50"
								className="object-cover"
								sizes="100%"
							/>
						</div>
						<div className="bg-red-700 h-52 md:h-72 relative">
							<Image
								src="/beranda_image/4.JPG"
								alt="Stockphoto"
								fill
								quality="50"
								className="object-cover"
								sizes="100%"
							/>
						</div>
					</div>

					<div
						className="
            flex flex-col md:flex-row justify-between gap-12 p-8 md:p-14 md:w-[75vw] m-4 
            relative -top-24 md:absolute md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 z-10
            bg-black font-sans md:drop-shadow-[7px_7px_0_#ff0000]"
					>
						<div className="w-11/12">
							<div className="max-w-xs">
								<SpotSVG />
							</div>
							<div className="grid mt-4 md:mt-7">
								<span className="text-2xl md:text-2xl font-semibold">
									Speaker of Truth
								</span>
								<span className="text-md md:text-md font-medium italic">
									Komunitas Pemuda GPdI Hebron Gading Serpong
								</span>
							</div>
						</div>
						<div className="">
							<p className="font-semibold leading-7">
								SPoT, which stands for Speakers of Truth, is a dynamic Christian
								youth community from GPdI Hebron Gading Serpong; committed to
								spreading the truth and power of the Holy Spirit in the Gading
								Serpong area.
							</p>
							<p className="mt-2 text-md leading-7">
								Through our services, events, and genuine connections, we
								inspire and empower young individuals to live out their faith
								authentically and make a positive impact in their community.
								SPoT is more than just a community; it's a catalyst for
								spiritual transformation and a beacon of truth in Gading
								Serpong.
							</p>
							<div className="mt-5">
								<Button
									href="https://www.instagram.com/spot_gen/"
									text="Learn More"
								/>
							</div>
						</div>
					</div>
				</div>
			</motion.section>

			{/* <motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="section5"
				className="max-w-xs md:max-w-5xl mx-auto grid md:grid-cols-3 auto-rows-min gap-4 md:justify-between py-3 md:pt-32 -z-20 justify-between  md:px-8"
			>
				<PhotoCard
					photo="/so_hee.jpg"
					name="Victor Repi"
					text="Leadership is not about being in charge, but about serving others with love and humility."
				/>
				<PhotoCard
					photo="/so_hee.jpg"
					name="Christian S."
					text="As Christian leaders, we are called to be examples of Christ's love and compassion in all that we do"
				/>
				<PhotoCard
					photo="/so_hee.jpg"
					name="Redo Yosef"
					text="Leadership rooted in prayer and reliance on God's wisdom can move mountains and transform lives."
				/>
			</motion.section> */}

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.1 }}
				id="Section4"
				className="max-w-xs md:max-w-5xl mx-auto text-xl md:text-3xl md:px-8 text-left leading-10 py-14 md:py-36"
			>
				<div>
					<span className="text-white/50">We are here </span>
					<span>to make a difference,</span>
				</div>
				<div>
					<span className="text-white/50">not only for </span>
					<span className="text-white/50">this generation, but also </span>
					<span>for the generations to come.</span>
				</div>
			</motion.section>

			<section id="Section5" className="relative">
				<Image
					src="/Banner_2.webp"
					fill
					className="object-cover -z-10"
					alt=""
				/>
				<div className="flex flex-col md:pt-14 max-w-xs justify-between md:max-w-5xl mx-auto md:px-8 min-h-screen">
					<div>
						<motion.div
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down}
							viewport={{ once: false, amount: 0.1 }}
							className="flex flex-col md:gap-2 bg-clip-text text-transparent bg-gradient-to-b from-white/80 to-white/25 font-medium text-2xl md:text-5xl tracking-widest"
						>
							<p>Come, let us sing for joy to the</p>
							<p>LORD; let us shout aloud to the</p>
							<p>Rock of our salvation!</p>
						</motion.div>
						<motion.p
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate_down}
							viewport={{ once: false, amount: 0.1 }}
							className="font-medium italic text-white/30"
						>
							Psalm 95:1 (NIV)
						</motion.p>
					</div>
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate_down}
						viewport={{ once: false, amount: 0.1 }}
						className=""
					>
						<p className="text-xl md:text-3xl tracking-tight">
							Every Saturday,
						</p>
						<div className="flex text-xl md:text-3xl">
							<p>
								on{" "}
								<span className="font-medium tracking-tight">17.00 WIB.</span>
							</p>
						</div>
						<div className="flex w-fit md:w-full flex-wrap gap-2 md:gap-4 mt-3 pb-14">
							<Button href="https://wa.me/+6281288690614" text="Contact Us" />
							<Button
								href="https://goo.gl/maps/x32zhLbgF53JSbj29"
								text="Directions"
							/>
						</div>
					</motion.div>
				</div>
			</section>

			<section
				id="Section6"
				className="mx-6 md:max-w-5xl md:mx-auto py-10 md:py-36 md:px-8"
			>
				<motion.p
					initial={"offscreen"}
					whileInView={"onscreen"}
					variants={animate}
					viewport={{ once: false, amount: 0.1 }}
					className="text-4xl text-left md:text-5xl mt-12 mb-6"
				>
					Our Programs
				</motion.p>
				<div className="pt-10 flex flex-col gap-4">
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.1 }}
						className="relative rounded-3xl overflow-hidden"
					>
						<ProgramCard
							subtitle="A small groups community to help you live within God’s grace"
							background="/Banner_Home.webp"
							logo="/Logo_HOME.webp"
							bgColor="blue"
						>
							<Button text="Counseling" href="https://wa.me/+6281349677136" />
							<Button text="Learn More" href="/discipleship" />
						</ProgramCard>
					</motion.div>

					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.1 }}
						className="relative rounded-3xl overflow-hidden"
					>
						<ProgramCard
							subtitle="Service Team by SPoT who serves in Praise & Worship ministry, and more"
							background="/Banner_SPOT.webp"
							logo="/Logo_Spot_Service_Team.webp"
							bgColor="red"
						>
							<Button
								href="https://wa.me/+6281288690614"
								text="Join our Service team"
							/>
						</ProgramCard>
					</motion.div>

					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.1 }}
						className="relative rounded-3xl overflow-hidden"
					>
						<ProgramCard
							subtitle="Shine the Light of Faith with SPoT's Media Team - Captivating Visuals, Divine Stories!"
							background="/Media_Banner.webp"
							logo="/Logo_Spot_Media_Team.webp"
							bgColor="yellow"
						>
							<Button
								href="https://wa.me/+6281288690614"
								text="Join our Media team"
							/>
						</ProgramCard>
					</motion.div>
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.1 }}
						className="relative rounded-3xl overflow-hidden"
					>
						<ProgramCard
							subtitle="Unleash Your Imagination with SPoT's Creative Team - Where Innovation Meets Inspiration!"
							background="/Creative_Banner.webp"
							logo="/Logo_Spot_Creative_Team.webp"
							bgColor="orange"
						>
							<Button
								href="https://wa.me/+6281288690614"
								text="Join our Creative team"
							/>
						</ProgramCard>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	);
}
