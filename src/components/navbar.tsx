import { Link } from "@tanstack/react-router";
import { siteConfig } from "@/constants/site";

export function Navbar() {
	return (
		<header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
			<div className="container flex h-14 max-w-screen-xl items-center mx-auto">
				<div className="flex flex-1 items-center justify-between">
					<Link to="/" className="flex items-center space-x-2">
						<span className="text-xl font-bold text-purple-600">
							{siteConfig.title}
						</span>
					</Link>

					<nav className="flex items-center space-x-6 text-sm font-medium">
						{siteConfig.nav.map((item) =>
							item.href.startsWith("http") ? (
								<a
									key={item.href}
									href={item.href}
									className="transition-colors hover:text-purple-600"
									target="_blank"
									rel="noreferrer"
								>
									{item.title}
								</a>
							) : (
								<Link
									key={item.href}
									to={item.href as "/demos"}
									className="transition-colors hover:text-purple-600"
								>
									{item.title}
								</Link>
							),
						)}
					</nav>
				</div>
			</div>
		</header>
	);
}
