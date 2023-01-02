import { api } from "../utils/axios";
const userLogin = async (payload) => {
  console.log(payload);
   try {
    const data = await api.post(
      `api/v1/user/login`,
      payload
    );
    console.log(data);
    return data;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const AuthService = {
//   userSignup,
  userLogin,
};
export default AuthService;