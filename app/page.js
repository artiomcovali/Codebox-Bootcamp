// app/page.js
export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-black text-white p-6">
      <h1 className="text-5xl font-extrabold mb-6 transition duration-500 hover:scale-110 hover:text-purple-400 hover:drop-shadow-[0_0_25px_rgba(168,85,247,0.8)] cursor-pointer">
        🚀 Welcome to My Page
      </h1>

      <p className="mb-8 text-lg text-gray-300 text-center">
        Click this button to connect with me on LinkedIn!
      </p>

      <a
        href="https://www.linkedin.com/in/artiomcovali"
        target="_blank"
        rel="noreferrer"
        className="px-8 py-4 rounded-lg font-semibold bg-purple-400 text-black shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_40px_#a855f7] transition duration-300 cursor-pointer"
      >
        Hire Me!
      </a>

      <section className="mt-12 text-center">
        <h2 className="text-2xl font-bold mb-2">About Me</h2>
        <p className="text-gray-400">Hi, I’m Artiom! Fun fact: I have a cat named Loki</p>
      </section>

      <div className="mt-8">
        <img
          src="/bigleagues.jpg"
          alt="Big Leagues"
          className="w-100 h-auto rounded-xl border-4 border-purple-400 shadow-[0_0_20px_#a855f7] hover:shadow-[0_0_40px_#a855f7] transition duration-300"
        />
      </div>
    </main>
  );
}
