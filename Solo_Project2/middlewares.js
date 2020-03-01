import routes from "./routes";

export const localsMiddleware = (req, res, next) => {
  res.locals.siteName = "DK's You tube";
  res.locals.routes = routes;
  next();
};
