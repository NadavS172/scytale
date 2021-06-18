const ClientForm = require("../models/clientform.model.js");

exports.create = (req, res) => {
    // Validate request
    if (!req.body) {
        res.status(400).send({
            message: "Content could not be empty!"
        });
    }

    const companyDetailsParam = req.body.form_response.answers[0].text;
    const cloudProvidersParam = req.body.form_response.answers[1].text;
    const executivesParam = req.body.form_response.answers[2].choice.label;
    const executivesNamesAndEmailsParam = req.body.form_response.answers[3].text;

    // Create a Client Form
    const clientForm = new ClientForm({
        company_details: companyDetailsParam,
        cloud_providers: cloudProvidersParam,
        executives: executivesParam,
        executives_names_and_emails: executivesNamesAndEmailsParam
    });

    // Save Client Form on db
    ClientForm.create(clientForm, (err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating the Client Form."
            });
        else res.send(data);
    });
};


exports.findAll = (req, res) => {
    ClientForm.getAll((err, data) => {
        if (err)
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving customers."
            });
        else res.send(data);
    });
};

exports.findById = (req, res) => {
    ClientForm.findById(req.params.formId, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Client Form with id ${req.params.formId}.`
                });
            } else {
                res.status(500).send({
                    message: "Error retrieving Client Form with id " + req.params.formId
                });
            }
        } else {
            const response = `Hello. We are ${data.company_details}. 
                              Our infrastructure is on ${data.cloud_providers}. 
                              Our executives are: ${data.executives} 
                              and their names and emails: ${data.executives_names_and_emails}
                              Thank you for your time.`
            res.send(response);
        }
    });
};

