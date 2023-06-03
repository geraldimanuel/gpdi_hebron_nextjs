type Props = {
	text: string;
};

export const Button = ({ text }: Props) => {
	return (
		<button className="rounded-[6px] border-[1px] border-white hover:bg-white hover:text-black ">
			<p className="text-xl font-semibold my-2 mx-8">{text}</p>
		</button>
	);
};
