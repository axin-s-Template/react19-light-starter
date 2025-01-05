import { Footer } from "./footer";
import { Navbar } from "./navbar";

export function Layout({ children }: { children: React.ReactNode }) {
	return (
		<div className="relative flex min-h-screen flex-col">
			<Navbar />
			<main className="container max-w-7xl mx-auto py-4 px-4 min-h-[calc(100vh-8rem)]">
				{children}
			</main>
			<Footer />
		</div>
	);
}
