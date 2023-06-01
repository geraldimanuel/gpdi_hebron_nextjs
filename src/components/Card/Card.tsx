type Props = {
	heading: string;
	text: string;
	height: string;
	width: string;
};

export const Card = ({ heading, text, height, width }: Props) => {
	return (
		<div
			id="black"
			className={`bg-black border-[#3EA2F4] border-4 drop-shadow-[6px_6px_0px_rgba(210,2,2,1)] h-[${height}px] w-[${width}px] p-8 font-semibold text-4xl text-white flex flex-col justify-between`}
		>
			<p>{heading}</p>

			<p className="font-normal text-sm text-justify">{text}</p>
		</div>
	);
};
