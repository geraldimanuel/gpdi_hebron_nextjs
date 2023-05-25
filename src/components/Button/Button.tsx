import { Icon } from "@iconify/react";
import Image from "next/image";

type Props = {
	logo: string;
	iconLogo: string;
};

export const Button = ({ logo, iconLogo }: Props) => {
	return (
		<button className="flex bg-[#ffffff] rounded-[6px] py-1">
			<Image src={logo} alt="icon" width={80} height={44} />
			<Icon icon={iconLogo} width={50} />
		</button>
	);
};
