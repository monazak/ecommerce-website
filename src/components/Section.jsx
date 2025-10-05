import React from 'react'
import SectionName from './SectionName'
import SectionHeader from './SectionHeader'
import ProductsContainer from './ProductsContainer'
import {products} from "./data/products.json";
import {categories} from "./data/categories.json";
import {features} from "./data/features.json";

function Section({section}) {

    let sectionItems=[]
    switch (section.id){
        case 'browseByCategory':
            sectionItems = section.array
                .map(id => categories.find(c => c.id === id))
                .filter(item => item); // remove undefined if not found
            break;
        case 'featured':
            sectionItems = section.array
                .map(id => features.find(f => f.id === id))
                .filter(item => item);
            break;
        default :   
            sectionItems = section.array
                .map(id => products.find(f => f.id === id))
                .filter(item => item)
    }
  return (
    <div className='section-container flex flex-col my-10 gap-2' >
        <SectionName name={section.label} />
        <SectionHeader
        title={section.title} 
        showTimer={section.showTimer} 
        timerData={section.timerData} 
        showArrows={section.showArrows} />
        <ProductsContainer 
        horizontal={section.horizontal}
        products={sectionItems}
        
        />
    </div>
  )
}

export default Section
