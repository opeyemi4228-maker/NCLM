import { Montserrat } from "next/font/google";
import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { RegionalProvider } from "@/context/RegionalContext";
import { Toaster } from "react-hot-toast";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "New Creation Life Ministries",
  description: "Bringing Hope. Changing Lives. Revealing Jesus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 p-0">
      <body 
        className={`${montserrat.className} antialiased text-gray-700 m-0 p-0 overflow-x-hidden`} 
        suppressHydrationWarning={true}
      >
        <Toaster position="top-center" />
        <AppContextProvider>
          <RegionalProvider>
            {children}
          </RegionalProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}