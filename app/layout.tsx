import TopNavbar from "@/components/topNavBar";
import "./globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <TopNavbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
