import { AiOutlineWhatsApp } from "react-icons/ai";

export default function Phone() {
	return (
		<div className="flex items-center">
			<a
				href="http://wa.me/+6285868474405"
				target="_blank"
				rel="noreferrer"
				className="font-bold flex items-center"
			>
				<span>+62 858-6847-4405</span>
				<div className="rounded-full bg-green-800 ml-3 p-2 shadow-xl relative w-8 h-8">
					<AiOutlineWhatsApp className="w-5 h-5 absolute inset-1/2 transform translate-x-[-50%] translate-y-[-50%] text-white" />
				</div>
			</a>
		</div>
	);
}
