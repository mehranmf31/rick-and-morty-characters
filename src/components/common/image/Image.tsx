export interface ImageProps
  extends Omit<React.ComponentProps<"img">, "crossOrigin"> {
  loading?: "eager" | "lazy";
}

export function Image({
  src,
  alt = "",
  className,
  loading,
  ...rest
}: ImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading={loading}
      {...rest}
    />
  );
}
