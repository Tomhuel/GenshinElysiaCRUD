# Genshin Elysia CRUD

This is a little CRUD of characters of Genshin Impact to try for first time [Bun](https://bun.sh/) and [Elysia](https://elysiajs.com).

Is a CRUD of characters of Genshin Impact that storages in a `json file`. See [here](./src/database/jsonFiles/characters.json) to check the json file.

To see the endpoints and parameters needed click [here](./doc/endpoints.md)

## ¿How to run the project locally?

Dependencies:
- Bun

To start to use this little CRUD, we need Bun and clone this repository.

First of all, run:

```
bun install
```

and then:

```
bun run dev
```

the app starts at port 3000 by default, if you want to change the port change it on [index.ts](./src/index.ts).

