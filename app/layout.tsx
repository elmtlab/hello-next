import '@/app/ui/global.css';


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <body className={`${single_day.className} antialiased`}>{children}</body> */}
      <body>{children}</body>
    </html>
  );
}
