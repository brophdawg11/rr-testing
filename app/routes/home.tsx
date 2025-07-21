import { Link } from "react-router";
import type { Route } from "./+types/home";

export function loader({}: Route.LoaderArgs) {
  return { name: "React Router" };
}

export default function Home({ loaderData }: Route.ComponentProps) {
  return (
    <>
      <nav>
        <Link to="/login">Go to /login</Link>
      </nav>
      <h1>Hello {loaderData.name}</h1>
    </>
  );
}
