import nodemailer from 'nodemailer';
import config from '../config';

export const Transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: "alirazaarif995@gmail.com",
        pass: config.emailPass
    }
});
