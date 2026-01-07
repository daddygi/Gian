import type { Route } from "./+types/home";
import Nav from "../components/Nav";

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
    </div>
  );
}
