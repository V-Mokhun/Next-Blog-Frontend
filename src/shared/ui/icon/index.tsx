import clsx from "clsx";
import Image from "next/image";

interface IconProps {
  name: string;
  className?: string;
  loader?: false;
}

interface IconPropsLoader {
  name?: string;
  className?: string;
  loader: true;
}

export const Icon = ({
  name,
  className,
  loader,
}: IconProps | IconPropsLoader) => {
  const classes = clsx(className, "w-6 h-6 text-inherit");

  return loader ? (
    <div className={classes}>
      <Image src="/images/loader.png" alt="loading..." width={24} height={24} />
    </div>
  ) : (
    <svg className={classes} viewBox="0 0 24 24">
      <use href={`/sprites/icons.svg#${name}`}></use>
    </svg>
  );
};
