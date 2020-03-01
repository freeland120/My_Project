export const homeController = (req, res) => {
  res.render("home", { pageTitle: "HOME" });
};

export const searchController = (req, res) => {
  const {
    query: { term: searchingBy }
  } = req;

  res.render("search", { pageTitle: "SEARCH", searchingBy });
};

export const videosController = (req, res) => {
  res.render("videos", { pageTitle: "VIDEOS" });
};

export const uploadController = (req, res) => {
  res.render("upload", { pageTitle: "UPLOAD" });
};

export const videoDetailController = (req, res) => {
  res.render("videoDetail", { pageTitle: "VIDEO-DETAIL" });
};

export const editVideoController = (req, res) => {
  res.render("editVideo", { pageTitle: "EDIT-VIDEO" });
};

export const deleteVideoController = (req, res) => {
  res.render("deleteVideo", { pageTitle: "DELETE-VIDEO" });
};
