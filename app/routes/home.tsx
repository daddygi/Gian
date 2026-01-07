import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Gian" },
    { name: "description", content: "Gian's Website" },
  ];
}

export default function Home() {
  return (
    <div>
      <p>Hello World</p>
    </div>
  );
}
