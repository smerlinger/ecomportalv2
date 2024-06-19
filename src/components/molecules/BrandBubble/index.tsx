import Image, { StaticImageData } from 'next/image';

export interface BrandBubbleProps {
  image: StaticImageData;
  style: string;
}

export const BrandBubble = ({
  index,
  image,
  style,
}: { index: number } & BrandBubbleProps) => {
  return (
    <Image
      key={`brand-bubble-${index}`}
      src={image}
      className={style}
      alt={`EP logo - ${style}`}
    />
  );
};
