import Image from "next/image";
import { Merriweather } from "@next/font/google";
import { Navbar } from "@/components/Navbar/Navbar";
import { Button } from "@/components/Button/Button";
import { SpotSVG } from "@/components/SpotSVG/SpotSVG";

const merri = Merriweather({
	subsets: ["latin"],
	weight: ["300", "400", "700"],
	style: ["italic"],
});

export default function Home() {
	return (
		<>
			<section id="Section1" className="o">
				<div id="Hero" className="min-h-screen relative">
					<Image
						src="/Banner.png"
						alt="Banner"
						fill
						className="relative -z-20 before:bg-black before:absolute before:inset-0 before:z-10 object-cover object-top"
					/>
					<div
						id="Hero Text"
						className="max-w-5xl mx-auto min-h-screen flex flex-col justify-center gap-6"
					>
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
							<Button text="Bergabung" />
						</div>
					</div>
				</div>
				<Navbar />
			</section>
			<section id="Section2" className="max-w-5xl mx-auto pt-36">
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
				<div className="relative">
					<div className="grid grid-cols-3 gap-4 relative z-10">
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
			</section>

			<section
				id="Section4"
				className="max-w-5xl mx-auto text-2xl text-left leading-10 py-36"
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
			<section id="Section5" className="relative">
				<Image src="/Banner_2.png" fill className="object-cover -z-10" alt="" />
				<div className="flex flex-col pt-14 max-w-5xl mx-auto ">
					<div className="flex flex-col gap-2 bg-clip-text text-transparent bg-gradient-to-b from-[#D9D9D9] to-[#717171] font-medium text-5xl tracking-widest">
						<p>Come, let us sing for joy to the</p>
						<p>LORD; let us shout aloud to the</p>
						<p>Rock of our salvation!</p>
					</div>
					<p className="font-medium italic text-xl text-[#717171]">
						Psalm 95:1 (NIV)
					</p>
					<div className="pt-96">
						<p className="text-3xl tracking-tight">Every Saturday,</p>
						<div className="flex text-3xl">
							<p>
								on{" "}
								<span className="font-medium tracking-tight">17.00 WIB.</span>
							</p>
						</div>
						<div className="flex gap-4 mt-3 pb-14">
							<Button text="Kontak Kami" />
							<Button text="Arah Jalan" />
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
