import { useForm } from "react-hook-form";
import ErrorMassage from "../components/ErrorMassage";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({ mode: "onChange" });

  console.log(isValid);
  //체이닝?연산자
  const onSubmit = (data) => {
    //console.log(data);
    //=>유저가 인풋에 입력한 내용을 객체로 반환 받음
  };

  return (
    <div className="flex items-center justify-center h-screen bg-gray-300">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="max-w-[500px] w-full bg-white shadow p-12 rounded-xl flex flex-col"
      >
        <h1>LOGIN</h1>
        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
            minLength: {
              value: 8,
              message: "패스워드는 8자 이상 작성해주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
              message: "영문과 숫자를 포함해야 됩니다.",
            },
          })}
          className="w-full p-2 border rounded-md mt-2 border-slate-300"
          type="text"
          placeholder="아이디"
        />
        <ErrorMassage message={errors?.username?.message} />
        <input
          {...register("password", {
            required: "패스워드는 필수입니다",
          })}
          className="w-full p-2 rounded-md mt-2 border border-slate-300"
          type="password"
          placeholder="패스워드"
        />
        <ErrorMassage message={errors?.password?.message} />
        <button
          className={`w-full rounded-md p-2 font-bold mt-4 cursor-pointer
            ${isValid ? "bg-blue-500 hover:bg-blue-600" : "bg-blue-300"}`}
        >
          Login
        </button>
      </form>
    </div>
  );
  로그인 회원가입
  아이디 이메일 패스워드 이름
  두페이지 버튼으로 와따리가까리
  로그인밑에 계정이 없으신가요? 회원가입 이런식으로
}
