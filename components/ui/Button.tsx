import * as React from "react";
import Link from "next/link";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-[15px] font-semibold tracking-tight transition-all duration-200 ease-out focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "bg-fme-magenta text-white shadow-[0_1px_2px_rgba(173,58,135,0.25)] hover:bg-[#96326f] active:scale-[0.98]",
        outline:
          "border border-fme-line text-fme-ink hover:border-fme-blue hover:text-fme-blue active:scale-[0.98]",
        white:
          "bg-white text-fme-purple shadow-[0_1px_2px_rgba(0,0,0,0.06)] hover:bg-fme-offwhite active:scale-[0.98]",
        text: "px-0 py-0 rounded-none text-fme-ink hover:text-fme-magenta underline-offset-4 hover:underline",
      },
      size: {
        default: "",
        sm: "px-5 py-2.5 text-sm",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  },
);

type BaseProps = VariantProps<typeof buttonVariants> & {
  className?: string;
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  React.ButtonHTMLAttributes<HTMLButtonElement> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps & {
  href: string;
  external?: boolean;
  onClick?: () => void;
};

export type ButtonProps = ButtonAsButton | ButtonAsLink;

export function Button({ className, variant, size, children, ...props }: ButtonProps) {
  const classes = cn(buttonVariants({ variant, size }), className);

  if ("href" in props && props.href) {
    const { href, external, onClick } = props;
    const isAnchor = href.startsWith("#");

    if (external && !isAnchor) {
      return (
        <a href={href} className={classes} target="_blank" rel="noopener noreferrer" onClick={onClick}>
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
      </Link>
    );
  }

  const buttonProps = props as React.ButtonHTMLAttributes<HTMLButtonElement>;

  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}
