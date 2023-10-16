import { SubmitHandler, SubmitErrorHandler } from "react-hook-form";

export type LoginFields = {
  email: string;
  senha: string;
};

type UseModelHookTypeGeneric<T extends Record<string, any>> = {
  onSubmit: SubmitHandler<T>;
  onError: SubmitErrorHandler<T>;
};

type FieldForm = {
  name: any;
  caption: string;
  type?: "Edit" | "Select" | "Checkbox" | "Password" | "Checkbox2";
};

type UseModelHookType = UseModelHookTypeGeneric<LoginFields> & {
  fields: FieldForm[];
};

const useModelHook1 = (): UseModelHookType => {
  const onSubmit: SubmitHandler<LoginFields> = data => {
    console.log("SUBMIT", data);
  };

  const onError: SubmitErrorHandler<LoginFields> = (errors: Object) => {
    console.log("ERROR", errors);
  };

  return {
    onSubmit,
    onError,

    fields: [
      {
        name: "email",
        caption: "Email",
        type: "Edit",
      },
      {
        name: "senha",
        caption: "Password",
        type: "Password",
      },
      {
        name: "reminder",
        caption: "Lembrar senha",
        type: "Checkbox",
      },
      //   {
      //     name: "reminder2",
      //     caption: "Lembrar senha",
      //     type: "Checkbox2",
      //   },
    ],
  };
};

export function useModelHook(): UseModelHookType {
  const teste = useModelHook1();
  return { ...teste };
}
