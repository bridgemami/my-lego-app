import { Ubuntu } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import Footer from "./components/footer";


const ubuntu = Ubuntu({ subsets: ["latin"],
                        weight: ["300", "400", "500", "700"],
                        style:["italic", "normal"],
                        display: 'swap',
 });

export const metadata = {
  title: "My Lego App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={ubuntu.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
