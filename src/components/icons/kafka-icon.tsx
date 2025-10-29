import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const KafkaIcon = ({ className, alt = 'Kafka' }: Props) => (
  <Image
    src="/icons/kafka.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);
