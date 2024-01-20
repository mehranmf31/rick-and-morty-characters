import { LoadingWrapper } from "@components/common";
import { useLocation } from "@lib/hooks";
import { DetailRow } from "@components/characters";
import { DetailTitle } from "../DetailTitle/DetailTitle";

export interface LocationDetailsProps {
  id: number;
  title: string;
}

export function LocationDetails({ id, title }: LocationDetailsProps) {
  const { data, isLoading } = useLocation(id);

  return (
    <>
      {isLoading && <LoadingWrapper />}
      {!!data && (
        <>
          <DetailTitle content={title} />
          <DetailRow title="Name" content={data.name} />
          <DetailRow title="Type" content={data.type} />
          <DetailRow title="Dimension" content={data.dimension} />
          <DetailRow
            title="Number of Residents"
            content={`${data.residents?.length}`}
          />
        </>
      )}
    </>
  );
}
