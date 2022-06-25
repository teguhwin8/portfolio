import Head from "next/head";
import Footer from "./footer";
import Navbar from "./navbar";

export default function Layout({ children }) {
	return (
		<>
			<Head>
				<title>Teguh Widodo Portfolio</title>
			</Head>
			<div className="xl:container mx-auto">
				<Navbar />
				<main>{children}</main>
				<Footer />
			</div>
		</>
	);
}
