export default function Hero() {
  return (
    <div className="hero min-h-screen bg-hero">
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Welcome to PlayerApp</h1>
          <p className="mb-5">
            Discover your favorite football players, track their stats, and stay
            connected with their journey on and off the pitch. Explore the world
            of football like never before.
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
}
