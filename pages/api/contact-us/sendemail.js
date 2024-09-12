import nodemailer from 'nodemailer';

export default async function handler(req, res) {
    const name = req.body.name;
    const email = req.body.email;
    const subject = req.body.subject;
    const message = req.body.message;
    console.log("req==>", name, email, subject, message)

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ success: false, error: 'All fields are required' });
    }

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL_TO,
        subject: subject || 'No Subject',
        text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
    };

    try {
        await transporter.verify();
        console.log('Transporter verified successfully');

        const info = await transporter.sendMail(mailOptions);
        console.log('Email sent successfully:', info.response);
        res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error sending email:', error.message);
        res.status(500).json({ success: false, error: 'Failed to send email' });
    }
}
