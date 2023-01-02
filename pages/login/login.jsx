import React from "react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../../schema/auth.schema";
import { userLogin } from "../../redux/slices/auth.slice";

const login = () => {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setValue,
  } = useForm({ mode: "onChange", resolver: yupResolver(loginSchema) });
  const loginSubmit = async (data) => {
    await dispatch(userLogin(data));
    console.log(formState.isValid, data);
  };
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-6 col-xs-12">
          <div className="login-content border p-4">
            <h4 className="">Hello! Sign into your account</h4>
            <form onSubmit={handleSubmit(loginSubmit)}>
              <div className="form-group">
                <label className="">Email Address/Username</label>
                <input type="email" name="email" {...register("email")} />
              </div>
                {errors.email && <p className="text-danger mt-1 text-start">{errors.email?.message}</p>}
              <div className="form-group mt-1">
                <label className="">Password</label>
                <input
                  type="password"
                  name="password"
                  {...register("password")}
                />
              </div>
              {errors.password && <p className="text-danger mt-1 text-start">{errors.password?.message}</p>}
              <div className="form-group form-checkbox text-center mb-1 mt-1">
                <input type="checkbox" className="" /> Remember Me |{" "}
                <a href="#" className="yellow">
                  Forgot password?
                </a>
              </div>
              <button
                type="submit"
                className="nir-btn mb-2"
                disabled={!formState.isValid}
              >
                LOGIN
              </button>
            </form>
            <div className="form-btn text-center link-tag">
              <Link href="/signup">
                Need an Account? Create your TravelHangout account
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default login;
