import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const GitIcon = ({ className, alt = 'Git' }: Props) => (
  <Image
    src="/icons/git.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);