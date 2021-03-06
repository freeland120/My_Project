import express from "express";
import routes from "../routes";
import {
  usersController,
  userDetailController,
  editProfileController,
  changePasswordController
} from "../controllers/userController";
const userRouter = express.Router();

/* userRouter.get("/", (req, res) => {
  res.send("user index");
});

userRouter.get("/edit", (req, res) => {
  res.send("user edeit");
});

userRouter.get("/password", (req, res) => {
  res.send("user password");
}); */

userRouter.get(routes.users, usersController);

userRouter.get(routes.editProfile, editProfileController);

userRouter.get(routes.changePassword, changePasswordController);

userRouter.get(routes.userDetail, userDetailController);

export default userRouter;
