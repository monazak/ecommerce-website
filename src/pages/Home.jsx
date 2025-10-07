import React from 'react'
import CategoryWithSlider from '../components/CategoryWithSlider'
import SectionHeader from '../components/SectionHeader'
import Countdown from '../components/Countdown'
import Arrows from '../components/Arrows'
import Section from '../components/Section'
import {sections} from '../components/data/sections.js'
import Slide from '../components/Slide.jsx'
import {categorySlide} from '../components/data/imageSlider.json'
import NewArrivalContainer from '../components/NewArrivalContainer.jsx'
import Button from '../components/Button.jsx'
function Home({isSidebarOpen, closeSidebar}) {
  return (

<div className="flex flex-col gap-16 ">
    <CategoryWithSlider isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />
    <Section section={sections[0]} />
    <Section section={sections[1]} />
    <Section section={sections[2]} />
    <Section item={categorySlide[0]} />

    
    <Section section={sections[3]} />
    <Section section={sections[4]} slide="NewArrivalContainer" />

</div>
   
    

  )
}

export default Home
