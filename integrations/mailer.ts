import nodemailer from "nodemailer"

type MailMessage = {
  from: string
  to: string
  subject: string
  html: string
  text?: string
}

const mailer = async (message: MailMessage) => {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST as unknown,
      port: (process.env.MAIL_PORT as unknown) as number,
      secure: process.env.MAIL_SAFE as string, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER as string,
        pass: process.env.MAIL_PASS as string,
      },
    } as never)

    // send mail with defined transport object
    let info = await transporter.sendMail(message)

    console.log("Message sent: %s", info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

    // Preview only available when sending through an Ethereal account
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
    // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
  } catch (error) {
    console.error(error)
  }
}

export default mailer
