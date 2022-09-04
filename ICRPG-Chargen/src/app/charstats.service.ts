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
  
  carryName = ["","","","","","","","","","","","","","","","","","","",""]
  isEquipped = [false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false,false]
  carryDesc = ["","","","","","","","","","","","","","","","","","","",""]
  carryInteraction = ["","","","","","","","","","","","","","","","","","","",""]

  abilityType = ["","","","","","","","","","","","","","","",""]
  abilityName = ["","","","","","","","","","","","","","","",""]
  abilityDesc = ["","","","","","","","","","","","","","","",""]
  abilityInteraction = ["","","","","","","","","","","","","","","",""]

  constructor () {  }

}
