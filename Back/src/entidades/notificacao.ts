import nodemailer from "nodemailer";

export function enviarEmail(planta: string) {
    const email = 'dbserverdesafio@gmail.com'
    const passwd = 'senh@123';

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: email,
            pass: passwd
        }
    });

    const mailOptions = {
        from: email,
        to: 'dbserverdesafio@gmail.com',
        subject: `Problema Nível Umidade ${new Date(Date.now())}`,
        html: `<p>Nível de umidade da planta ${planta} está fora do ideal. </p>`
    };

    transporter.sendMail(mailOptions, (err, info) => {
        if (err) {
            console.log(err.message);
        } else {
            console.log(info);
        }
    });
}