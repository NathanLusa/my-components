import { ComponentProps, ReactNode } from "react";
import { tv, VariantProps } from "tailwind-variants";

import * as TabsComp from "@radix-ui/react-tabs";

const tabsVariant = tv({
  slots: {
    root: "flex flex-col w-[300px] shadow-[0_2px_10px] shadow-blackA4",
    trigger:
      "bg-white px-5 h-[45px] flex-1 flex items-center justify-center text-[15px] leading-none text-mauve11 select-none first:rounded-tl-md last:rounded-tr-md hover:text-violet11 data-[state=active]:text-violet11 data-[state=active]:shadow-[0_1px_0_0] data-[state=active]:shadow-current data-[state=active]:focus:relative data-[state=active]:focus:shadow-[0_0_0_2px] data-[state=active]:focus:shadow-black outline-none cursor-default",
  },

  variants: {
    tabs_size: {
      default: {
        root: "",
        trigger: "",
      },
      sm: {
        root: "",
        trigger: "",
      },
      xs: {
        root: "",
        trigger: "",
      },
    },
  },

  defaultVariants: {
    tabs_size: "default",
  },
});

export type TabsProps = ComponentProps<"div"> &
  TabsComp.TabsProps &
  VariantProps<typeof tabsVariant> & {
    // id: string;
    // label: string;
    defaultTab: string;
    tabs: {
      label: string;
      value: string;
      page: ReactNode;
    }[];
  };

export default function Tabs({ defaultTab, tabs, tabs_size, className }: TabsProps) {
  const { root, trigger } = tabsVariant({ tabs_size });
  return (
    <TabsComp.Root className={root({ className })} defaultValue={defaultTab}>
      <TabsComp.List className="shrink-0 flex border-b border-mauve6" aria-label="Manage your account">
        {tabs.map((tab, index) => (
          <TabsComp.Trigger key={index} className={trigger()} value={tab.value}>
            {tab.label}
          </TabsComp.Trigger>
        ))}
      </TabsComp.List>
      {tabs.map((tab, index) => (
        <TabsComp.Content key={index} className="grow p-5 bg-white rounded-b-md outline-none focus:shadow-[0_0_0_2px] focus:shadow-black" value={tab.value}>
          {tab.page}
        </TabsComp.Content>
      ))}
    </TabsComp.Root>
  );
}
