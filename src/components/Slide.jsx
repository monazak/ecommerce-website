
import SlideDetails from "./SlideDetails";

function Slide({ item }) {
  return (
    <div className="slide-content gap-2  flex flex-col  md:flex-row md:gap-10  min-h-[300px] w-full md:gap-10 md:h-[350px] bg-black  md:p-6 items-center rounded-lg">

      <div className="md:flex-1  text-white flex  md:justify-start ">
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
      {item.label==="categories" &&
      <div className="flex-1 hover:scale-110 transition-transform duration-300 cursor-pointer">
        <img
          src={item.src}
          alt="Bom Box"
          className=" w-full md:w-80 lg:w-[568px]"
        />
      </div>
      
      }
     {item.label!=="categories" && 
      <div className="flex-1 relative slide-right flex  items-center  h-64 md:min-h-[200px] md:min-w-[200px]  ">
        <img
          src={item.src}
          alt={item.alt}
          className="slide-image  w-40 h-40 md:w-72 md:w-72 rounded"
        />
      </div>
     }
    
    </div>
  );
}

export default Slide;
