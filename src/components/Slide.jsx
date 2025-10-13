
import SlideDetails from "./SlideDetails";

function Slide({ item }) {
  return (
    <div className="slide-content  flex flex-col  md:flex-row gap-3 min-h-[400px] w-full md:gap-10 md:h-[350px] bg-black p-4 md:p-6 items-center rounded-lg">
      
      <div className="md:flex-1 text-white flex justify-center md:justify-start ">
        <SlideDetails
          title={item.title}
          subtitle={item.subtitle}
          iconClass={item.icon}
          label={item.label}
          button={item.button}
          link={item.link}
          countdown={item.countdown}
          description={item.description}
          color={item.color}
        />
      </div>

      <div className="flex-1 relative slide-right flex justify-center items-center  h-64 md:min-h-[200px] md:min-w-[200px]  ">
        <img
          src={item.src}
          alt={item.alt}
          className="slide-image w-64 h-64 md:w-72 md:w-72 rounded"
        />
      </div>
    </div>
  );
}

export default Slide;
