import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

import * as Switch from "@radix-ui/react-switch";

const checkbox2 = tv({
  slots: {
    base: "flex items-center pr-2",
    checkbox_label: "text-white leading-none pr-4",
    button_background:
      "bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default",
    button: "block bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform",
  },

  variants: {
    checkbox_size: {
      default: {
        base: "",
        checkbox_label: "",
        button_background: "w-10 h-6",
        button: "w-5 h-5 data-[state=checked]:translate-x-[18px]",
      },
      sm: {
        base: "text-sm",
        checkbox_label: "pr-3",
        button_background: "w-8 h-5",
        button: "w-4 h-4 data-[state=checked]:translate-x-[14px]",
      },
      xs: {
        base: "text-xs",
        checkbox_label: "pr-2",
        button_background: "w-6 h-4",
        button: "w-3 h-3 data-[state=checked]:translate-x-[10px]",
      },
    },
  },

  defaultVariants: {
    checkbox_size: "default",
  },
});

export type CheckboxProps = ComponentProps<"input"> &
  Switch.SwitchProps &
  VariantProps<typeof checkbox2> & {
    id: string;
    label: string;
    innerRef?: any;
  };

export default function Checkbox({ checkbox_size, id, label, innerRef, className, onCheckedChange }: CheckboxProps) {
  const { base, checkbox_label, button_background, button } = checkbox2({ checkbox_size, className });

  return (
    <div className={base()}>
      <label className={checkbox_label()} htmlFor={id}>
        {label}
      </label>
      <Switch.Root className={button_background()} id={id} ref={innerRef} onCheckedChange={onCheckedChange}>
        <Switch.Thumb className={button()} />
      </Switch.Root>
    </div>
  );
}
