import React from 'react'
import SectionName from './SectionName'
import SectionHeader from './SectionHeader'
import ItemsContainer from './ItemsContainer'

import {products} from "./data/products.json";
import {categories} from "./data/categories.json";
import {features} from "./data/features.json";

import ProductCard from './ProductCard';
import CategoryCard from './CategoryCard';
import FeatureCard from './FeatureCard';
import Slide from './Slide'

function Section({section, item}) {

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
    
    <div className='section-container flex flex-col my-10 gap-2' >
        <SectionName name={section.label} />
        <SectionHeader
        title={section.title} 
        showTimer={section.showTimer} 
        timerData={section.timerData} 
        showArrows={section.showArrows} />
        <ItemsContainer 
        horizontal={section.horizontal}
        items={sectionItems}
        CardComponent={CardComponent}
        />
    </div>
  )
}

export default Section
