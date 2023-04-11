import { AiFillHome, AiOutlineSearch, AiOutlineHeart } from "react-icons/ai";
import { BsCameraReels } from "react-icons/bs";
import { FiEdit3, FiUsers } from "react-icons/fi";
import { RxHamburgerMenu } from "react-icons/rx";
import { BiUserCircle } from "react-icons/bi";
import { Layout } from "../services/path";



export const SidebarList = [
    {
        id: 1,
        caption: "Главная",
        icon: AiFillHome,
        route: Layout.home
    },
    {
        id: 22,
        caption: "Пользователи",
        icon: FiUsers,
        route: Layout.users
    },
    {
        id: 2,
        caption: "Поисковый запрос",
        icon: AiOutlineSearch
    },
    {
        id: 3,
        caption: "Reels",
        icon: BsCameraReels
    },
    {
        id: 4,
        caption: "Уведломления",
        icon: AiOutlineHeart
    },
    {
        id: 5,
        caption: "Создать",
        icon: FiEdit3
    },
    {
        id: 6,
        caption: "Профиль",
        icon: BiUserCircle,
        route: Layout.profile
    },
    {
        id: 7,
        caption: "Ещё",
        icon: RxHamburgerMenu
    },
];


