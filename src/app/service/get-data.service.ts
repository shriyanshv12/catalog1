import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GetDataService {
  constructor() {}

  // subcategory data .

  subCategorisFilterData = [
    { id: 1, categories: 'men', subcategories: 'over size' },
    { id: 2, categories: 'men', subcategories: 'winter wear' },
    { id: 3, categories: 'men', subcategories: 'polo tshirt' },
    { id: 4, categories: 'men', subcategories: 'round neck tshirt' },
    { id: 5, categories: 'women', subcategories: 'tshirt' },
    { id: 6, categories: 'women', subcategories: 'hoodie' },
    { id: 7, categories: 'women', subcategories: 'shirt' },
  ];
  // category data 
  categoriesData = [
    {
      id: 1,
      name: 'Womens collection',
      img: '../../assets/productimg/girl1.jpg',
      code: 'women',
    },
   
    {
      id: 2,
      name: 'Mens collection',
      img:'../../assets/productimg/krsna.jpg' ,
      code: 'men',
    },
   
  ];

  // product details 

  productData = [
    {
      pdId: 1,
      pdName: "Mens Round neck Black tshirt",
      pdDesc: "comfortable,strechable",
      pdPrice: 1199,
      pdCategory: "men",
      pdSubCategory: "round neck tshirt",
      pdImg: "../../assets/productimg/black.jpg"
    },
    {
      pdId: 2,
      pdName: "Mens round neck white Tshirt",
      pdDesc: "comfortable,strechable",
      pdPrice: 1999,
      pdCategory: "men",
      pdSubCategory: "round neck tshirt",
      pdImg: "../../assets/productimg/white.jpg"
    },
    {
      pdId: 3,
      pdName: "Mens jacket",
      pdDesc: "Best option for winters",
      pdCategory: "men",
      pdPrice: 6999,
      pdSubCategory: "winter wear",
      pdImg: "../../assets/productimg/menhoodie.jpg"
    },

    {
      pdId: 4,
      pdName: "Pure cotton oversize Tsirt for mens",
      pdDesc: "cotton, oversize, comfortable",
      pdPrice: 1999,
      pdCategory: "men",
      pdSubCategory: "over size",
      pdImg: "../../assets/productimg/menoversize.png"
    },
    {
      pdId: 5,
      pdName: "Red polo tshirt",
      pdDesc: "Red polo tshirt for men ",
      pdPrice: 1250,
      pdCategory: "men",
      pdSubCategory: "polo tshirt",
      pdImg: "../../assets/productimg/red1.jpg"
    },
   
    {
      pdId: 6,
      pdName: "Women Solid Round Neck Pure Cotton Black T-Shirt",
      pdDesc: "black pure cotton tshirt for girls",
      pdPrice: 800,
      pdCategory: "women",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/productimg/womenblack.webp",
    },
    {
      pdId: 7,
      pdName: "Women Printed Round Neck Cotton Blend White T-Shirt",
      pdDesc: "Printed Round Neck Cotton Blend White T-Shirt for womens",
      pdPrice: 500,
      pdCategory: "women",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/productimg/women1.jpg",
    },
    {
      pdId: 8,
      pdName: "Women Solid Round Neck Pure Cotton denim T-Shirt",
      pdDesc: "Round Neck Pure Cotton denim T-Shirt for womens.",
      pdPrice: 800,
      pdCategory: "women",
      pdSubCategory: "tshirt",
      pdImg: "../../assets/productimg/mendenim.jpg",
    },
    {
      pdId: 9,
      pdName: "Women hoodie ",
      pdDesc: "Hoodie for winters.",
      pdPrice: 1550,
      pdCategory: "women",
      pdSubCategory: "hoodie",
      pdImg: "../../assets/productimg/womenhoodie.jpg",
    },
    {
      pdId: 10,
      pdName: "Women Regular Fit Formal Shirt",
      pdDesc: "Women Burgundy Solid Pure Cotton Lapel Collar Regular Fit Formal Shirt",
      pdPrice: 1500,
      pdCategory: "women",
      pdSubCategory: "shirt",
      pdImg: "../../assets/productimg/shirt1.webp",
    },
    
  ];


}
