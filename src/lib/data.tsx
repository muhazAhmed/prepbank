import { MdInfoOutline, MdOutlinePhone, MdAlternateEmail } from "react-icons/md";
import { MenuItem, MoreMenuOption } from "./prop";
import { LuLayoutDashboard } from "react-icons/lu";
import { TfiMore } from "react-icons/tfi";
import { GoGear } from "react-icons/go";
import { FaClockRotateLeft } from "react-icons/fa6";
import { GrLocation } from "react-icons/gr";
import { TbWorldWww } from "react-icons/tb";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { PiUsersBold } from "react-icons/pi";

export const navMenuItem: MenuItem[] = [
    { id: 0, label: "Home", icon: "fa-solid fa-house", url: "/" },
    { id: 1, label: "About", icon: "fa-solid fa-info-circle", url: "/about" },
    { id: 2, label: "Contact", icon: "fa-solid fa-phone", url: "/contact" },
    { id: 3, label: "Settings", icon: "fa-solid fa-gear", url: "/settings" },
];

export const sidebarData: MenuItem[] = [
    { id: 0, label: "Dashboard", icon: <LuLayoutDashboard />, url: "/dashboard" },
    { id: 1, label: "My Activity", icon: <FaClockRotateLeft />, url: "/activity" },
    { id: 2, label: "something else", icon: <LuLayoutDashboard />, url: "/dashboard" },
    { id: 3, label: "another thing", icon: <LuLayoutDashboard />, url: "/dashboard" },
    { id: 4, label: "yet another thing", icon: <LuLayoutDashboard />, url: "/dashboard" },
    { id: 5, label: "last thing", icon: <LuLayoutDashboard />, url: "/dashboard" },
]

type BottomMenuOption = MenuItem | MoreMenuOption;
export const bottomMenuOptions: BottomMenuOption[] = [
    { id: 0, url: "/dashboard", icon: <LuLayoutDashboard className="text-xl" />, label: "Dashboard", type: "main" },
    { id: 1, url: "/about", icon: <MdInfoOutline className="text-xl" />, label: "About", type: "main" },
    { id: 2, url: "/contact", icon: <MdOutlinePhone className="text-xl" />, label: "Contact", type: "main" },
    { id: 3, url: "/settings", icon: <GoGear className="text-xl" />, label: "Settings", type: "main", authRequired: true },
    { id: 4, url: "", icon: <TfiMore className="text-2xl" />, label: "More", type: "toggle" },
    {
        id: 5,
        type: "more",
        options: [
            { id: 6, url: "/option1", icon: <LuLayoutDashboard className="text-xl" />, label: "Option 1" },
            { id: 7, url: "/option2", icon: <LuLayoutDashboard className="text-xl" />, label: "Option 2" },
            { id: 8, url: "/option3", icon: <LuLayoutDashboard className="text-xl" />, label: "Option 3" },
            { id: 9, url: "/option4", icon: <LuLayoutDashboard className="text-xl" />, label: "Option 4" },
            { id: 10, url: "/option5", icon: <LuLayoutDashboard className="text-xl" />, label: "Option 5" }
        ]
    }
];

export const profileBasicInfoItems = (item: any) => [
    { id: 0, label: item?.location || "Mangalore, India", icon: <GrLocation className="text-gray-400 text-lg" />, isLink: false },
    { id: 1, label: item?.followers || "-", icon: <PiUsersBold className="text-gray-400 text-lg" />, isLink: false },
    { id: 2, label: item?.email || "-", icon: <MdAlternateEmail className="text-gray-400 text-lg" />, isLink: true },
    { id: 3, label: item?.website || "https://muhaz-ahmed.netlify.app/", icon: <TbWorldWww className="text-gray-400 text-lg" />, isLink: true },
    { id: 4, label: item?.github || "-", icon: <FaGithub className="text-gray-400 text-lg" />, isLink: true },
    { id: 5, label: item?.linkedin || "-", icon: <FaLinkedin className="text-gray-400 text-lg" />, isLink: true }
]