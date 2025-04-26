import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "Franchise Management Dashboard",   
  description: "Manage your leads, finances, and progress efficiently.", // Write a good description
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
