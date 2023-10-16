import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

const button = tv({
  base: "flex items-center justify-center rounded bg-zinc-50 text-sm font-medium hover:bg-zinc-200",
  variants: {
    size: {
      default: "h-10 px-4",
      sm: "h-8 px-3",
      xs: "h-6 px-2 text-xs",
    },
  },

  defaultVariants: {
    size: "default",
  },
});

export type ButtonProps = ComponentProps<"button"> & VariantProps<typeof button>;

export default function Button({ size, className, ...props }: ButtonProps) {
  return <button {...props} className={button({ size, className })} />;
}
