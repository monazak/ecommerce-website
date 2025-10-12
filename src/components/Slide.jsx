
import SlideDetails from "./SlideDetails";

function Slide({ item }) {
  return (
    <div className="slide-content  flex flex-col  md:flex-row gap-3 min-h-[400px] w-full md:gap-10 md:h-[350px] bg-black p-4 md:p-6 items-center rounded-lg">
      
      <div className="md:flex-1 text-white flex justify-center md:justify-start md:ml-10 ">
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

      <div className="flex-1 relative slide-right flex justify-center items-center  h-64 md:h-70  ">
        <img
          src={item.src}
          alt={item.alt}
          className="slide-image w-64 h-64 rounded"
        />
      </div>
    </div>
  );
}

export default Slide;
