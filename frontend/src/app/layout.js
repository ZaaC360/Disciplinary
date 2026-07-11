import "./globals.css";
import { Poppins } from "next/font/google";
import Navbar from "@/components/Navbar";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

import { AuthProvider } from "./context/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={poppins.className}
    >
      <body className="min-h-full flex flex-col"><AuthProvider>
        <Navbar />
        {children}
      </AuthProvider></body>
    </html>
  );
}
