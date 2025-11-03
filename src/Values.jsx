import { LiaMedalSolid } from "react-icons/lia";
import { IoIosStarOutline } from "react-icons/io";
import { HiOutlineCheckBadge } from "react-icons/hi2";
import { LuUserCheck } from "react-icons/lu";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { PiPersonArmsSpreadLight } from "react-icons/pi";

const valuesData = [
    {
        id: 1,
        title: "Excellence",
        description: "We strive for excellence in every service we provide, ensuring that each client receives the highest standard of care and professionalism.",
        icon: <LiaMedalSolid/>
    },

    {
        id: 2,
        title: "Integrity",
        description: "We operate with transparency and honesty, building trust through ethical practices and consistent results.",
        icon: <IoIosStarOutline/>
    }, 

    {
        id: 3,
        title: "Innovation",
        description: "We embrace technology, research, and modern aesthetic science to offer cutting-edge treatments that are safe and effective.",
        icon: <LuUserCheck/>
    }, 

    {
        id: 4,
        title: "Client Satisfaction",
        description: "Our clients’ happiness and confidence are our top priorities. Every treatment plan is personalized to meet individual needs and deliver real results.",
        icon: <HiOutlineCheckBadge/>
    },

    {
        id: 5,
        title: "Safety & Professionalism",
        description: "We uphold the strictest safety protocols and maintain a clean, professional, and comfortable environment for all our clients.",
        icon: <AiOutlineSafetyCertificate/>
    }, 

    {
        id: 6,
        title: "Empowerment",
        description: "We are passionate about helping people rediscover their confidence, feel comfortable in their own skin, and live healthier lives.",
        icon: <PiPersonArmsSpreadLight/>
    },

]

export default valuesData;