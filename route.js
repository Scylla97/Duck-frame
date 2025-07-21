export const metadata = {
  title: "🦆 DUCK Mining",
  description: "Claim your DUCKs and climb the leaderboard!",
};

export default function Page() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <img src="/duck.png" alt="Duck" className="w-32 h-32" />
      <h1 className="text-2xl font-bold mt-4">🦆 Claim your DUCK!</h1>
    </div>
  );
}
