import "../styles/globals.css";
import Header from "@/components/Header";
import AppLauncher from "@/components/AppLauncher";

export const metadata = {
  title: "Rang & Mall",
  description: "Global Venture Studio & Product Holding Company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <AppLauncher />
        {children}
      </body>
    </html>
  );
}
