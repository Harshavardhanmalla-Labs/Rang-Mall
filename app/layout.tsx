import "./globals.css";
import Header from "@/components/Header";
import AppLauncher from "@/components/AppLauncher";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-[#0B0F17] text-[#E6EAF0] antialiased">
        <Header />
        <AppLauncher />
        <div className="max-w-7xl mx-auto px-12">{children}</div>
      </body>
    </html>
  );
}
