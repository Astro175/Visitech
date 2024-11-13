import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <title>Visitech | Change Your Story</title>
        <meta
          name="description"
          content="Master tech skills and transform your career with Visitech's cutting-edge courses."
        />
        <meta property="og:title" content="Visitech" />
        <meta
          property="og:description"
          content="Master tech skills and transform your career with Visitech's cutting-edge courses."
        />
        <meta property="og:type" content="website" />
      </head>
      <body>{children}</body>
    </html>
  );
}
