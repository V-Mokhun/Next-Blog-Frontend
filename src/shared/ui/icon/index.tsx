import clsx from "clsx";

interface IconProps {
  name: string;
  className?: string;
}

export const Icon = ({ name, className }: IconProps) => {
  const classes = clsx(className, "w-6 h-6 text-inherit");

  return (
    <svg className={classes} viewBox="0 0 24 24">
      <use href={`/sprites/icons.svg#${name}`}></use>
    </svg>
  );
};
