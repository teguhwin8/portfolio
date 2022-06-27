import MenuItem from "./menuItem";

export default function Menu() {
	return (
		<div className="hidden md:flex">
			<MenuItem label="Home" path="/" />
			<MenuItem label="About" path="/about" />
			<MenuItem label="Works" path="/works" />
		</div>
	);
}
