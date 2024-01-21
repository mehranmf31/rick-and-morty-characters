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
            className="w-72 xl:w-96 aspect-[3/1] object-contain"
          />
        </Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
}
