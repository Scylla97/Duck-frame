export const metadata = {
  title: 'DUCK Frame',
  description: 'Upgrade bebekmu di Farcaster!',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ fontFamily: 'sans-serif', margin: 0 }}>
        {children}
      </body>
    </html>
  );
}
