const nodemailer= require('nodemailer')

const transporter= nodemailer.createTransport({
    service: 'gmail',
    auth: {
        type: 'OAuth2',
        user : 'gabrielmichaeljw@gmail.com',
        clientId: process.env.CLIENT_ID,
        clientSecret :process.env.CLIENT_SECRET,
        refreshToken : process.env.REFRESH_TOKEN
    }
})


const mail = {
    from: 'Gabriel Michael<rekreasidotcom@gmail.com>',
    to:'reyhanrdty@gmail.com',
    subject: 'Hallowwwwwwwwwwwwwww',
    html:'<h1>HALOOOOOOOOOOOOOOOOOOOOOOOOOO</h1>'
}


transporter.sendMail(mail,(err,res)=>{
    if(err) return console.log(err.message);
    console.log('email berhasil terkirim');
})