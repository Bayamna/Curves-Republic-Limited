import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";

const WhatsAppBtn = ({message})=> {
    const phoneNumber = "233595010129";
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <>
    <a href={waLink} target="_blank" className="mb-4 bg-gradient-to-r from-brown  to-lightBrown text-white  py-2 px-4 lg:mb-0 font-medium
     w-full lg:w-[65%] rounded-sm">Send WhatsApp Message</a>
    </>
  )
} 

export default WhatsAppBtn;