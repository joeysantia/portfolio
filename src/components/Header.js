import Bio from "./Bio.js";
import headshot from "../img/headshot.jpg"

export default function Header() {
    return (
        <header>
            <section>
                <img 
                    src={headshot}
                    alt="headshot"
                    id="headshot"
                />
                <h1>Joey Santia</h1>
            </section>
            <Bio />
        </header>
    )
}