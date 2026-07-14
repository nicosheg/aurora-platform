import type { Metadata } from "next";
import "./globals.css";
import { MusicProvider } from "@/contexts/MusicContext";

export const metadata: Metadata = {
  title: "A Special Birthday",
  description: "Today was designed entirely for you.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen">
        <MusicProvider>{children}</MusicProvider>
      </body>
    </html>
  );
}
