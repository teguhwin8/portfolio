import MenuItem from "./menuItem";

export default function Menu() {
	return (
		<div className="flex">
			<MenuItem label="Home" path="/" />
			<MenuItem label="About" path="/about" />
			<MenuItem label="Works" path="/works" />
		</div>
	);
}
