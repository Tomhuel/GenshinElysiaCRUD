# Endpoints

___

## Index

- [Get All Characters](#get-all-characters)
- [Get Character](#get-character)
- [Create New Character](#create-new-character)
- [Update Character](#update-character)
- [Delete Character](#delete-character)

## Get All Characters

Retrieves all the characters in the JSON file.

`HTTP Method Type: GET`

- URL: `/character`

    Examples:
    ```
    http://localhost:3000/character
    ```
- Response:
    `Characters`

    Examples:
    ```
    [
        {
            "id": "hu-tao",
            "name": "Hu Tao",
            "element": "Pyro",
            "weapon": "Polearm",
            "gender": "Female"
        },
        {
            "id": "keqing",
            "name": "Keqing",
            "element": "Electro",
            "weapon": "Sword",
            "gender": "Female"
        }
    ]
    ```

## Get Character

Get all characters from JSON File

`HTTP Method Type: GET`

- URL: `/character/${characterId}`

    Examples:
    ```
    http://localhost:3000/character/zhongli
    ```

- Response:
    `Character's Data` | `"No matches Character"`

    Examples:
    ```
    {
        "id": "zhongli",
        "name": "Zhongli",
        "element": "Geo",
        "weapon": "Pito",
        "gender": "Male"
    }
    ```

    ```
    "No matches Character"
    ```

## Create New Character

Create a new Character using the HTTP's body and retrieve the new Character

`HTTP Method Type: POST`

- URL: `/character/new`

    Examples:
    ```
    http://localhost:3000/new
    ```
- Body:
    ```
    {
        "name": "Character's Name",
        "element": "Character's Element",
        "weapon": "Character's Weapon",
        "gender": "Character's Gender"
    }
    ```
- Response:
    `new Character's Data` | `"This character already exists"`

    Examples:
    ```
    {
        "id": "kamisato-ayaka"
        "name": "Kamisato Ayaka",
        "element": "Cryo",
        "weapon": "Sword",
        "gender": "Female"
    }
    ```
    ```
    "This character already exists"
    ```


## Update Character

Update the character and retrieves the character updated

`HTTP Method Type: PUT` (Elysia doesn't have `UPDATE` http method)

- URL: `/character/update`

    Examples:
    ```
    http://localhost:3000/update
    ```
- Body:
    ```
    {
        "characterId": "Character's Id that already exists",
        "name": "new Character's Id",
        "element": "new Character's Element",
        "weapon": "new Character's Weapon",
        "gender": "new Character's Gender"
    }
    ```
- Response:
    `Character Updated` | `"Character not found"`

    Examples:
    ```
    {
        "characterId": "kaedehara-kazuha",
        "name": "Kazuha",
        "element": "Anemo",
        "weapon": "Sword",
        "gender": "Male"
    }
    ```
    ```
    "Character not found"
    ```

## Delete Character

Delete the character by the ID given

`HTTP Method Type: DELETE`

- URL: `/character/delete/${characterId}`

    Examples:
    ```
    http://localhost:3000/bennett
    ```

- Body:  `This endpoint doesn't need use body`
- Response:
    `"Character Dropped"` | `"Character Not Found"`;

    Examples:
    ```
    "Character Dropped"
    ```
    ```
    "Character Not Found"
    ```