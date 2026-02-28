
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Chats from "../pages/Chats/Chats";
import ChatId from "../pages/Chats/ChatId";
import User from "../pages/User/User";
import UserId from "../pages/User/UserId";
import register from "../pages/Register/register";
import Login from "../pages/Register/login";
import Profile from "../pages/Profile/Profile";




const router = createBrowserRouter ([
    {
        path: "/",
        Component: HomePage,
        children: [
            {
                path: "Chats",
                Component: Chats,
                children: [
                    {
                        path: ":ChatId",
                        Component: ChatId
                    }
                ]
            },
            {
                path: "User",
                Component: User,
                children: [
                    {
                        path: "UserId",
                        Component: UserId
                    }
                ]
            },
            {
                path: "Register",
                Component: register,
                children: [
                    {
                        path: "Login",
                        Component: Login
                    }
                ]
            },
            {
                path: "Profile",
                Component: Profile
            }
        ]
    },

   
]);

export default router;