
export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white text-blue-900 font-sans">
      <header className="bg-blue-600 text-white py-6 shadow-md">
        <div className="container mx-auto px-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold">ContentZen</h1>
          <button className="bg-white text-blue-600 px-4 py-2 rounded-lg font-medium hover:bg-blue-100 transition">
            Join Now
          </button>
        </div>
      </header>

      <section className="py-20 px-4 text-center bg-blue-50">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl font-bold mb-4">AI-Powered Topic Ideas for YouTubers</h2>
          <p className="text-lg text-blue-800 mb-6">
            Struggling with content ideas? ContentZen uses AI to generate trending and personalized topic suggestions just for you.
          </p>
          <button className="bg-blue-600 text-white px-6 py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition">
            Join Now
          </button>
        </div>
      </section>

      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-8">
          <div className="bg-blue-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">AI Topic Generation</h3>
            <p>Get video topic suggestions tailored to your niche and style using advanced AI models.</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">Trending Ideas</h3>
            <p>Stay ahead with ideas based on current trends and audience interests.</p>
          </div>

          <div className="bg-blue-100 p-6 rounded-2xl shadow-sm">
            <h3 className="text-xl font-bold mb-2">Time Saver</h3>
            <p>Save hours of brainstorming and focus on creating great content faster.</p>
          </div>
        </div>
      </section>

      <footer className="py-6 bg-blue-600 text-white text-center">
        <p>&copy; 2025 ContentZen. All rights reserved.</p>
      </footer>
    </div>
  );
}
