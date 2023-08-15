import "./globals.css";
import { Inter } from "next/font/google";
import InjectTheme from "@/components/InjectTheme";
import ClientLayout from "@/components/ClientLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Will Cowne",
  description: "NextJS, TailwindCSS, and TypeScript powered portfolio",
  author: "Will Cowne",
};

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  const routeIds = [{ id: "about" }, { id: "projects" }, { id: "contact" }];

  return (
    <>
      <head>
        <InjectTheme />
      </head>
      <html lang="en">
        <body
          className={`
          ${inter.className} 
          relative min-h-screen py-20 p-10 flex flex-col gap-5 justify-center 
           `}
        >
          <ClientLayout ids={routeIds}>{children}</ClientLayout>
          {modal}
        </body>
      </html>
    </>
  );
}

// style={{
//   color: "rgb(var(--foreground-rgb))",
//   background:
//     "linear-gradient(to bottom, rgb(var(--background-start-rgb)), rgb(var(--background-end-rgb)))",
// }}

// text-foreground-light dark:text-foreground-dark
//            bg-gradient-to-b from-transparent from-background-start-light to-background-end-light dark:from-background-start-dark dark:to-background-end-dark
