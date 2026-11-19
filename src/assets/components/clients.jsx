import { useEffect, useState } from "react";
import "../styles/clients.css";

const changingWords = ["Trusted.", "Proven.", "Global.", "Forward-thinking."];
const clients = [
  "SAP",
  "Microsoft",
  "AWS",
  "Oracle",
  "Salesforce",
  "Qlik",
  "Tableau",
  "Google Cloud",
  "Dubai Government",
  "Al Futtaim",
  "Etisalat",
  "Emirates",
];

export default function Clients() {
  const [wordIndex, setWordIndex] = useState(0);

  useEffect(() => {
    const interval = window.setInterval(() => {
      setWordIndex((current) => (current + 1) % changingWords.length);
    }, 2200);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <section className="clients-section" id="clients">
      <div className="clients-heading">
        <span className="eyebrow">OUR CLIENTS</span>
        <h2>
          Partnerships built on{" "}
          <span key={wordIndex} className="changing-word">
            {changingWords[wordIndex]}
          </span>
        </h2>
      </div>
      <div className="client-marquee" aria-label="Selected clients">
        <div className="client-track">
          {[...clients, ...clients].map((client, index) => (
            <div className="client-logo" key={`${client}-${index}`}>
              <span>{client}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
