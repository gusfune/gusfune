import postmark from "postmark"

type MailMessage = {
  from: string
  to: string
  subject: string
  html: string
  text?: string
}

const mailer = async (message: MailMessage) => {
  try {
    const client = new postmark.ServerClient(process.env.POSTMARK_KEY as string)
    client.sendEmail({
      From: message.from,
      To: message.to,
      Subject: message.subject,
      HtmlBody: message.html,
      TextBody: message.text,
      MessageStream: "outbound",
    })
    // send mail with defined transport object
    //let info = await transporter.sendMail(message)

    //console.log("Message sent: %s", info.messageId)
    // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>
  } catch (error) {
    console.error(error)
  }
}

export default mailer
