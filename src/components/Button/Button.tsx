import Link from "next/link";

type Props = {
	text: string;
	href?: string;
};

export const Button = ({ text, href }: Props) => {
	return (
		<button className="rounded-sm border border-white hover:bg-white hover:text-black transition ">
			<Link href={href ?? "#"}>
				<p className="text-sm md:text-lg font-semibold my-2 mx-4 md:mx-6">
					{text}
				</p>
			</Link>
		</button>
	);
};
