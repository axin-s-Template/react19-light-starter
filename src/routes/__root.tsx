import * as React from "react";
import { Link, Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";
import { Layout } from "@/components/layout";
import { Toaster } from "@/components/ui/toaster";

export const Route = createRootRoute({
	component: RootComponent,
});

function RootComponent() {
	return (
		<>
			<Layout>
				<Outlet />
			</Layout>
			<TanStackRouterDevtools
				toggleButtonProps={{
					className: "TanStackRouterDevtools",
				}}
				position="bottom-right"
			/>
			<Toaster />
		</>
	);
}
