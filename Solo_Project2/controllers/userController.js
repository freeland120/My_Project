export const joinController = (req, res) => {
  res.render("join", { pageTitle: "JOIN" });
};

export const loginController = (req, res) => {
  res.render("login", { pageTitle: "LOGIN" });
};

export const logoutController = (req, res) => {
  res.render("logout", { pageTitle: "LOGOUT" });
};

export const usersController = (req, res) => {
  res.render("users", { pageTitle: "USERS" });
};

export const userDetailController = (req, res) => {
  res.render("userDetail", { pageTitle: "USER-DETAIL" });
};

export const editProfileController = (req, res) => {
  res.render("editProfile", { pageTitle: "EDIT-PROFILE" });
};

export const changePasswordController = (req, res) => {
  res.render("changePassword", { pageTitle: "CHANGE-PASSWORD" });
};
