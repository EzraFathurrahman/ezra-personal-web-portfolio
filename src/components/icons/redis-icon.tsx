import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const RedisIcon = ({ className, alt = 'redis' }: Props) => (
  <Image
    src="/icons/redis.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);