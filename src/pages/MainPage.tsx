import { CharacterCard } from "@components/characters";
import { Button, CardSkeleton, Error, PageWrapper } from "@components/common";
import { GENERAL_ERROR } from "@lib/constants/errors";
import { useCharacters } from "@lib/hooks";

export function MainPage() {
  const {
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    data,
    isLoading,
    isError,
    error,
  } = useCharacters();

  if ((!data && !isLoading) || (isError && error))
    return (
      <Error message={error?.message || GENERAL_ERROR} className="mt-12" />
    );

  return (
    <PageWrapper>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16">
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
