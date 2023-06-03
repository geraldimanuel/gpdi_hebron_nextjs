import Image from "next/image";
import { Merriweather } from "@next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { SpotSVG } from "@/components/SpotSVG/SpotSVG";
import { Footer } from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import Head from "next/head";

const merri = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["italic"],
});

export default function Home() {
	const animate = {
		offscreen: { x: -100, opacity: 0 },
		onscreen: {
			x: 0,
			opacity: 1,
			transition: { delay: 0.2, duration: 1.5, type: "spring", bounce: 0.2 },
		},
	};

	const animate_down = {
		offscreen: { y: -100, opacity: 0 },
		onscreen: {
			y: 0,
			opacity: 1,
			transition: { delay: 0.2, duration: 1.5, type: "spring", bounce: 0.2 },
		},
	};
	return (
		<>
			<Head>
				<title>GPdI Hebron | SPoT</title>
				<meta name="description" content="Meta description for the Home page" />
			</Head>
			<section id="Section1" className="">
				<div id="Hero" className="h-[500px] md:min-h-screen relative">
					<Image
						src="/Banner.webp"
						alt="Banner"
						fill
						className="relative -z-20 before:bg-black before:absolute before:inset-0 before:z-10 object-cover object-top"
					/>
					<div
						id="Hero Text"
						className="max-w-xs md:max-w-5xl mx-auto min-h-screen flex flex-col md:py-0 py-40 md:px-8 items-center md:items-start  md:justify-center gap-6"
					>
						<motion.div
							initial={"offscreen"}
							whileInView={"onscreen"}
							variants={animate}
							viewport={{ once: false, amount: 0.3 }}
							className="flex flex-col"
						>
							<p className="text-sm md:text-base font-semibold tracking-[5px]">
								Kami adalah
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
							viewport={{ once: false, amount: 0.3 }}
						>
							<Button text="Bergabung" />
						</motion.div>
					</div>
				</div>
				<Navbar />
			</section>
			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="Section2"
				className="max-w-xs md:max-w-5xl mx-auto md:pt-36 md:px-8"
			>
				<div className="grid grid-cols-2 grid-flow-col">
					<div className="text-3xl md:text-6xl font-bold">
						<h1>Insert Text.</h1>
						<h1>In Here.</h1>
					</div>
					<div className="text-base md:text-2xl font-medium max-w-md">
						<h1>
							Kami percaya bahwa hidup akan lebih baik jika dikelilingi oleh
							orang-orang yang mendorong, mendukung, dan menantang kamu untuk
							bertumbuh dalam hubungan dengan Kristus.
						</h1>
					</div>
				</div>
			</motion.section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="Section3"
				className="xs:hidden max-w-xs md:max-w-7xl mx-auto md:pt-36 md:px-8"
			>
				<div className="relative">
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

					<div className="flex w-10/12 absolute bottom-28 z-10 bg-black inset-x-28 p-14 gap-16 font-sans">
						<div>
							<div>
								<SpotSVG />
							</div>
							<div className="grid mt-7">
								<span className="text-3xl font-semibold">Speaker of Truth</span>
								<span className="text-lg font-medium italic">
									Komunitas Pemuda GPdI Hebron Gading Serpong
								</span>
							</div>
						</div>
						<div className="w-4/5">
							<p className="font-semibold text-lg">
								SPoT adalah lorem ipsum dolor sit amet, consectetur adipiscing
								elit. Sed vel neque ut sem hendrerit elementum. Nam vel rutrum
								tortor.
							</p>
							<p className="text-lg mt-4">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis
								auctor feugiat porttitor. Ut tincidunt, ligula a convallis
								vehicula, enim ligula vestibulum metus, sed varius dolor libero
								mollis lacus. In accumsan ante mauris, vitae ultricies odio
								euismod quis. Phasellus ultricies iaculis nisi, vel porttitor
								ipsum placerat nec.
							</p>
						</div>
					</div>
				</div>
			</motion.section>

			<motion.section
				initial={"offscreen"}
				whileInView={"onscreen"}
				variants={animate}
				viewport={{ once: false, amount: 0.3 }}
				id="Section4"
				className="max-w-xs md:max-w-5xl mx-auto text-xl md:text-2xl md:px-8 text-center md:text-left leading-10 py-14  md:py-36"
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
			</motion.section>
			<motion.section id="Section5" className="relative -z-20">
				<Image
					src="/Banner_2.webp"
					fill
					className="object-cover -z-10"
					alt=""
				/>
				<motion.div
					initial={"offscreen"}
					whileInView={"onscreen"}
					variants={animate_down}
					viewport={{ once: false, amount: 0.3 }}
					className="flex flex-col md:pt-14 max-w-xs  md:max-w-5xl mx-auto   md:px-8 "
				>
					<div className="flex flex-col md:gap-2 bg-clip-text text-transparent bg-gradient-to-b from-[#D9D9D9] to-[#717171] font-medium text-2xl md:text-5xl tracking-widest">
						<p>Come, let us sing for joy to the</p>
						<p>LORD; let us shout aloud to the</p>
						<p>Rock of our salvation!</p>
					</div>
					<p className="font-medium italic text-xl text-[#717171]">
						Psalm 95:1 (NIV)
					</p>
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate_down}
						viewport={{ once: false, amount: 0.3 }}
						className="pt-20 md:pt-96"
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
						<div className="flex flex-col md:flex-row gap-2  md:gap-4 mt-3 pb-14">
							<Button text="Kontak Kami" />
							<Button text="Arah Jalan" />
						</div>
					</motion.div>
				</motion.div>
			</motion.section>

			<section
				id="Section6"
				className="max-w-xs md:max-w-5xl mx-auto -z-10 py-10 md:py-36   md:px-8"
			>
				<motion.p
					initial={"offscreen"}
					whileInView={"onscreen"}
					variants={animate}
					viewport={{ once: false, amount: 0.3 }}
					className="text-4xl text-center md:text-left md:text-5xl"
				>
					Our Programs
				</motion.p>
				<div className="pt-10 flex flex-col gap-4 -z-20">
					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.5 }}
						className="relative h-80 -z-30"
					>
						<div className="after:absolute after:inset-0 after:bg-[#2052D2] after:rounded-2xl after:mix-blend-multiply">
							<Image
								src="/Banner_Home.webp"
								fill
								className="object-cover rounded-2xl"
								alt=""
							/>
						</div>
						<div className="absolute h-80 flex flex-col md:flex-row items-center md:gap-10 w-full md:p-28 p-6">
							<div className="drop-shadow-[6px_6px_0px_rgba(210,2,2,1)]">
								<Image src="/Logo_HOME.webp" height={600} width={600} alt="" />
							</div>
							<div className="flex flex-col md:gap-11 gap-1">
								<p className="md:text-2xl text-xl font-semibold tracking-tight text-center md:text-left">
									A small groups community to help you live within God's grace
								</p>
								<div className="flex gap-2.5 flex-col md:flex-row">
									<Button text="Counseling" />
									<Button text="Learn More" />
								</div>
							</div>
						</div>
					</motion.div>

					<motion.div
						initial={"offscreen"}
						whileInView={"onscreen"}
						variants={animate}
						viewport={{ once: false, amount: 0.5 }}
						className="relative h-80 -z-30"
					>
						<div className="after:absolute after:inset-0 after:bg-[#952C2C] after:rounded-2xl after:mix-blend-multiply">
							<Image
								src="/Banner_SPOT.webp"
								fill
								className="object-cover rounded-2xl"
								alt=""
							/>
						</div>
						<div className="absolute h-80 flex flex-col md:flex-row items-center gap-5 w-full md:p-28 p-6 pt-10">
							<div>
								<Image
									src="/Logo_Spot_Service_Team.webp"
									height={750}
									width={750}
									alt=""
								/>
							</div>
							<div className="flex flex-col md:gap-11 gap-5">
								<p className="md:text-2xl text-xl font-semibold tracking-tight text-center md:text-left">
									Service Team by SPoT who serves in Praise & Worship ministry,
									and more
								</p>
								<div className="flex flex-col md:flex-row">
									<Button text="Join our Team" />
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</section>

			<Footer />
		</>
	);
}
