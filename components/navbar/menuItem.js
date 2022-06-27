import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function MenuItem(props) {
	const [isHover, setIsHover] = useState(false);
	const handleOnMouseEnter = () => setIsHover(true);
	const handleOnMouseLeave = () => setIsHover(false);
	const router = useRouter();

	return (
		<>
			<div
				className={
					"menu-item transition-all duration-75 " +
					(isHover || router.pathname == props.path
						? "capitalize text-[#246c6a]"
						: "capitalize")
				}
				onMouseEnter={handleOnMouseEnter}
				onMouseLeave={handleOnMouseLeave}
			>
				<Link href={props.path}>
					<a>
						<span
							className={
								"font-bold mr-1 transition-all duration-300 " +
								(isHover || router.pathname == props.path
									? "opacity-1"
									: "opacity-0")
							}
						>
							{"<"}
						</span>
						{props.label}
						<span
							className={
								"font-bold ml-1 transition-all duration-300 " +
								(isHover || router.pathname == props.path
									? "opacity-1"
									: "opacity-0")
							}
						>
							{"/>"}
						</span>
					</a>
				</Link>
			</div>
		</>
	);
}
