import { bio, contactLinks } from "../data";
import Links from "./Links.js";

export default function Bio() {
  
  return (
    <section id="bio">
      <h2>About me</h2>
      <p>{bio}</p>
      <Links links={contactLinks} />
    </section>
  );
}
