export interface CharacterInterface {
    id: string;
    name: string;
    element: element;
    weapon: weaponType;
    gender: gender;
}

class Character implements CharacterInterface {
    id: string;
    name: string;
    element: element;
    weapon: weaponType;
    gender: gender;

    constructor(name: string, element: element, weapon: weaponType, gender: gender) {
        this.id = name.replace(" ", "-").toLowerCase();
        this.name = name;
        this.element = element;
        this.weapon = weapon;
        this.gender = gender;
    }
}

export default Character;

