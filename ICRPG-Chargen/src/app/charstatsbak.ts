export class ICRPGcharsheet {
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

}
// CharInfo
// CharStatus
// CharStats
// CharEffort
// CharInventory
// CharAbility