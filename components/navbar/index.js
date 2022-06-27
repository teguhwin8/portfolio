import Phone from "./phone";
import Logo from "./logo";
import Menu from "./menu";

export default function Navbar() {
	return (
		<>
			<div className="flex items-center justify-between px-5 py-3 fixed top-0 left-0 w-full bg-[#f8f7f1]">
				<Logo />
				<Menu />
				<Phone />
			</div>
		</>
	);
}
