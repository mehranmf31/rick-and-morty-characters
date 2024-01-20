import { useParams } from "react-router-dom";

import { useCharacter } from "@lib/hooks";
import { host } from "@lib/utils/config";
import { EPISODES, LOCATION } from "@lib/constants/apiRoutes";
import { LoadingWrapper, PageWrapper } from "@components/common";
import {
  CharacterDetails,
  EpisodesDetails,
  LocationDetails,
} from "@components/characters";

export const CharacterPage = (): JSX.Element => {
  const { id } = useParams();
  const { data, isLoading, isError, error } = useCharacter(Number(id) || 0);

  if (!data || (isError && error))
    return <div>{error?.message || "Unexpected Error!"}</div>;

  return (
    <>
      {isLoading ? (
        <LoadingWrapper />
      ) : (
        <PageWrapper>
          <div className="grid gap-6 mx-auto mb-16">
            <CharacterDetails {...data} />

            {!!data.origin.url && (
              <div className="bg-white rounded-xl p-9">
                <LocationDetails
                  id={Number(data.origin.url.replace(host + LOCATION(""), ""))}
                  title="Origin Details"
                />
              </div>
            )}

            {!!data.location.url && (
              <div className="bg-white rounded-xl p-9">
                <LocationDetails
                  id={Number(
                    data.location.url.replace(host + LOCATION(""), ""),
                  )}
                  title="Location Details"
                />
              </div>
            )}

            {!!data.episode?.length && (
              <div className="bg-white rounded-xl p-9">
                <EpisodesDetails
                  list={data.episode
                    .map((item) => item.replace(host + EPISODES(""), ""))
                    .join(",")}
                />
              </div>
            )}
          </div>
        </PageWrapper>
      )}
    </>
  );
};
