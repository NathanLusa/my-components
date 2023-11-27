import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

import * as SelectComp from "@radix-ui/react-select";

const select = tv({
  slots: {
    trigger:
      "inline-flex items-center justify-center rounded leading-none gap-1 bg-white text-violet11 shadow-[0_2px_10px] shadow-black/10 hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-black data-[placeholder]:text-violet9 outline-none",
    item: "leading-none text-violet11 flex items-center relative select-none data-[disabled]:text-mauve8 data-[disabled]:pointer-events-none data-[highlighted]:outline-none data-[highlighted]:bg-violet9 data-[highlighted]:text-violet1",
  },

  variants: {
    checkbox_size: {
      default: {
        trigger: "px-4 text-sm h-9",
        item: "text-sm rounded-[3px] h-8 pr-8 pl-6",
      },
      sm: {
        trigger: "px-3 text-sm h-8",
        item: "text-sm rounded-[3px] h-7 pr-7 pl-5 ",
      },
      xs: {
        trigger: "px-2 text-xs h-7",
        item: "text-xs rounded-[3px] h-6 pr-6 pl-4 ",
      },
    },
  },

  defaultVariants: {
    checkbox_size: "default",
  },
});

export type SelectProps = ComponentProps<"select"> &
  SelectComp.SelectProps &
  VariantProps<typeof select> & {
    id: string;
    options: {
      label: string;
      value: string;
    }[];
  };

export default function Select({ id, options, checkbox_size, className, ...props }: SelectProps) {
  const { trigger, item } = select({ checkbox_size, className });

  return (
    <div id={id}>
      <SelectComp.Root>
        <SelectComp.Trigger className={trigger()}>
          <SelectComp.Value placeholder={props.placeholder} />
          <SelectComp.Icon />
        </SelectComp.Trigger>

        <SelectComp.Portal>
          <SelectComp.Content className="overflow-hidden bg-white rounded-md shadow-[0px_10px_38px_-10px_rgba(22,_23,_24,_0.35),0px_10px_20px_-15px_rgba(22,_23,_24,_0.2)]">
            <SelectComp.Viewport className="p-1">
              {options.map((option, index) => (
                <SelectComp.Item key={index} className={item()} value={option.value}>
                  <SelectComp.ItemText>{option.label}</SelectComp.ItemText>
                  <SelectComp.ItemIndicator className="absolute left-0 w-6 inline-flex items-center justify-center" />
                </SelectComp.Item>
              ))}
            </SelectComp.Viewport>
          </SelectComp.Content>
        </SelectComp.Portal>
      </SelectComp.Root>
    </div>
  );
}
