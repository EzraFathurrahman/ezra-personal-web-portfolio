import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const GolangIcon = ({ className, alt = 'Golang' }: Props) => (
  <Image
    src="/icons/go.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);