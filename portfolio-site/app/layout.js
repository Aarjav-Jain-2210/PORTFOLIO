import "./globals.css";

export const metadata = {
  title: "Aarjav Jain — Full-Stack Developer | AI & Blockchain",
  description:
    "Portfolio of Aarjav Jain — B.Tech CSE student, Full-Stack Developer, AI Enthusiast, and Blockchain Developer. Building impactful digital products with modern web technologies.",
  keywords:
    "Aarjav Jain, Full Stack Developer, React, Node.js, AI, Blockchain, Portfolio, MERN Stack, Web Developer",
  authors: [{ name: "Aarjav Jain" }],
  openGraph: {
    title: "Aarjav Jain — Full-Stack Developer",
    description:
      "Building innovative solutions with cutting-edge technology. Specializing in Web Development, AI, and Blockchain.",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="ambient-blobs" />
        {children}
      </body>
    </html>
  );
}
