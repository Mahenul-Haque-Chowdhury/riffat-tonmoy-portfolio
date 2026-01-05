"use client";

import { type AnchorHTMLAttributes, type MouseEvent, type ReactNode } from "react";

type SmoothScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string;
  children: ReactNode;
};

export default function SmoothScrollLink({
  href,
  children,
  className,
  ...props
}: SmoothScrollLinkProps) {
  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (!href.startsWith("#")) return;
    const targetId = href.slice(1);
    const target = document.getElementById(targetId);
    if (target) {
      event.preventDefault();
      target.scrollIntoView({ behavior: "smooth" });
      window.history.replaceState(null, "", href);
    }
  };

  return (
    <a
      {...props}
      href={href}
      className={className}
      onClick={handleClick}
    >
      {children}
    </a>
  );
}
