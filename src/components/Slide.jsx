
import SlideDetails from "./SlideDetails";

function Slide({ item }) {
  return (
    <div className="slide-content  flex flex-col  md:flex-row gap-4 h-[400px] md:gap-10 md:h-[350px] bg-black p-4 md:p-6 items-center rounded-lg">
      
      <div className="flex-1 text-white flex justify-center md:justify-start ">
        <SlideDetails
          title={item.title}
          subtitle={item.subtitle}
          iconClass={item.icon}
          label={item.label}
          button={item.button}
          link={item.link}
          countdown={item.countdown}
          description={item.description}
        />
      </div>

      <div className="flex-1 slide-right flex justify-center items-center">
        <img
          src={item.src}
          alt={item.alt}
          className="slide-image w-64 md:w-80 h-64 md:h-70 object-cover rounded"
        />
      </div>
    </div>
  );
}

export default Slide;
