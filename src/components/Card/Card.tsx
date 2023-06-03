type Props = {
	heading: string;
	text: string;
};

export const Card = ({ heading, text }: Props) => {
	return (
		<div
			id="black"
			className={`-z-30 bg-black border-[#3EA2F4] border-4 min-h-[250px] md:min-h-[320px] drop-shadow-[6px_6px_0px_rgba(210,2,2,1)]  p-8 font-semibold text-4xl text-white flex flex-col justify-between`}
		>
			<p>{heading}</p>

			<p className="font-normal text-sm text-justify">{text}</p>
		</div>
	);
};
