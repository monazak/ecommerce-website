import { products } from "./products.json";

export const sections = [
  {
    id: "flashSales",
    label: "Today's",
    title: "Flash Sales",
    showTimer: true,
    timerData: "2025-12-10T23:59:59",
    variant:"minimal",
    showArrows: true,
    horizontal: true,
    array: products.filter(p => p.saleRatio).map(p => p.id),
    bottomButton: true,
    buttonText:"View All Products"  
  },
  {
    id: "browseByCategory",
    label: "Categories",
    title: "Browse By Category",
    showTimer: false,
    showArrows: true,
    horizontal: true,
    array: [1,2,3,4,5,6]
  },
  {
    id: "bestSellingProduct",
    label: "This Month",
    title: "Best Selling Product",
    showTimer: false,
    showArrows: false,
    horizontal: true,
    array: products.filter(p => !p.saleRatio).map(p => p.id),
    headerButton: true,
    buttonText:"View All",
    showRatio:false
  },
  {
    id:"ourProducts",
    label: "Our Products",
    title: "Explore Our Products",
    showTimer: false,
    showArrows: true,
    horizontal: false,
    rateFlex:true,
    colorsSection:true,
    array: products
          .filter(p => !p.saleRatio || p.colors)
          .map(p => p.id),
    bottomButton: true ,
    buttonText:"View All Products" 
  },
  {
    id:"featured",
    label: "Featured",
    title: "New Arrival",
    showTimer: false,
    showArrows: false,
    horizontal: false,
    array: [1,2,3]
  }
];
