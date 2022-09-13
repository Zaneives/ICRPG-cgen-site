import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {

  equipment = [
    {id:1,name:"",desc:"",isEquip:false},
    {id:2,name:"",desc:"",isEquip:false},
    {id:3,name:"",desc:"",isEquip:false},
    {id:4,name:"",desc:"",isEquip:false},
    {id:5,name:"",desc:"",isEquip:false},
    {id:6,name:"",desc:"",isEquip:false},
    {id:7,name:"",desc:"",isEquip:false},
    {id:8,name:"",desc:"",isEquip:false},
    {id:9,name:"",desc:"",isEquip:false},
    {id:10,name:"",desc:"",isEquip:false},
    {id:11,name:"",desc:"",isEquip:false},
    {id:12,name:"",desc:"",isEquip:false},
    {id:13,name:"",desc:"",isEquip:false},
    {id:14,name:"",desc:"",isEquip:false},
    {id:15,name:"",desc:"",isEquip:false},
    {id:16,name:"",desc:"",isEquip:false},
    {id:17,name:"",desc:"",isEquip:false},
    {id:18,name:"",desc:"",isEquip:false},
    {id:19,name:"",desc:"",isEquip:false},
    {id:20,name:"",desc:"",isEquip:false}
  ]

  charDetails(charsheet:any) {
    console.log(charsheet.value);
  }

  constructor() {
  }

  ngOnInit(): void {
  }

}
