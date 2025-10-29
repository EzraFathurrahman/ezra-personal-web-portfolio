import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const DockerIcon = ({ className, alt = 'docker' }: Props) => (
  <Image
    src="/icons/docker.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);