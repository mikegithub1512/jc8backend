const sgMail = require('@sendgrid/mail')
const sgAPIKey = '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'

sgMail.setApiKey(sgAPIKey)

const sendVerify = (username, name, email) => {
    sgMail.send({
        to: email,
        from : 'alvinrochafi26@gmail.com',
        subject: "Verikasi Email",
        html: `<h1><a href='http://localhost:2010/verify?username=${username}'>Klik untuk verifikasi</a></h1>`
    })
}

module.exports = {
    sendVerify
}