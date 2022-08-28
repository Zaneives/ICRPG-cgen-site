import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class CharstatsService {
  charName: string = "";
  worldName: string = "";
  storyName: string = "";
  charLifeform: string = "";
  charType: string = "";
  
  // statHeading = ["Name", "Base", "Lifeform", "Loot"];
  // strStat = ["Str",0,0,0];
  // dexStat = ["Dex",0,0,0];
  // conStat = ["Con",0,0,0];
  // intStat = ["Int",0,0,0];
  // wisStat = ["Wis",0,0,0];
  // chaStat = ["Cha",0,0,0];

  strStat = {
    name: "Str",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  dexStat = {
    name: "Dex",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  conStat = {
    name: "Con",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  intStat = {
    name: "Int",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  wisStat = {
    name: "Wis",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  chaStat = {
    name: "Cha",
    base: 0,
    lifeform: 0,
    loot: 0
  }

  // effHeading = ["Name", "Base", "Lifeform", "Loot"]
  // basicEff = ["Basic", 0, 0, 0];
  // weaponEff = ["Weapons & Tools", 0, 0, 0];
  // gunEff = ["Guns", 0, 0, 0];
  // magicEff = ["Energy and Magic", 0, 0, 0];
  // ultiEff = ["Ultimate", 0, 0, 0];

  basicEff = {
    name: "Basic",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  weaponEff = {
    name: "Weapons & Tools",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  gunEff = {
    name: "Guns",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  magicEff = {
    name: "Magic & Energy",
    base: 0,
    lifeform: 0,
    loot: 0
  }
  ultiEff = {
    name: "Ultimate",
    base: 0,
    lifeform: 0,
    loot: 0
  }

  charHP = 0;
  heroCoin = false;
  deathTimer = 0;            
  
  carryName: string = "";
  isEquipped: boolean = false;
  carryDesc: string = "";
  carryInteraction?: string = "";
  
  abilityType: string = "";
  abilityName: string = "";
  abilityDesc: string = "";
  abilityInteraction: string = "";
  constructor () {  }

}

// CharInfo
// CharStatus
// CharStats
// CharEffort
// CharInventory
// CharAbility
