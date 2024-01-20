import { EPISODES } from "@lib/constants/apiRoutes";
import { episodeList } from "@lib/mocks/episode";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import MockAdapter from "axios-mock-adapter";
import { beforeEach, describe, expect, test } from "vitest";
import { render, screen } from "@testing-library/react";
import { api } from "@lib/utils/api";
import { EpisodesDetails } from ".";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: false,
    },
  },
});

const mock = new MockAdapter(api);
const firstEpisode = episodeList[0];
const multipleEpisodes = [{ ...episodeList[0] }, { ...episodeList[1] }];

mock
  .onGet(EPISODES("1"))
  .replyOnce(200, firstEpisode)
  .onGet(EPISODES("1"))
  .replyOnce(200, firstEpisode)
  .onGet(EPISODES("1,2"))
  .replyOnce(200, multipleEpisodes);

const EpisodesDetailWrapper = ({ list }: { list: string }) => (
  <QueryClientProvider client={queryClient}>
    <EpisodesDetails list={list} />
  </QueryClientProvider>
);

beforeEach(() => {
  queryClient.clear();
});

describe("Success Cases", function () {
  test("Loading Case", () => {
    render(<EpisodesDetailWrapper list="1" />);
    const loadingElements = screen.getByTitle("loading");
    expect(loadingElements).toBeInTheDocument();
  });

  test("render single episode", async () => {
    render(<EpisodesDetailWrapper list="1" />);
    const titleElement = await screen.findByText("Episodes (1)");
    const episodesElement = await screen.findByText(firstEpisode.name);

    expect(titleElement).toBeInTheDocument();
    expect(episodesElement).toBeInTheDocument();
  });

  test("render multiple episode", async () => {
    render(<EpisodesDetailWrapper list="1,2" />);
    const titleElement = await screen.findByText("Episodes (2)");
    const episodesElement = await screen.findByText(multipleEpisodes[1].name);

    expect(titleElement).toBeInTheDocument();
    expect(episodesElement).toBeInTheDocument();
  });
});
