import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
    },
});

async function sendEmail(subject, issues) {
    try {
        let body = `Foram encontradas novas issues marcadas como "good-first-issue":\n\n`;
        issues.forEach(issue => {
            body += `- ${issue.title}: ${issue.html_url}\n`;
        });

        const mailOptions = {
            from: process.env.EMAIL_FROM,
            to: process.env.EMAIL_TO,
            subject: subject,
            text: body,
        };

        await transporter.sendMail(mailOptions);
        console.log('E-mail enviado com sucesso!');
    } catch (error) {
        console.error('Erro ao enviar o e-mail:', error);
    }
}

export { sendEmail };