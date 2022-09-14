import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-charsheet',
  templateUrl: './charsheet.component.html',
  styleUrls: ['./charsheet.component.scss']
})
export class CharsheetComponent implements OnInit {

  public charform = new CharSheet()

  onSubmit(sheetupdate:any): void {
    console.log(sheetupdate.value);
  }

  constructor() {
  }

  ngOnInit(): void {    
    this.charform = {
      charname: "Zenace",
      charworld: "",
      charstory: "",
      charlifeform: "",
      chartype: "",
      charhp: 0,
      chardef: 0,
      chargold: 0,
      chardeath: 0,
      charhero: true,
      charstats: {
        strbase: 0,
        strlife: 0,
        strability: 0,
        strloot: 0,
        dexbase: 0,
        dexlife: 0,
        dexability: 0,
        dexloot: 0,
        conbase: 0,
        conlife: 0,
        conability: 0,
        conloot: 0,
        intbase: 0,
        intlife: 0,
        intability: 0,
        intloot: 0,
        wisbase: 0,
        wislife: 0,
        wisability: 0,
        wisloot: 0,
        chabase: 0,
        chalife: 0,
        chaability: 0,
        chaloot: 0,
      },
      charefforts: {
        basicbase: 0,
        basiclife: 0,
        basicability: 0,
        basicloot: 0,
        toolbase: 0,
        toollife: 0,
        toolability: 0,
        toolloot: 0,
        gunbase: 0,
        gunlife: 0,
        gunability: 0,
        gunloot: 0,
        magicbase: 0,
        magiclife: 0,
        magicability: 0,
        magicloot: 0,
        ultibase: 0,
        ultilife: 0,
        ultiability: 0,
        ultiloot: 0,
      },
      charequipment: {
        equip01: "",
        equip02: "",
        equip03: "",
        equip04: "",
        equip05: "",
        equip06: "",
        equip07: "",
        equip08: "",
        equip09: "",
        equip10: "",
        equip11: "",
        equip12: "",
        equip13: "",
        equip14: "",
        equip15: "",
        equip16: "",
        equip17: "",
        equip18: "",
        equip19: "",
        equip20: "",
        isequip01: false,
        isequip02: false,
        isequip03: false,
        isequip04: false,
        isequip05: false,
        isequip06: false,
        isequip07: false,
        isequip08: false,
        isequip09: false,
        isequip10: false,
        isequip11: false,
        isequip12: false,
        isequip13: false,
        isequip14: false,
        isequip15: false,
        isequip16: false,
        isequip17: false,
        isequip18: false,
        isequip19: false,
        isequip20: false,
      },
      charabilities: {
        ability01: "",
        ability02: "",
        ability03: "",
        ability04: "",
        ability05: "",
        ability06: "",
        ability07: "",
        ability08: "",
        ability09: "",
        ability10: "",
      }

    }
  }

  reset(charSheetForm :NgForm) {
    charSheetForm.reset();
  }

  

}

export class CharSheet {
  charname!:string;
  charworld!:string;
  charstory!:string;
  charlifeform!:string;
  chartype!:string;
  charhp!:number;
  chardef!:number;
  chargold!:number;
  chardeath!:number;
  charhero!:boolean;
  charstats!: {
    strbase:number;
    strlife:number;
    strability:number;
    strloot:number;
    dexbase:number;
    dexlife:number;
    dexability:number;
    dexloot:number;
    conbase:number;
    conlife:number;
    conability:number;
    conloot:number;
    intbase:number;
    intlife:number;
    intability:number;
    intloot:number;
    wisbase:number;
    wislife:number;
    wisability:number;
    wisloot:number;
    chabase:number;
    chalife:number;
    chaability:number;
    chaloot:number;
  }
  charefforts!: {
    basicbase:number;
    basiclife:number;
    basicability:number;
    basicloot:number;
    toolbase:number;
    toollife:number;
    toolability:number;
    toolloot:number;
    gunbase:number;
    gunlife:number;
    gunability:number;
    gunloot:number;
    magicbase:number;
    magiclife:number;
    magicability:number;
    magicloot:number;
    ultibase:number;
    ultilife:number;
    ultiability:number;
    ultiloot:number;
  }
  charequipment!: {
    equip01:string;
    equip02:string;
    equip03:string;
    equip04:string;
    equip05:string;
    equip06:string;
    equip07:string;
    equip08:string;
    equip09:string;
    equip10:string;
    equip11:string;
    equip12:string;
    equip13:string;
    equip14:string;
    equip15:string;
    equip16:string;
    equip17:string;
    equip18:string;
    equip19:string;
    equip20:string;
    isequip01:boolean;
    isequip02:boolean;
    isequip03:boolean;
    isequip04:boolean;
    isequip05:boolean;
    isequip06:boolean;
    isequip07:boolean;
    isequip08:boolean;
    isequip09:boolean;
    isequip10:boolean;
    isequip11:boolean;
    isequip12:boolean;
    isequip13:boolean;
    isequip14:boolean;
    isequip15:boolean;
    isequip16:boolean;
    isequip17:boolean;
    isequip18:boolean;
    isequip19:boolean;
    isequip20:boolean;
  }
  charabilities!: {
    ability01:string;
    ability02:string;
    ability03:string;
    ability04:string;
    ability05:string;
    ability06:string;
    ability07:string;
    ability08:string;
    ability09:string;
    ability10:string;
  }
} 

