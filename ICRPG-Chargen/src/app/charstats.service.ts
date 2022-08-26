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
  
  statHeading = ["Name", "Base", "Lifeform", "Loot"];
  strStat = ["Str", 0,0,0];
  dexStat = ["Dex", 0,0,0];
  conStat = ["Con", 0,0,0];
  intStat = ["Int", 0,0,0];
  wisStat = ["Wis", 0,0,0];
  chaStat = ["Cha", 0,0,0];
  
  effHeading = ["Name", "Total", "Base", "Lifeform", "Loot"]
  basicEff = ["Basic", 0, 0, 0, 0];
  weaponEff = ["Weapons & Tools", 0, 0, 0, 0];
  gunEff = ["Guns", 0, 0, 0, 0];
  magicEff = ["Energy and Magic", 0, 0, 0, 0];
  ultiEff = ["Ultimate", 0, 0, 0, 0];
  
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
  totalSpec(specarray:number) {
      specarray[1] = specarray[2] + specarray[3] + specarray[4];
  }
}

// CharInfo
// CharStatus
// CharStats
// CharEffort
// CharInventory
// CharAbility
