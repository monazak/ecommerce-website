import { footerData } from '../components/data/footer.json';
import FooterColumn from './FooterColumn';

function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 md:px-[4%] lg:px-[7%]">
      <div className="flex gap-10 flex-wrap justify-center">
        {footerData.map((col, idx) => (
          <FooterColumn key={idx} title={col.title} logo={col.content.logo} stretch={idx === footerData.length - 1}>
            
            {/* Subscribe Column */}
            {col.type === "subscribe" && (
              <div> 
                <p className="text-sm mb-4">{col.content.text}</p>
                <div className="relative">
                  <input
                    type="email"
                    placeholder={col.content.placeholder}
                    className="w-full border rounded-full px-4 py-2 pr-12 text-black focus:outline-none"
                  />
                  <i className="fas fa-paper-plane absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-600 cursor-pointer"></i>
                </div>
              </div>
            )}

            {/* Text Column */}
            {col.type === "text" &&
              col.content.map((line, i) => (
                <p key={i} className="text-sm mb-1">
                  {line}
                </p>
              ))}

            {/* Links Column */}
            {col.type === "links" &&
              col.content.map((link, i) => (
                <a key={i} href="#" className="text-sm mb-1 hover:underline">
                  {link}
                </a>
              ))}

            {/* App Column */}
            {col.type === "app" && (
<>
    <p className="text-sm text-gray-500 mb-4">{col.content.promoText}</p>

    {/* Flexible QR + Stores */}

{/* App Column */}

{col.type === "app" && (
  < >
    <p className="text-sm text-gray-500 mb-4">{col.content.promoText}</p>

    {/* Flexible QR + Stores */}
    <div className="flex  flex-wrap gap-4 mb-4">
      {/* QR Code */}
<div className="flex-shrink-0 w-24 sm:w-28 md:w-32 lg:w-36 h-auto">
        <img
          src={col.content.qrSrc}
          alt="QR Code"
          className="w-full h-full object-cover rounded bg-white"
        />
      </div>

      {/* Stores */}
      <div className=" flex-1  min-w-[120px] flex flex-col gap-2">
        {col.content.stores.map((store, i) => (
          <div key={i} className="flex items-center flex-1 gap-2 p-2 border rounded">
            <i className={`${store.icon} text-2xl`}></i>
            <div className="flex flex-col text-xs">
              <span>{store.topText}</span>
              <span className="font-semibold text-sm">{store.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>

    {/* Social Icons */}
    <div className="flex justify-between text-xl mt-4">
      {col.content.socialIcons.map((icon, i) => (
        <i
          key={i}
          className={`${icon} cursor-pointer hover:text-gray-400`}
        ></i>
      ))}
    </div>
  </>
)}

    
   </>
            )}
          </FooterColumn>
        ))}
      </div>
    </footer>
  );
}

export default Footer;
