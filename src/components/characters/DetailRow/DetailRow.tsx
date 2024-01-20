interface DetailProps {
  title: string;
  content: string;
}

export function DetailRow({ title, content }: DetailProps) {
  return (
    <div className="mt-2">
      {`${title}: `}
      <span className="font-bold">{content}</span>
    </div>
  );
}
