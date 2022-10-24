import clsx from "clsx";
import NextLink, { LinkProps as NextLinkProps } from "next/link";

interface Props {
  className?: string;
  children?: React.ReactNode;
}

type LinkAsLink = Props &
  Omit<NextLinkProps, keyof Props> & {
    as?: "link";
  };

type LinkAsExternal = Props &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Props> & {
    as?: "externalLink";
  };

type LinkProps = LinkAsExternal | LinkAsLink;

export const Link = ({
  as = "link",
  children,
  className,
  ...props
}: LinkProps) => {
  const classes = clsx(className, "hover:underline inline-block");

  if (as === "externalLink") {
    return (
      <a
        className={classes}
        target="_blank"
        rel="noopener noreferrer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {children}
      </a>
    );
  }

  return (
    <NextLink {...(props as NextLinkProps)}>
      <a className={classes}>{children}</a>
    </NextLink>
  );
};
