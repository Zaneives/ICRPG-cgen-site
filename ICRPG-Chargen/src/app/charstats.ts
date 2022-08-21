export interface CharInfo {
    charName: string;
    worldName: string;
    storyName: string;
    charLifeform: string;
    charType: string;
}
// Character Sheet
//     Character (Name, World Name, Story, Life Form, Type)
//     Character Name
//     World Name
//     Story
//     Life Form/Species/Race
//     Type/Specialization/Class

export interface CharSpecs {
    specName: string;
    specDieSize: number;
    specBase: number;
    specLifeform: number;
    specType: number;
    specLoot: number;
    specTotal: number;
}
    // Stats (Name, Base, Life Form, Type , Loot, Total)
    // Strength
    // Dexterity
    // Constitution
    // Intelligence
    // Wisdom
    // Charisma
        
// export interface CharEffort {
//     effName: string;
//     effBase: number;
//     effLifeform: number;
//     efftype: number;
//     effLoot: number;
//     effTotal: number;
// }
    // Effort (Name, Base, Life Form, Type, Loot, Total)
    // Basic
    // Weapon
    // Magic
    // Ultimate

export interface CharStatus {
   charHP: number;
   charDef: number;
   heroCoin: number;
   deathTimer: number;    
}    
    // Status (HP, Defense (Con, Loot), Hero Coin, Death Timer)
    // HP
    // Defense
    // Gold
    // Hero Coin
    // Room Difficulty
    // Death Timer

    export interface CharInventory {
        carryName: string;
        isEquipped: boolean;
        carryDesc: string;
        carryInteraction: string;
    }
    // Equipped * 10 (Name, Description, Interaction)
    // Carried * 10 (Name, Description, Interaction)    

    export interface CharAbility {
        abilityType: string;
        abilityName: string;
        abilityDesc: string;
        abilityInteraction: string;
    }
    // Abilities * 6 (Name, Description, Interaction)
    // Powers * 4 (Name, Description, Interaction)
    // Augments * x (Name, Description, Interaction)



export class CharInfo {
    constructor(charName:string, worldName:string, storyName:string, charLifeform:string, charType:string) {
        this.charName = charName;
        this.worldName = worldName;
        this.storyName = storyName;
        this.charLifeform = charLifeform;
        this.charType = charType;
    }    
}

export class CharSpecs {
    constructor(specName:string, specDieSize:number, specBase:number, specLifeform:number, specType:number, specLoot:number) {
        this.specName = specName;
        this.specDieSize = specDieSize;
        this.specBase = specBase;
        this.specLifeform = specLifeform;
        this.specType = specType;
        this.specLoot = specLoot;
        let specTotal:number = specLifeform + specType + specLoot
    }
}

export class CharStatus {
    constructor(charHP:number, heroCoin:number, deathTimer:number) {
        this.charHP = charHP;
        this.heroCoin = heroCoin;
        this.deathTimer = deathTimer;
        let charDef:number = 10;
    }
}

export class CharInventory {
    constructor(carryName: string, isEquipped:boolean, carryDesc:string, carryInteraction:string) {
        this.carryName = carryName;
        this.isEquipped = isEquipped;
        this.carryDesc = carryDesc;
        this.carryInteraction = carryInteraction;    
    }
} 

export class CharAbility {
    constructor(abilityType:string, abilityName:string, abilityDesc:string, abilityInteraction:string) {
        this.abilityType = abilityType;
        this.abilityName = abilityName;
        this.abilityDesc = abilityDesc;
        this.abilityInteraction = abilityInteraction;
    }
}

// CharInfo
// CharStatus
// CharStats
// CharEffort
// CharInventory
// CharAbility