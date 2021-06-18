const sql = require("./db.js");

// constructor
const ClientForm = function(form) {
    this.company_details = form.company_details;
    this.cloud_providers = form.cloud_providers;
    this.executives = form.executives;
    this.executives_names_and_emails = form.executives_names_and_emails;
};


ClientForm.create = (newForm, result) => {
    sql.query("INSERT INTO client_forms SET ?", newForm, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created client_form: ", { id: res.insertId, ...newForm });
        result(null, { id: res.insertId, ...newForm });
    });
};

ClientForm.getAll = result => {
    sql.query("SELECT * FROM client_forms", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        console.log("client_forms: ", res);
        result(null, res);
    });
};

ClientForm.findById = (formId, result) => {
    sql.query(`SELECT * FROM client_forms WHERE id = ${formId}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        if (res.length) {
            console.log("found form: ", res[0]);
            result(null, res[0]);
            return;
        }

        result({ kind: "not_found" }, null);
    });
};

module.exports = ClientForm