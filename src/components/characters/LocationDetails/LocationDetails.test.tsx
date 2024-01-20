import { LOCATION } from "@lib/constants/apiRoutes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { api } from "@lib/utils/api";
import { LocationDetails } from ".";
import { locations } from "@lib/mocks/location";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mock = new MockAdapter(api);
const firstLocation = locations[0];

mock
  .onGet(LOCATION(1))
  .replyOnce(200, firstLocation)
  .onGet(LOCATION(1))
  .replyOnce(200, firstLocation);

const LocationDetailsWrapper = ({
  id,
  title,
}: {
  id: number;
  title: string;
}) => (
  <QueryClientProvider client={queryClient}>
    <LocationDetails id={id} title={title} />
  </QueryClientProvider>
);

beforeEach(() => {
  queryClient.clear();
});

describe("Location Details", function () {
  test("render loading", () => {
    render(<LocationDetailsWrapper id={1} title="test" />);
    const loadingElements = screen.getByTitle("loading");
    expect(loadingElements).toBeInTheDocument();
  });

  test("render location", async () => {
    render(<LocationDetailsWrapper id={1} title="test" />);
    const headingElement = await screen.findByText("test");
    const locationNameElement = await screen.findByText(firstLocation.name);

    expect(headingElement).toBeInTheDocument();
    expect(locationNameElement).toBeInTheDocument();
  });
});
