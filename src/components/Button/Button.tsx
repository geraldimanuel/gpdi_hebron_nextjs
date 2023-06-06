import Link from "next/link";

type Props = {
	text: string;
	href: string;
};

export const Button = ({ text, href }: Props) => {
	return (
		<button className="rounded-[3px] md:rounded-[6px] border-[1px] border-white hover:bg-white hover:text-black ">
			<Link href={href}>
				<p className="text-sm md:text-xl font-semibold my-2 mx-5 md:mx-8">
					{text}
				</p>
			</Link>
		</button>
	);
};
