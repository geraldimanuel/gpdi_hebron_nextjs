import Image from "next/image";

type Props = {
	photo: string;
	name: string;
	text: string;
};

export const PhotoCard = ({ photo, name, text }: Props) => {
	return (
		<div
			id="black"
			className={`-z-30 bg-black border-[#3EA2F4] border-4 min-h-[270px] 
			drop-shadow-[6px_6px_0px_rgba(210,2,2,1)]  p-8 font-semibold text-4xl md:text-5xl 
			text-white flex flex-col items-center`}
		>
			<Image
				src={photo}
				alt=""
				width={75}
				height={0}
				className="rounded-full"
			/>

			<p className="text-2xl md:text-3xl my-4">{name}</p>

			<p className="font-normal text-base md:text-sm text-justify">{text}</p>
		</div>
	);
};
