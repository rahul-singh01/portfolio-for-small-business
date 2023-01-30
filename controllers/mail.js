const nodemailer = require('nodemailer')

const mail = () => {
    return {
        sendmail(req, res) {
            const { text, email, subject } = req.body
            const start = new Date()
            const msg = {
                from: "webjaadugar@gmail.com",
                to: email,
                subject: subject,
                text: text
            }
            nodemailer.createTransport({
                service: 'gmail',
                auth: {
                    user: "webjaadugar@gmail.com",
                    pass: "evcyaeoxobwsttsx"
                },
                port: 465,
                host: "smtp.gmail.com",
            }).sendMail(msg, (err) => {
                if (err) {
                    res.json({ status: false, message: err.message })
                } else {
                    const stop = new Date()
                    const req_sec = `${(stop - start)/1000} seconds..`
                    json_mail = {
                            status: true,
                            email_sent_to: email,
                            email_from: "webjaadugar@gmail.com",
                            in_time: req_sec

                        }
                        // res.json(json_mail)
                    res.render('confirmationpage.ejs')
                }
            })
        },

        check(req, res) {
            res.json({ status: "ok" })
        }
    }
}

module.exports = mail;