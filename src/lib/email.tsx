import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // Use `true` for port 465, `false` for all other ports
    auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
    },
});

export async function sendEmail({
                                    to,
                                    subject,
                                    html,

                                }: {
    to: string;
    subject: string;
    html: string;
}) {
    console.log("Sending email to", to);

    await transporter.sendMail({
        from: '"GigHaven 👻" <gighaven@gmail.com>', // sender address
        to,
        subject, // list of receivers
        html, // html body
    });
}
