import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

import * as Label from "@radix-ui/react-label";

const edit = tv({
  slots: {
    base: "flex flex-wrap items-center text-white border",
    input:
      "bg-blackA5 shadow-blackA9 inline-flex appearance-none items-center justify-center rounded-[4px] px-[10px] leading-none text-white shadow-[0_0_0_1px] outline-none focus:shadow-[0_0_0_2px_black] selection:color-white selection:bg-blackA9",
  },
  variants: {
    edit_size: {
      default: {
        base: "xh-10 px-4 gap-4",
        input: "h-9 w-52",
      },
      sm: {
        base: "xh-8 px-3 text-sm gap-3",
        input: "h-8 w-52",
      },
      xs: {
        base: "xh-6 px-2 text-xs gap-2",
        input: "h-7 w-52",
      },
    },
  },
  defaultVariants: {
    edit_size: "default",
  },
});

export type EditProps = ComponentProps<"input"> &
  VariantProps<typeof edit> & {
    id: string;
    label: string;
    innerRef?: any;
  };

export default function Edit({ edit_size, id, label, className, innerRef, ...props }: EditProps) {
  const { base, input } = edit({ edit_size, className });

  return (
    <div className={base()}>
      <Label.Root className="font-medium leading-[35px]" htmlFor={id}>
        {label}
      </Label.Root>
      <input className={input()} id={id} ref={innerRef} {...props} />
    </div>
  );
}
