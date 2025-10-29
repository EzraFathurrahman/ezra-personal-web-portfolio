import Image from 'next/image';

type Props = {
  className?: string;
  alt?: string;
};

export const VscodeIcon = ({ className, alt = 'vs code' }: Props) => (
  <Image
    src="/icons/vscode.svg"  // Path to your uploaded image
    alt={alt}
    width={40}
    height={40}
    className={className}
  />
);