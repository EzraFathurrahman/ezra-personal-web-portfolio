import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const SlackIcon = ({ className, alt = 'slack' }: Props) => (
  <Image
    src="/icons/slack.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);