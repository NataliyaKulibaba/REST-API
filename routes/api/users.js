const express = require("express");
const { validation, ctrlWrapper, user,upload } = require("../../middlewares");
const { users: ctrl } = require("../../controllers");
const {
  joiSignupSchema,
  joiLoginSchema,
  subscriptionJoiSchema,
} = require("../../models/user");

const router = express.Router();

router.post("/signup", validation(joiSignupSchema), ctrlWrapper(ctrl.signup));
router.post("/login", validation(joiLoginSchema), ctrlWrapper(ctrl.login));
router.post("/logout", user, ctrlWrapper(ctrl.logout));
router.get("/current", user, ctrlWrapper(ctrl.currentUser));
router.patch(
  "/:id/subscription",
  validation(subscriptionJoiSchema),
  ctrlWrapper(ctrl.updateSubscriptionOfUser)
);
router.patch("/avatars",user, upload.single("avatar"),ctrlWrapper(ctrl.updateAvatar));

module.exports = router;
