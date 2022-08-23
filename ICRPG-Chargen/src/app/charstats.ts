export class ICRPGcharsheet {
    charName: string = "";
    worldName: string = "";
    storyName: string = "";
    charLifeform: string = "";
    charType: string = "";
    
    statName: Array<string> = ["STR","DEX","CON","INT","WIS","CHA"];
    statBase: Array<number> = [0,0,0,0,0,0];
    statLifeform: Array<number> = [0,0,0,0,0,0];
    statLoot: Array<number> = [0,0,0,0,0,0];
        
    effName: Array<string> = ["Basic","Weapons & Tools","Guns","Energy & Magic","Ultimate"];
    effBase: Array<number> = [0,0,0,0,0];
    effLifeform: Array<number> = [0,0,0,0,0];
    EffLoot: Array<number> = [0,0,0,0,0];

    charHP: number = 0;
    heroCoin: number = 0;
    deathTimer: number = 0;            
    
    carryName: string = "";
    isEquipped: boolean = false;
    carryDesc: string = "";
    carryInteraction?: string = "";
    
    abilityType: string = "";
    abilityName: string = "";
    abilityDesc: string = "";
    abilityInteraction: string = "";
    constructor () {
        // this.specLifeform = 0;
        // this.specType = 0;
        // this.specLoot = 0;        
    }
}

// CharInfo
// CharStatus
// CharStats
// CharEffort
// CharInventory
// CharAbility