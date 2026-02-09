import "@/app/global.css";
import Navbar from "@/components/layout/Navbar";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Dashboard",
    default: "Acme Dashboard",
  },

  description:
    "The official Next.js Course Dashboard (review), built with App Router.",
  metadataBase: new URL("http://localhost:3000/"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={` antialiased overflow-hidden `}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
