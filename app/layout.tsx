export const metadata = {
  title: "🦆 DUCK Frame",
  description: "Claim, upgrade, refer friends, and climb the leaderboard!"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body style={{ margin: 0, fontFamily: 'sans-serif' }}>
        {children}
      </body>
    </html>
  );
}
