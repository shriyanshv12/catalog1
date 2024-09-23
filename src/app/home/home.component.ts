import { Component, OnInit } from '@angular/core';
import { GetDataService } from '../service/get-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  bannerImgs = [
    {
      id: 1,
      img: '../../assets/banner/one.jpg',
    },
    {
      id: 2,
      img: '../../assets/banner/two.png',
    },
    {
      id: 3,
      img: '../../assets/banner/three.jpg',
    },
  ];
  getCategorisData:any;
  getMenProductData:any=[];
  getWomenProductData:any=[];

    constructor(private getData:GetDataService){}
  
    ngOnInit(): void {
        this.getCategorisData = this.getData.categoriesData;
        
        this.getData.productData.filter((ele:any)=>{

            if(ele.pdCategory == 'men')
            {
                this.getMenProductData.push(ele);
            }
            if(ele.pdCategory=='women')
            {
                this.getWomenProductData.push(ele);
            }
          });
    

      }




}