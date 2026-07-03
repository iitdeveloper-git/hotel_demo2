import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  tone?: "gold" | "light" | "dark";
  className?: string;
  type?: "button" | "submit";
};

export function LuxuryButton({ href, children, tone = "gold", className, type = "button" }: ButtonProps) {
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-bold transition duration-300 focus:outline-none focus:ring-2 focus:ring-gold focus:ring-offset-2",
    tone === "gold" && "bg-gold text-white shadow-glow hover:bg-green",
    tone === "light" && "border border-white/45 bg-white/12 text-white backdrop-blur hover:bg-white hover:text-green",
    tone === "dark" && "bg-green text-white hover:bg-brown",
    className
  );

  if (href) {
    return (
      <Link className={classes} href={href}>
        <span>{children}</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden />
      </Link>
    );
  }

  return (
    <button className={classes} type={type}>
      <span>{children}</span>
      <ArrowUpRight className="h-4 w-4" aria-hidden />
    </button>
  );
}
