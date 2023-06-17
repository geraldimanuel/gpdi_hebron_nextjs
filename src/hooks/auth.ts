// import { useRouter } from "next/router"
// import { useState, useEffect } from "react"
// import useSWR from "swr"
// import axios from "../lib/Axios"

// export const useAuth = ({middleware} = {}) => {

//     const router = useRouter();

//     // Loading
//     const [isLoading, setIsLoading] = useState(true);

//     // User
//     const{data: user, error, mutate} = useSWR("/api/v1/user",
//         () => axios
//             .get("/api/v1/user")
//             .then((res) => res.data.user)
//             .catch((err) => {
//                 if(err.response.status != 409){
//                     throw err;
//                 }
//             }),
//     );

//     // CSRF
//     const csrf = () => axios.get("/sanctum/csrf-cookie");

//     // Login
//     type LoginProps = {
//     email: string;
//     password: string;
//     remember?: boolean;
//     }

//     const login = async ({setErrors}: {setErrors: (errors: string[]) => void}, props: LoginProps) => {
//         setErrors([]);

//         await csrf();

//         axios
//             .post("/login", props)
//             .then(async () =>  await mutate() && router.push("/"))
//             .catch((err) => {
//                 if(err.response.status != 422){
//                    throw err;
//                 }

//                 const errors = Object.values(err.response.data.errors).flat().map((error: unknown) => String(error));
//                 setErrors(errors);
//             });
//     };

//     // Logout
//     const logout =async () => {
//         await axios.post("/logout");

//         await mutate(null);

//         router.push("/login");
//     }

//     useEffect(()=> {
//         if(user || error){
//             setIsLoading(false);
//         }

//         if(middleware == "guest" && user) router.push("/");
//         if(middleware == "auth" && error) router.push("/login");
//     })

//     return {
//         user,
//         csrf,
//         isLoading,
//         login,
//         logout,
//     }
// }