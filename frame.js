export default async function handler(req, res) {
  const { searchParams } = new URL(req.url, `http://${req.headers.host}`);
  const code = searchParams.get("code") || "none";

  const image_url = "https://duck-app.vercel.app/duck.png";

  res.status(200).json({
    image: image_url,
    buttons: [
      { label: "🦆 Claim DUCK", action: "post", target: "/api/claim?code=" + code },
      { label: "📊 Leaderboard", action: "link", target: "/leaderboard" },
    ],
    post_url: "https://duck-app.vercel.app/api/frame?code=" + code,
  });
}
