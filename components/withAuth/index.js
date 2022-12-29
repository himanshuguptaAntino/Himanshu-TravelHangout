// // import Login from "../../pages/signin";
// import Router,{useRouter} from "next/router";
// function withAuth(Component){
//     const router=useRouter();
//   const Auth = (props) => {
//     // const router=useRouter()
//     //login datat added to props via redux store
//     const isLoggedIn = false;
//     if (!isLoggedIn) {
//         router.replace("/login");
//     }
//     return <Component {...props} />;
//   };
//   if (Component.getInitialProps) {
//     Auth.getInitialProps = Component.getInitialProps;
//   }
//   return Auth;
// };
// export default withAuth;
import Router from "next/router";
const login = "/login"; // Define your login route address.
/**
 * Check user authentication and authorization
 * It depends on you and your auth service provider.
 * @returns {{auth: null}}
 */
const checkUserAuthentication = () => {
  return { auth: false }; // change null to { auth: true } for test it.
};
export default (WithAuth) => {
  const hocComponent = ({ ...props }) => <WithAuth {...props} />;
  hocComponent.getInitialProps = async (context) => {
    const userAuth = await checkUserAuthentication();
    // Are you an authorized user or not?
    if (!userAuth?.auth) {
      // Handle server-side and client-side rendering.
      if (context.res) {
        context.res?.writeHead(302, {
          Location: login,
        });
        context.res?.end();
      } else {
        Router.replace(login);
      }
    } else if (WithAuth.getInitialProps) {
      const wrappedProps = await WithAuth.getInitialProps({
        ...context,
        auth: userAuth,
      });
      return { ...wrappedProps, userAuth };
    }
    return { userAuth };
  };
  return hocComponent;
};