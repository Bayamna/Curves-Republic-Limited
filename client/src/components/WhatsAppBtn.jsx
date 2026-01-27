
const WhatsAppBtn = ({message, id})=> {
    const phoneNumber = "233203438658";
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