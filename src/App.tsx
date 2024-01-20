import { Link, Outlet } from "react-router-dom";
import { MAIN_PAGE } from "routes/app";

export function App() {
  return (
    <>
      <nav className="w-full flex justify-center pt-12">
        <Link to={MAIN_PAGE}>
          <img
            src="/logo480.png"
            alt="Rick and Morty logo"
            className="xl:w-72"
          />
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
