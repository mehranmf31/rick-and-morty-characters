import { PageWrapper } from "@components/common";
import { Link } from "react-router-dom";
import { MAIN_PAGE } from "routes/app";

export function ErrorPage() {
  return (
    <PageWrapper>
      <div className="text-8xl">404 Error!</div>
      <div className="text-5xl mt-16">This page doesn't exist.</div>
      <div className="text-4xl mt-10 text-blue-600">
        <Link to={MAIN_PAGE}>Home Page</Link>
      </div>
    </PageWrapper>
  );
}
