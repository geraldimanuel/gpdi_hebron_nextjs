import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Work_Sans } from "@next/font/google";

const work = Work_Sans({
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800"],
});

export default function App({ Component, pageProps }: AppProps) {
	return (
		<main className={work.className}>
			<Component {...pageProps} />;
		</main>
	);
}
