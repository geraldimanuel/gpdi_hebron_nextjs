type Props = {
	heading: string;
	text: string;
	// height: string;
	// width: string;
};

export const Card = ({ heading, text }: Props) => {
	return (
		<div id="red" className={`bg-[#D20202] h-[380px] w-[320px] p-[7px]`}>
			<div id="blue" className={`bg-[#3EA2F4] h-[380px] w-[320px]`}>
				<div
					id="black"
					className={`bg-black h-[373px] w-[313px] z-30 p-8 font-semibold text-4xl text-white flex flex-col justify-between`}
				>
					<p>This is a Values card</p>

					<p className="font-normal text-sm text-justify">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vel
						convallis lacus. Nam at ultrices nulla. Nam sed hendrerit magna, vel
						finibus nulla.
					</p>
				</div>
			</div>
		</div>
	);
};
