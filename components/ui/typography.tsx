import { cn } from "@/lib/utils";

function TypographyH2({ children, className }: VariantProps) {
  return (
    <h2
      className={cn(
        "scroll-m-20 pb-2 text-3xl font-semibold tracking-tight transition-colors",
        className
      )}
    >
      {children}
    </h2>
  );
}

function TypographyH3({ children, className }: VariantProps) {
  return (
    <h3
      className={cn(
        "scroll-m-20 text-2xl font-semibold tracking-tight",
        className
      )}
    >
      {children}
    </h3>
  );
}

function TypographyP({ children, className }: VariantProps) {
  return <p className={cn("leading-7 text-sm", className)}>{children}</p>;
}

function TypographyLarge({ children, className }: VariantProps) {
  return (
    <div className={cn("text-md font-semibold", className)}>{children}</div>
  );
}

type VariantProps = {
  children?: React.ReactNode;
  className?: string;
};

type VariantType = "h1" | "h2" | "h3" | "h4" | "p" | "large";

export default function Typography({
  variant,
  ...rest
}: {
  className?: string;
  variant: VariantType;
  children?: React.ReactNode;
}) {
  let Component: React.ReactNode;

  switch (variant) {
    case "h2":
      Component = TypographyH2(rest);
      break;
    case "h3":
      Component = TypographyH3(rest);
      break;

    case "p":
      Component = TypographyP(rest);
      break;
    case "large":
      Component = TypographyLarge(rest);
      break;
    default:
      break;
  }

  return Component;
}
