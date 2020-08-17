const sgMail = require("@sendgrid/mail");

exports.sentMail = async (req, res) => {
    const msg = {
        to: "glxydesigns@gmail.com",
        from: req.body.email,
        subject: req.body.subject,
        text: req.body.message,
        html: req.body.message
    };
    try {
        await sgMail.send(msg);
        console.log(req.body.message);
        return res.status(200).json();
    } catch (err) {
        console.log(err.stack);
        res.status(500).json({ message: err.toString() });
    }
};