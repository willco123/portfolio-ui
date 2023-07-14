import "./globals.css";
import { Inter } from "next/font/google";
import LightBulb from "../components/LightBulb";
import Menu from "@/components/Menu";
import { getRouteIds } from "@/lib/get-routes";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Will Cowne",
  description: "NextJS, TailwindCSS, and TypeScript powered portfolio",
  author: "Will Cowne",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ids = getRouteIds();
  return (
    <html className="dark" lang="en">
      <body className={inter.className}>
        <main className="flex min-h-screen flex-col gap-2 p-24 justify-center ">
          <LightBulb />
          <Menu ids={ids}>{children}</Menu>
        </main>
      </body>
    </html>
  );
}
