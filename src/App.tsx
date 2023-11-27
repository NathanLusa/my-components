import { BeakerIcon } from "@heroicons/react/24/solid";
import * as Switch from "@radix-ui/react-switch";

import Edit from "./components/Edit";
import Button from "./components/Button";
import Checkbox from "./components/Checkbox_";
import Select from "./components/Select";
import Tabs from "./components/Tabs";

import Form from "./Form";

export default function App() {
  const options = [
    { label: "Option 1", value: "option1" },
    { label: "Option 2", value: "option2" },
    { label: "Option 3", value: "option3" },
    // Add more options as needed
  ];

  const tabs = [
    {
      label: "Account",
      value: "pageAccount",
      page: (
        <>
          <p className="mb-5 text-mauve11 text-[15px] leading-normal">Make changes to your account here. Click save when you're done.</p>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="name">
              Name
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="name"
              defaultValue="Pedro Duarte"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="username">
              Username
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="username"
              defaultValue="@peduarte"
            />
          </fieldset>
          <div className="flex justify-end mt-5">
            <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
              Save changes
            </button>
          </div>
        </>
      ),
    },
    {
      label: "Test",
      value: "pageTest",
      page: (
        <>
          <p className="mb-5 text-mauve11 text-[15px] leading-normal">Change your password here. After saving, you'll be logged out.</p>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="currentPassword">
              Current password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="currentPassword"
              type="password"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="newPassword">
              New password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="newPassword"
              type="password"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="confirmPassword"
              type="password"
            />
          </fieldset>
          <div className="flex justify-end mt-5">
            <button className="inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default">
              Change password
            </button>
          </div>
        </>
      ),
    },
    {
      label: "Password",
      value: "pagePass",
      page: (
        <>
          <p className="mb-5 text-mauve11 text-[15px] leading-normal">Change your password here. After saving, you'll be logged out.</p>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="currentPassword">
              Current password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="currentPassword"
              type="password"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="newPassword">
              New password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="newPassword"
              type="password"
            />
          </fieldset>
          <fieldset className="mb-[15px] w-full flex flex-col justify-start">
            <label className="text-[13px] leading-none mb-2.5 text-violet12 block" htmlFor="confirmPassword">
              Confirm password
            </label>
            <input
              className="grow shrink-0 rounded px-2.5 text-[15px] leading-none text-violet11 shadow-[0_0_0_1px] shadow-violet7 h-[35px] focus:shadow-[0_0_0_2px] focus:shadow-violet8 outline-none"
              id="confirmPassword"
              type="password"
            />
          </fieldset>
          <div className="flex justify-end mt-5">
            <button className="shadow-[0_2px_0_0] shadow-violet11 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 outline-none cursor-default">
              {/* <button className="shadow-md shadow-cyan-400 inline-flex items-center justify-center rounded px-[15px] text-[15px] leading-none font-medium h-[35px] bg-green4 text-green11 hover:bg-green5 focus:shadow-[0_0_0_2px] focus:shadow-green7 outline-none cursor-default"> */}
              Change password
            </button>
          </div>
        </>
      ),
    },
  ];

  return (
    <>
      <div className="flex flex-col gap-5 w-screen h-screen items-center justify-center bg-purple-400">
        <Form />
        {/* LABEL */}
        {/* <Edit id="firstName" label="First name" type="text" onChange={e => console.log(e.target.value)} />
        <Edit id="firstName" label="First name" type="text" edit_size="sm" onChange={e => console.log(e.target.value)} />
        <Edit id="firstName" label="First name" type="text" edit_size="xs" onChange={e => console.log(e.target.value)} /> */}

        {/* BUTTON */}
        {/* <Button className="text-red-500 font-bold">
          <BeakerIcon className="h-6 w-6 text-red-500" />
        </Button>
        <Button className="bg-red-300">Click-me</Button>
        <Button size="sm">Click-me</Button>
        <Button size="xs">Click-me</Button> */}

        {/* CHECKBOX (SWITCH) */}
        {/* <div className="flex">
          <div className="flex items-center">
            <label className="text-white text-[15px] leading-none pr-[15px]" htmlFor="airplane-mode">
              Airplane mode
            </label>
            <Switch.Root
              className="w-[42px] h-[25px] bg-blackA9 rounded-full relative shadow-[0_2px_10px] shadow-blackA7 focus:shadow-[0_0_0_2px] focus:shadow-black data-[state=checked]:bg-black outline-none cursor-default"
              id="airplane-mode"
              // style={{ "-webkit-tap-highlight-color": "rgba(0, 0, 0, 0)" }}
            >
              <Switch.Thumb className="block w-[21px] h-[21px] bg-white rounded-full shadow-[0_2px_2px] shadow-blackA7 transition-transform duration-100 translate-x-0.5 will-change-transform data-[state=checked]:translate-x-[19px]" />
            </Switch.Root>
          </div>
        </div>
        <Checkbox id="airplane-mode-md" label="Airplane mode" onCheckedChange={() => console.log("check")} />
        <Checkbox id="airplane-mode-sm" label="Airplane mode" checkbox_size="sm" onCheckedChange={() => console.log("check")} />
        <Checkbox id="airplane-mode-xs" label="Airplane mode" checkbox_size="xs" onCheckedChange={() => console.log("check")} /> */}

        {/* SELECT */}
        {/* <Select id="select-1" placeholder="Selecione..." options={options} />
        <Select id="select-1" placeholder="Selecione..." options={options} checkbox_size="sm" />
        <Select id="select-1" placeholder="Selecione..." options={options} checkbox_size="xs" /> */}

        {/* TABS */}
        {/* <Tabs defaultTab="pageAccount" tabs={tabs} className="" /> */}
      </div>
    </>
  );
}
