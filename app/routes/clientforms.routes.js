module.exports = app => {
    const clientForms = require("../controllers/clientform.controller.js");

    app.post("/clientforms", clientForms.create);

    // Retrieve all Client Forms
    app.get("/clientforms", clientForms.findAll);

    // Retrieve a single client form with formId
    app.get("/clientforms/:formId", clientForms.findById);
};