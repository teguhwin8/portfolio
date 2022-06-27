import {DiReact} from "react-icons/di";
import Image from "next/image";

export default function Hero() {
	return (
		<div className="md:flex md:flex-col w-full px-5 py-20 min-h-screen justify-between">
			<div className="md:flex justify-between items-center">
				<div className="text-6xl font-bold my-10">
					<h1 className="">Hey There,</h1>
					<h1 className="">I{"'"}m Teguh</h1>
				</div>
				<div className="text-md my-10">
					<h1 className="mr-4">
						A Fullstack Web Developer <br /> Based in Indonesia
					</h1>
				</div>
			</div>
			<div className="md:flex justify-between items-center">
				<div className="my-10">
					<h1 className="text-orange-600 font-bold">teguhwin8@gmail.com</h1>
				</div>
			</div>
			<div className="md:flex justify-between items-center">
				<div className="flex items-center">
					<div className="text-8xl mr-3 font-bold">
						{new Date().getFullYear() - 2018}
					</div>
					<div className="text-xl uppercase">Years <br /> Experience</div>
				</div>
				<div className="text-md ">
					<div className="text-black text-center text-5xl flex items-center gap-5">
						<DiReact className="text-cyan-500" />
						<Image src="/MongoDBLogoBrand1.png" width={114} height={31} alt="NextJS Logo" />
						<Image src="/Nextjs-logo.svg" width={78} height={78} alt="NextJS Logo" />
					</div>
				</div>
			</div>
		</div>
	);
}
