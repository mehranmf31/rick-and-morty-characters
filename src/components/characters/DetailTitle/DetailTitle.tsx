export interface DetailTitleProps {
  content: string;
}

export function DetailTitle({ content }: DetailTitleProps) {
  return <h2 className="text-2xl font-bold mb-4">{content}</h2>;
}
