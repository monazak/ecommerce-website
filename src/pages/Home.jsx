import React from 'react'
import CategoryWithSlider from '../components/CategoryWithSlider'
import Sidebar from '../components/SideBar'

function Home({isSidebarOpen, closeSidebar}) {
  return (
    <CategoryWithSlider isSidebarOpen={isSidebarOpen} closeSidebar={closeSidebar} />

  )
}

export default Home
