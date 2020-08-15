import * as nodemailer from 'nodemailer'
import * as handlebars from 'handlebars'
import * as fs from 'fs'
import { User } from '../../admin/entities/user.entity'

const {
	AUTHOR,
	END_POINT,
	ISSUER,
	NODEMAILER_USER,
	NODEMAILER_PASS
} =process.env

type Type = 'verifyEmail' | 'forgotPassword'

/**
 * Returns any by send email.
 *
 * @remarks
 * This method is part of the {@link shared/mail}.
 *
 * @param type - 1st input
 * @param user - 2nd input
 * @param req - 3rd input
 * @param token - 4th input
 * @param _id - 5th input
 *
 * @returns The any mean of `type`, `user`, `req`, `token` and `_id`
 *
 * @beta
 */
export const sendMail = async (
	type: Type,
	user: User,
	req: any,
	token: string,
	_id: string
): Promise<any> => {
	const transporter = await nodemailer.createTransport({
		service: 'dfg',
		secure: false, // true
		host: 'smtp.dfg.com.cn',
		port: 587, // 465
		auth: {
			user: NODEMAILER_USER!,
			pass: NODEMAILER_PASS!
		},
		tls: {
			rejectUnauthorized: false
		}
	})

	const readHTMLFile = (path, callback) => {
		fs.readFile(path, { encoding: 'utf-8' }, (err, html) => {
			if (err) {
				callback(err)
			} else {
				callback(null, html)
			}
		})
	}

	readHTMLFile('./src/assets/templates/udacity-index.html', (err, html) => {
		const template = handlebars.compile(html)

		const common = {
			author: AUTHOR,
			issuer: ISSUER,
			ios: '',
			android: '',
			twitter: '',
			facebook: '',
			googleplus: '',
			linkedin:				'',
			number: '200',
			street: 'Xiangzhou Road',
			city: 'Dalian',
			country: 'China',
			to: user.firstName,
			tracking: `http://${req.headers.host}/${END_POINT}/${_id}`
		}

		const replacements = {
			verifyEmail: {
				link: `${req.headers.origin}/verify/${token}`,
				subject: 'Verify Email',
				text1: 'To complete your sign up, please verify your email: ',
				button: 'VERIFY EMAIL',
				text2: 'Or copy this link and paste in your web	browser',
				...common
			},
			forgotPassword: {
				link: `${req.headers.origin}/reset/${token}`,
				subject: 'Reset Your Password',
				text1:
					// tslint:disable-next-line:quotemark
					"Tap the button below to reset your customer account password. If you didn't request a new password, you can safely delete this email.",
				button: 'Set New Password',
				text2:
					// tslint:disable-next-line:quotemark
					"If that doesn't work, copy and paste the following link in your browser:",
				...common
			}
		}

		const htmlToSend = template(replacements[type])

		const mailOptions = {
			from: 'Gzhh:' + NODEMAILER_USER, // sender address
			to: user.email, // list of receivers
			subject: replacements[type].subject,
			html: htmlToSend,
			attachments: [
				{
					path: './src/assets/images/logo.png',
					cid: 'unique@kreata.ee' // same cid value as in the html img src
				},
				{
					path: './src/assets/images/mail/ios.gif',
					cid: 'ios@chnirt.ee'
				},
				{
					path: './src/assets/images/mail/android.gif',
					cid: 'android@chnirt.ee'
				},
				{
					path: './src/assets/images/mail/twitter.jpg',
					cid: 'twitter@chnirt.ee'
				},
				{
					path: './src/assets/images/mail/facebook.jpg',
					cid: 'facebook@chnirt.ee'
				},
				{
					path: './src/assets/images/mail/googleplus.jpg',
					cid: 'googleplus@chnirt.ee'
				},
				{
					path: './src/assets/images/mail/linkedin.jpg',
					cid: 'linkedin@chnirt.ee'
				}
			]
		}

		transporter.sendMail(mailOptions, (err, info) => {
			if (err) {
				console.log(err)
				// Logger.error(err.message)
			} else {
				console.log('Message sent: ' + JSON.parse(info))
				// Logger.debug(info.response.message, 'Nodemailer')
			}
		})

		transporter.close()
	})
}