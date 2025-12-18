import { Metadata } from "next";
import { MainLayOut } from "../layout/main-layout";

export const metadata: Metadata = {
  title: {
    default: "Soris | Full-Stack Web Developer",
    template: "%s | Soris",
  },
  description:
    "Soris is a full-stack web developer specializing in modern web applications using React, Next.js, and scalable backend technologies. View projects, skills, and experience.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <MainLayOut>{children}</MainLayOut>
      </body>
    </html>
  );
}
