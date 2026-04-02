    
import { createBrowserRouter } from "react-router";
import HomePage from "../pages/HomePage";
import Chats from "../pages/Chats/Chats";
import ChatId from "../pages/Chats/ChatId";
import UserId from "../pages/User/UserId";
import register from "../pages/Register/register";
import Login from "../pages/Register/login";
import Profile from "../pages/Profile/Profile";
import MainLayout from "../layouts/Mainlayot";
import AuthLayout from "../layouts/AuthLayot";
import ChatsLayout from "../layouts/ChatsLayout";




const router = createBrowserRouter ([
    { path: "/",Component: MainLayout,
        children: [
            {path:"", Component: HomePage},
            {path:"/user/:userId", Component: UserId},
            {path:"profile", Component: Profile},

        ]
    },
    { path: "/auth", Component: AuthLayout, 
        children: [
            {path: "login", Component: Login},
            {path: "register", Component: register}

        ]
    },
    {path:"/chats", Component: ChatsLayout,
        children: [
            {path:"", Component: Chats},
            {path:":chatsId", Component: ChatId}
        ]
    }

    
]);

export default router;