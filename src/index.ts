import Router from "./routes";

const port = 3000;

const app = Router.listen(port);

console.log(
  `|-.-| Server running at http://${app.server?.hostname}:${app.server?.port}`
);