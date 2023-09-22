import * as charactersData from "../../../database/jsonFiles/characters.json";
import Character from "../Character";
import * as fs from "node:fs";

export default class CharacterRepository {

    /**
     * Get all characters from JSON File
     * @returns Array of Characters
     */
    static getAllCharacters(): Array<Character> {
        return charactersData;
    }

    /**
     * Retrieves the Character given by his Id
     * @param id Character's Id
     * @returns Character's Object
     */
    static getCharacter(id: string) {
        let characters = charactersData.default;

        if (characters === undefined) {
            return "no data";
        }

        if (!Array.isArray(characters)) {
            return "Data is not an array";
        }

        for (let character of characters) {
            if (character.id === id) {
                return character;
            }
        }

        return "No matches Character";
    }

    /**
     * Create a new Character using the HTTP's body and retrieve the new Character
     * @param body HTTP's body
     * @returns new Character's Object | error message
     */
    static createCharacter(body: any) {
        body = JSON.parse(body);
        const character = new Character(
            body.name,
            body.element,
            body.weapon,
            body.gender
        );

        const characterIndex = charactersData.default.findIndex(characterData => characterData.id === character.id);

        if (characterIndex !== -1) {
            return "This character already exists";
        }

        charactersData.default.push(character);

        this.saveFile(charactersData.default);

        return character;
    }

    /**
     * Update the character and retrieves the character updated
     * @param characterId Character's Id to update
     * @param newCharacterName new Character Name
     * @param newCharacterElement new Character Element
     * @param newCharacterWeapon new Character Weapon
     * @param newCharacterGender new Character Gender
     * @returns Character's Object Updated | error message
     */
    static updateCharacter(characterId: string, newCharacterName: string, newCharacterElement: string, newCharacterWeapon: string, newCharacterGender: string) {
        const characterIndex = charactersData.default.findIndex(characterData => characterData.id === characterId);

        if (characterIndex === -1) {
            return "Character not found";
        }

        let character = charactersData.default[characterIndex];

        character.name = newCharacterName;
        character.element = newCharacterElement;
        character.weapon = newCharacterWeapon;
        newCharacterGender = newCharacterGender;

        this.saveFile(charactersData.default);

        return character;
    }

    /**
     * Delete the character by the ID given
     * @param characterId Character's ID
     * @returns Message
     */
    static deleteCharacter(characterId: string) {
        const characterIndex = charactersData.default.findIndex(character => character.id === characterId);

        if (characterIndex !== -1) {
            charactersData.default.splice(characterIndex, 1);

            this.saveFile(charactersData.default);

            return "Character Dropped";
        } else {
            return "Character Not Found";
        }
    }

    /**
     * Storages the data given in the JSON
     * @param data JSON given
     */
    static saveFile(data: any) {
        const updatedData = JSON.stringify(data, null, 4);

        fs.writeFileSync('./src/database/jsonFiles/characters.json', updatedData, 'utf-8');
    }
}