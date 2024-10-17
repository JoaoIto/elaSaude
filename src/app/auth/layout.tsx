export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-lightGray w-screen h-screen flex items-center justify-center"
      >
        {children}
      </body>
    </html>
  );
}
