const express = require("express");
const router = express.Router();
const notesController = require("../controllers/notesController");

const verifyJWT = require("../midddleware/verifyJWT");

router.use(verifyJWT);

router
  .route("/")
  .get(notesController.getAllNotes)
  .post(notesController.createNewNote)
  .patch(notesController.updateNote)
  .delete(notesController.deleteNote);

module.exports = router;
