import CharacterRepository from "../../models/repositories/CharacterRepository";

export default class CharacterController {

    static getCharacter(id: string) {
        return CharacterRepository.getCharacter(id);
    }

    static getAllCharacters() {
        return CharacterRepository.getAllCharacters();
    }

    static newCharacter(body: any) {
        return CharacterRepository.createCharacter(body);
    }

    static updateCharacter(body: any) {
        body = JSON.parse(body);
        return CharacterRepository.updateCharacter(body.characterId, body.name, body.element, body.weapon, body.gender);
    }

    static deleteCharacter(characterId: string) {
        return CharacterRepository.deleteCharacter(characterId);
    }
}