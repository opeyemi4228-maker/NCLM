import "./globals.css";
import { AppContextProvider } from "@/context/AppContext";
import { RegionalProvider } from "@/context/RegionalContext";
import ToasterWrapper from "@/components/ToasterWrapper";

export const metadata = {
  title: "New Creation Life Ministries",
  description: "Bringing Hope. Changing Lives. Revealing Jesus.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="m-0 p-0">
      <body 
        className="antialiased text-gray-700 m-0 p-0 overflow-x-hidden" 
        suppressHydrationWarning={true}
      >
        <ToasterWrapper />
        <AppContextProvider>
          <RegionalProvider>
            {children}
          </RegionalProvider>
        </AppContextProvider>
      </body>
    </html>
  );
}