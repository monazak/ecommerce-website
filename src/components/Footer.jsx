import { footerData } from "../components/data/footer.json";
import FooterColumn from "./FooterColumn";

function Footer() {
  return (
    <footer className="bg-black text-white px-4 py-10 md:px-[4%] lg:px-[9%]">
      <div
        className="
          flex flex-wrap justify-center md:justify-start gap-8 w-full
          max-w-7xl mx-auto
        "
      >
        {footerData.map((col, idx) => (
          <div
            key={idx}
            className="
              flex-1 min-w-[180px] md:min-w-[200px] lg:min-w-[220px]
              max-w-[260px]
            "
          >
            <FooterColumn
              title={col.title}
              logo={col.content.logo}
              stretch={idx === footerData.length - 1}
            >
              {/* Subscribe Column */}
              {col.type === "subscribe" && (
                <>
                  <p className="text-xs mb-4">{col.content.text}</p>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder={col.content.placeholder}
                      className="
                        w-full rounded px-3 py-1 pr-10 text-black
                        focus:outline-none placeholder:text-sm placeholder:text-gray-400
                      "
                    />
                    <i className="fas fa-paper-plane absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"></i>
                  </div>
                </>
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
                  <a
                    key={i}
                    href="#"
                    className="text-sm mb-1 hover:underline hover:text-gray-300 transition"
                  >
                    {link}
                  </a>
                ))}

              {/* App Column */}
              {col.type === "app" && (
                <>
                  <p className="text-[10px] text-gray-400 mb-3">
                    {col.content.promoText}
                  </p>

                  <div className="flex gap-2 mb-3">
                    {/* QR */}
                    <div className="w-[80px] h-[80px] flex-shrink-0">
                      <img
                        src={col.content.qrSrc}
                        alt="QR Code"
                        className="w-full h-full object-cover rounded bg-white"
                      />
                    </div>

                    {/* Store Links */}
                    <div className="flex flex-col gap-2 flex-shrink-0 no-wrap">
                      {col.content.stores.map((store, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 border rounded px-2 py-1 hover:bg-gray-800 transition w-full"
                        >
                          <i className={`${store.icon} text-base`}></i>
                          <div className="flex flex-col text-[8px] leading-tight">
                            <span>{store.topText}</span>
                            <span className="font-semibold text-[10px]">
                              {store.name}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Social Icons */}
                  <div className="flex justify-center gap-10  text-lg mt-2">
                    {col.content.socialIcons.map((icon, i) => (
                      <i
                        key={i}
                        className={`${icon} cursor-pointer hover:text-gray-400 transition`}
                      ></i>
                    ))}
                  </div>
                </>
              )}
            </FooterColumn>
          </div>
          
        ))}
      </div>
        <div className="flex justify-center mt-10 text-gray-400 ">
        <i className="fa-regular fa-copyright"></i>
        <p className="text-xs  ">Copyright Rimel 2022. All right reserved</p>
        </div>

    </footer>
  );
}

export default Footer;
