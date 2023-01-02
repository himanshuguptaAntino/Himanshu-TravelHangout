import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { registerSchema } from "../../schema/auth.schema";
const signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    formState,
    setValue,
  } = useForm({ mode: "onChange", resolver: yupResolver(registerSchema) });
  const loginSubmit = async (data) => {
    console.log(formState.isValid, data);
  };
  return (
    <div className="container mt-4">
      <div className="row d-flex justify-content-center">
        <div className="col-lg-6 col-md-12 col-xs-12">
          <div className="login-content border p-4">
            <h4 className="">Create a TravelHangout Account</h4>
            <form  onSubmit={handleSubmit(loginSubmit)}>
              <div className="form-group">
                <label className="">Firstname</label>
                <input type="text" name="firstName" {...register("firstName")}  />
              </div>
              <div className="form-group">
                <label className="">Lastname</label>
                <input type="text" name="lastName" {...register("lastName")} />
              </div>
              <div className="form-group">
                <label className="">Email</label>
                <input type="email" name="email" {...register("email")} />
              </div>
              <div className="form-group">
                <label className="">Password</label>
                <input type="password" name="password" {...register("password")}  />
              </div>
              <div className="form-group">
                <label className="">Phone</label>
                <input type="password" />
              </div>
              <div className="form-group">
                <label className="">Confirm Password</label>
                <input type="password" />
              </div>
              <button
                type="submit"
                className="nir-btn mb-2"
                disabled={!formState.isValid}
              >
                LOGIN
              </button>
            </form>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default signup;
/* .form-group {
  width: 100%;
  display: inline-block;
} */
