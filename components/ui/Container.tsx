import * as React from "react";
import { cn } from "@/lib/utils";

type ContainerProps = React.HTMLAttributes<HTMLDivElement> & {
  as?: "div" | "section" | "header" | "footer";
};

export function Container({ as: Comp = "div", className, children, ...props }: ContainerProps) {
  return (
    <Comp className={cn("mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10", className)} {...props}>
      {children}
    </Comp>
  );
}
