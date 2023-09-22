import Elysia from "elysia";
import CharacterController from "./app/http/controllers/CharacterController";

const Router = new Elysia()
    .get("/character", CharacterController.getAllCharacters)
    .get("/character/:characterId", (context) => CharacterController.getCharacter(context.params.characterId))
    .post("/character/new", ({ body }) => CharacterController.newCharacter(body))
    .delete("/character/delete/:characterId", (context) => CharacterController.deleteCharacter(context.params.characterId))
    .put("/character/update", ({body}) => CharacterController.updateCharacter(body));

export default Router;