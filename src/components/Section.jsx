import React from 'react'
import SectionName from './SectionName'
import SectionHeader from './SectionHeader'
import ItemsContainer from './ItemsContainer'
import NewArrivalContainer from './NewArrivalContainer'
import {products} from "./data/products.json";
import {categories} from "./data/categories.json";
import {features} from "./data/features.json";

import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import FeatureCard from './FeatureCard';
import Slide from './Slide'

import Button from './Button'


function Section({section, item, slide}) {

    if (item) {
     return (
      <div className="section-container flex flex-col my-10 gap-2 r px-4 py-3 md:px-[4%] lg:px-[7%]">
        <Slide item={item} />
      </div>
         );
    }
    if (!section) return null;

    let sectionItems=[]
    let CardComponent = ProductCard;

    switch (section.id){
        case 'browseByCategory':
            sectionItems = section.array
                .map(id => categories.find(c => c.id === id))
                .filter(item => item); // remove undefined if not found
                CardComponent=CategoryCard
                break;
        case 'featured':
            sectionItems = section.array
                .map(id => features.find(f => f.id === id))
                .filter(item => item);
                CardComponent= FeatureCard
            break;
        default :   
            sectionItems = section.array
                .map(id => products.find(f => f.id === id))
                .filter(item => item)
                CardComponent=ProductCard
    }

  return (
    
    <div className='flex flex-col justify-center  gap-5' >
        <div className='section-container flex flex-col  my-10 gap-5'>
          <SectionName name={section.label} />
            <SectionHeader
            title={section.title} 
            showTimer={section.showTimer} 
            timerData={section.timerData} 
            showArrows={section.showArrows}
            headerButton={section.headerButton}
            buttonText={section.buttonText}
            />
            
            {slide === 'NewArrivalContainer' && <NewArrivalContainer />}

            <ItemsContainer 
            horizontal={section.horizontal}
            items={sectionItems}
            CardComponent={CardComponent}
            />
        </div>
        <div className='flex justify-center'>
          {section.bottomButton && <Button text={section.buttonText}/>}
        </div>
        
    
    </div>
  )
}

export default Section
