import { Button } from "@/components/ui/button";
import { siteConfig } from "@/constants/site";
import { useToast } from "@/hooks/use-toast";
import { ExternalLink } from "lucide-react";

export const Footer = () => {
	const { toast } = useToast();

	const handleCopy = async () => {
		try {
			await navigator.clipboard.writeText(siteConfig.contact);
			toast({
				description: "复制微信号成功！",
			});
		} catch (err) {
			toast({
				variant: "destructive",
				description: "复制失败，请重试",
			});
		}
	};

	return (
		<footer className="fixed bottom-0 left-0 right-0 border-t bg-background max-w-7xl mx-auto">
			<div className="container flex items-center justify-between py-4">
				<div>
					<Button variant="link" asChild>
						<a
							href={siteConfig.github}
							target="_blank"
							rel="noopener noreferrer"
						>
							GitHub
							<ExternalLink />
						</a>
					</Button>
				</div>
				<div className="flex items-center gap-4">
					<Button variant="link" asChild>
						<a
							href={siteConfig.beian.link}
							target="_blank"
							rel="noopener noreferrer"
						>
							{siteConfig.beian.text}
						</a>
					</Button>
					<Button variant="link" onClick={handleCopy}>
						联系我
					</Button>
				</div>
			</div>
		</footer>
	);
};
