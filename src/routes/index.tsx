import * as React from "react";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: HomeComponent,
});

function HomeComponent() {
	return (
		<div className="p-2">
			<h3>主页，一个基于 rspack + tanstack router 的 React 19 启动模板</h3>
		</div>
	);
}
