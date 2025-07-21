import type { Metadata } from "next";
import Header from "./components/Header";
import { Fira_Code } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider/ReduxProvider";

const firaCode = Fira_Code({
  subsets: ["latin"],
  weight: ["400", "700"], // или другие, например: ["300", "400", "500", "600", "700"]
  variable: "--font-fira-code", // можно использовать с Tailwind
});

export const metadata: Metadata = {
  title: "Not To Do",
  description: "Every great habit starts with dropping a bad one. Log your NotToDos and stay intentional.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${firaCode.variable} antialiased h-full`}
      >
        <Header />
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
