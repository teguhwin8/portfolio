import Phone from "./phone";
import Logo from "./logo";
import Menu from "./menu";

export default function Navbar() {
	return (
		<>
			<div className="flex items-center justify-between px-5 py-3">
				<Logo />
				<Menu />
				<Phone />
			</div>
		</>
	);
}
