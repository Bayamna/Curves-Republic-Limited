import { TbBrandWhatsappFilled } from "react-icons/tb";
import { FiArrowUpRight } from "react-icons/fi";

const WhatsAppBtn = ({message})=> {
    const phoneNumber = "233595010129";
    const encodedMessage = encodeURIComponent(message);
    const waLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="mb-4 bg-gradient-to-r from-brown  to-lightBrown text-white px-2 py-2 lg:mb-0 rounded-lg font-medium flex justify-center
    items-center gap-2 w-full lg:w-[80%] border-2 border-gold">

        <TbBrandWhatsappFilled className="text-2xl"/>
        <a href={waLink} target="_blank">Send WhatsApp Message</a>
        <FiArrowUpRight className="text-2xl animate-bounce text-gold font-bold"/>
        
    </div>
  )
}

export default WhatsAppBtn;