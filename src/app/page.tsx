import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Projects } from "./components/Projects";
import { Footer } from "./components/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <main className="bg-white text-gray-900 dark:bg-gray-900 dark:text-white min-h-screen flex flex-col">
        <Projects />
      </main>
      <Footer />
    </div>
  );
}
