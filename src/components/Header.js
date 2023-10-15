import Bio from "./Bio.js";
import stockPhoto from "../img/placeholders/pexels-princess-mijares-927505.jpg"

export default function Header() {
    return (
        <header>
            <section>
                <img 
                    src={stockPhoto}
                    alt="headshot"
                    id="headshot"
                />
                <h1>Joey Santia</h1>
            </section>
            <Bio />
        </header>
    )
}