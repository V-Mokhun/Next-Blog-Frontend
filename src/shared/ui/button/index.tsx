import clsx from "clsx";
import Link, { LinkProps } from "next/link";
import React from "react";
import styles from "./button.module.css";

interface Props {
  className?: string;
  children?: React.ReactNode;
  color?: "primary" | "secondary";
  variant?: "solid" | "outline" | "transparent";
  size?: "small" | "normal";
  weight?: "normal" | "medium" | "bold";
  smallOnMobile?: boolean;
}

type ButtonAsButton = Props &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof Props> & {
    as?: "button";
  };

type ButtonAsLink = Props &
  Omit<LinkProps, keyof Props> & {
    as: "link";
  };

type ButtonAsExternal = Props &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof Props> & {
    as: "externalLink";
  };

type ButtonProps = ButtonAsButton | ButtonAsExternal | ButtonAsLink;

export const Button = ({
  className,
  children,
  color = "primary",
  variant = "solid",
  weight = "normal",
  smallOnMobile = false,
  size = "normal",
  as,
  ...props
}: ButtonProps) => {
  const classes = clsx(className, {
    [styles.button]: true,
    "font-normal": weight === "normal",
    "font-medium": weight === "medium",
    "font-bold": weight === "bold",
    "px-4 py-2 text-sm": size === "normal",
    "px-2 py-1 text-xs": size === "small",
    "px-2 py-1 text-xs sm:px-4 sm:py-2 sm:text-sm": smallOnMobile,
    [styles.variantSolidPrimary]: color === "primary" && variant === "solid",
    [styles.variantSolidSecondary]:
      color === "secondary" && variant === "solid",
    [styles.variantOutlinePrimary]:
      color === "primary" && variant === "outline",
    [styles.variantOutlineSecondary]:
      color === "secondary" && variant === "outline",
    [styles.variantTransparentPrimary]:
      color === "primary" && variant === "transparent",
    [styles.variantTransparentSecondary]:
      color === "secondary" && variant === "transparent",
  });

  if (as === "link") {
    return (
      <Link {...(props as LinkProps)}>
        <a className={classes}>{children}</a>
      </Link>
    );
  }

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
    <button
      className={classes}
      type="button"
      {...(props as React.ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
    </button>
  );
};
