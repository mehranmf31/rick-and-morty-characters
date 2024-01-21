import { Error, LoadingWrapper } from "@components/common";
import { useLocation } from "@lib/hooks";
import { DetailRow, DetailTitle } from "@components/characters";
import { GENERAL_ERROR } from "@lib/constants/errors";

export interface LocationDetailsProps {
  id: number;
  title: string;
}

export function LocationDetails({ id, title }: LocationDetailsProps) {
  const { data, isLoading, error, isError } = useLocation(id);

  if (isLoading) return <LoadingWrapper />;

  if (!data || (isError && error))
    return (
      <Error message={error?.message || GENERAL_ERROR} className="mt-12" />
    );

  return (
    <>
      {isLoading && <LoadingWrapper />}
      <DetailTitle content={title} />
      <DetailRow title="Name" content={data.name} />
      <DetailRow title="Type" content={data.type} />
      <DetailRow title="Dimension" content={data.dimension} />
      <DetailRow
        title="Number of Residents"
        content={`${data.residents?.length}`}
      />
    </>
  );
}
