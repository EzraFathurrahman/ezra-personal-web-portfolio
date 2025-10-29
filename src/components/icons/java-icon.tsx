import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const JavaIcon = ({ className, alt = 'java spring-boot' }: Props) => (
  <Image
    src="/icons/spring-boot.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);