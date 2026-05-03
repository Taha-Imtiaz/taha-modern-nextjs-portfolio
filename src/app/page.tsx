import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Leadership from "@/components/Leadership";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <div className="relative z-20 bg-gradient-to-b from-gray-950 via-gray-950 to-black">
        <Navigation />
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Leadership />
        <Testimonials />
        <Contact />

        {/* Footer */}
        <footer className="bg-black relative overflow-hidden py-12">
          {/* Animated background circles for footer */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-10 w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-10 right-20 w-32 h-32 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
          </div>

          <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
            <div className="space-y-4">
              <p className="text-lg text-transparent bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text font-semibold">
                Let's Build the Future Together
              </p>
              <p className="text-gray-400">
                © 2026 Taha Imtiaz. All rights reserved.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Built with Next.js 16, TypeScript, Framer Motion, and Tailwind CSS
              </p>
              <div className="flex justify-center gap-6 mt-6 text-gray-400">
                <a href="https://github.com/Taha-Imtiaz" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">GitHub</a>
                <a href="https://linkedin.com/in/taha-imtiaz" target="_blank" rel="noopener noreferrer" className="hover:text-cyan-400 transition-colors">LinkedIn</a>
                <a href="mailto:taha.imtiaz@paysyslabs.com" className="hover:text-cyan-400 transition-colors">Email</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
