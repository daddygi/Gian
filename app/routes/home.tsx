import type { Route } from "./+types/home";
import Nav from "../components/Nav";
import Hero from "../components/Hero";
import About from "../components/About";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gian" },
    { name: "description", content: "Gian's Website" },
  ];
}

export default function Home() {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
    </div>
  );
}
