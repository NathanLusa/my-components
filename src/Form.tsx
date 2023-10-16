// import { useForm, SubmitHandler } from "react-hook-form";
import LoginForm from "./views/Login/view";

// type LoginFields = {
//   email: string;
//   password: string;
// };

export default function Form() {
  // const { register, handleSubmit } = useForm<LoginFields>();

  // const onSubmit: SubmitHandler<LoginFields> = data => console.log(data);

  return (
    <>
      <LoginForm />
      {/* <form className="flex flex-col gap-4" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-1">
          <label htmlFor="">Email</label>
          <input type="text" id="email" {...register("email")} />
        </div>

        <div className="flex flex-col gap-1">
          <label htmlFor="">Password</label>
          <input type="password" id="password" {...register("password")} />
        </div>

        <button className=" bg-red-300" type="submit">
          Enviar
        </button>
      </form> */}
    </>
  );
}
