import multer from "multer";

export const localsMiddleware = (req, res, next) => {
  console.log(req.session);
  res.locals.loggedIn = Boolean(req.session.loggedIn);
  res.locals.siteName = "YouTube";
  res.locals.loggedInUser = req.session.user || {};
  console.log(res.locals);
  next();
};

export const protectorMiddleware = (req, res, next) => {
  if (req.session.loggedIn) {
    next();
  } else {
    return res.redirect("/login");
  }
};

export const publicOnlyMiddleware = (req, res, next) => {
  if (!req.session.loggedIn) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const notSocailOnlyMiddleware = (req, res, next) => {
  if (true) {
    return next();
  } else {
    return res.redirect("/");
  }
};

export const uploadAvatarMiddleware = multer({
  dest: "uploads/avatar/",
  limit: {
    fileSize: 3000000,
  },
});

export const uploadVideoMiddleware = multer({
  dest: "uploads/video/",
  limit: {
    fileSize: 10000000,
  },
});
