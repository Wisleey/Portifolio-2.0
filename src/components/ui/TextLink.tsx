import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type TextLinkProps = {
  href: string;
  children: ReactNode;
  external?: boolean;
  download?: string | boolean;
  className?: string;
};

export function TextLink({
  href,
  children,
  external,
  download,
  className,
}: TextLinkProps) {
  return (
    <a
      href={href}
      className={cn(
        "text-foreground underline decoration-border underline-offset-[0.28em] transition-colors duration-200 hover:text-accent hover:decoration-accent",
        className,
      )}
      {...(download ? { download } : {})}
      {...(external
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {children}
    </a>
  );
}
