import Links from "./Links"
import { contactLinks } from "../data"
import phone from "../img/phone.svg"
import email from "../img/email.svg"

export default function Footer() {

    return (
        <footer>
            <h2>Contact Me</h2>
            <p>
                <img
                    src={phone}
                    alt="phone"
                />
                <span>8058508641</span>
            </p>
            <p>
                <img
                    src={email}
                    alt="email"
                />
                <span>joey.santia@gmail.com</span>
            </p>
            <Links links={contactLinks} />
        </footer>
    )
}