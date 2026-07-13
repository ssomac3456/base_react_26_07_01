import { useState } from "react";
import { useForm } from "react-hook-form";
import ErrorMassage from "../components/ErrorMassage";

export default function Login() {
  // true면 로그인 화면, false면 회원가입 화면
  const [isLogin, setIsLogin] = useState(true);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: "onChange",

    // 회원가입 화면에서 로그인 화면으로 바꿀 때
    // 사라진 name, email 입력창을 폼에서도 제거
    shouldUnregister: true,
  });

  const onSubmit = (data) => {
    if (isLogin) {
      console.log("로그인");
      console.log(data);
    } else {
      console.log("회원가입");
      console.log(data);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-300 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex w-full max-w-md flex-col gap-3 rounded-xl bg-white p-10 shadow"
      >
        <h1 className="text-center text-3xl font-bold">
          {isLogin ? "LOGIN" : "SIGN UP"}
        </h1>

        {/* 아이디 */}
        <input
          {...register("username", {
            required: "아이디는 필수입니다.",
            minLength: {
              value: 8,
              message: "아이디는 8자 이상 작성해주세요.",
            },
            pattern: {
              value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,20}$/,
              message: "영문과 숫자를 포함해야 됩니다.",
            },
          })}
          className="w-full rounded-md border border-slate-300 p-2"
          type="text"
          placeholder="아이디"
        />
        <ErrorMassage message={errors?.username?.message} />

        {/* 회원가입 화면일 때만 이름 출력 */}
        {!isLogin && (
          <>
            <input
              {...register("name", {
                required: "이름은 필수입니다.",
              })}
              className="w-full rounded-md border border-slate-300 p-2"
              type="text"
              placeholder="이름"
            />
            <ErrorMassage message={errors?.name?.message} />
          </>
        )}

        {/* 회원가입 화면일 때만 이메일 출력 */}
        {!isLogin && (
          <>
            <input
              {...register("email", {
                required: "이메일은 필수입니다.",
              })}
              className="w-full rounded-md border border-slate-300 p-2"
              type="email"
              placeholder="이메일"
            />
            <ErrorMassage message={errors?.email?.message} />
          </>
        )}

        {/* 비밀번호 */}
        <input
          {...register("password", {
            required: "비밀번호는 필수입니다.",
          })}
          className="w-full rounded-md border border-slate-300 p-2"
          type="password"
          placeholder="비밀번호"
        />
        <ErrorMassage message={errors?.password?.message} />

        {/* 로그인 또는 회원가입 제출 버튼 */}
        <button
          disabled={!isValid}
          className={`rounded-md p-2 font-bold text-white ${
            isValid
              ? "cursor-pointer bg-blue-500 hover:bg-blue-600"
              : "cursor-not-allowed bg-blue-300"
          }`}
        >
          {isLogin ? "LOGIN" : "SIGN UP"}
        </button>

        {/* 로그인과 회원가입 화면 전환 */}
        <p className="mt-2 text-center text-sm">
          {isLogin ? "계정이 없으신가요?" : "이미 계정이 있으신가요?"}

          <button
            type="button"
            onClick={() => setIsLogin((prev) => !prev)}
            className="ml-2 cursor-pointer font-bold text-blue-500"
          >
            {isLogin ? "회원가입" : "로그인"}
          </button>
        </p>
      </form>
    </div>
  );
}