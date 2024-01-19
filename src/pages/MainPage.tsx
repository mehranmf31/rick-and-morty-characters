import { CharacterCard } from "@components/characters";
import { Button, CardSkeleton, PageWrapper } from "@components/common";
import { useCharacters } from "@lib/hooks";

export function MainPage() {
  const { fetchNextPage, hasNextPage, isFetchingNextPage, data, isLoading } =
    useCharacters();

  console.log(data, isLoading);

  return (
    <PageWrapper>
      <h1 className="font-bold text-5xl">Rick And Morty Characters App</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 my-16">
        {isLoading
          ? Array.from(Array(8).keys()).map((i) => <CardSkeleton key={i} />)
          : data &&
            data.pages.map((page) =>
              page.list.map((item) => (
                <CharacterCard
                  key={item.id}
                  id={item.id}
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  location={item.location.name}
                  episodesCount={item.episode.length}
                />
              )),
            )}
      </div>
      <div className="flex justify-center mb-16">
        <Button
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
          disabled={!hasNextPage}
        >
          Load More
        </Button>
      </div>
    </PageWrapper>
  );
}
