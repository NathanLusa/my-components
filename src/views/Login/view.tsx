import { useForm } from "react-hook-form";
import Edit from "../../components/Edit";
import Checkbox from "../../components/Checkbox";

import { useModelHook, LoginFields } from "./model";
import { Fragment } from "react";

export default function LoginForm() {
  const { onSubmit, onError, fields } = useModelHook();
  const { register, handleSubmit } = useForm<LoginFields>();

  return (
    <>
      {/* <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, onError)}> */}
      {/* <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register("email")} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div> */}

      {/* </form> */}

      <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit, onError)}>
        {fields.map((field, index) => {
          const { ref, ...props } = register(field.name);
          //   console.log(field);
          return (
            <Fragment key={index}>
              {field.type && field.type == "Edit" && <Edit id={field.name} label={field.caption} innerRef={ref} {...props} />}
              {field.type && field.type == "Password" && <Edit id={field.name} label={field.caption} innerRef={ref} type="password" {...props} />}
              {field.type && field.type == "Checkbox" && <Checkbox id={field.name} label={field.caption} innerRef={ref} {...props} />}
              {field.type && field.type == "Checkbox2" && <input type="checkbox" id={field.name} ref={ref} {...props} />}

              {!field.type && (
                <div className="flex flex-col gap-1">
                  <label htmlFor="">{field.caption}</label>
                  <input type="text" id={field.name} ref={ref} {...props} />
                </div>
              )}
            </Fragment>
          );
        })}

        <button className=" bg-red-300" type="submit">
          Enviar
        </button>
      </form>
    </>
  );
}
