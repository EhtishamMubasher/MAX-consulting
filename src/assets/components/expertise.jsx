import "../styles/expertise.css";

import erpIcon from "../images/expertisecardsimages/ERP-icon.png";
import dataIcon from "../images/expertisecardsimages/data-analytics-icon.png";
import aiIcon from "../images/expertisecardsimages/ai-logo.png";
import cloudIcon from "../images/expertisecardsimages/cloud-icon.png";
import corporateIcon from "../images/expertisecardsimages/corporate-icon.png";
import educationIcon from "../images/expertisecardsimages/education.png";

const expertiseItems = [
  {
    icon: erpIcon,
    title: "SAP ERP Implementation & Support",
    description:
      "Delivering end-to-end SAP solutions, from implementation and migration to ongoing support, backed by deep SAP expertise and globally recognized as a winner at the 2026 SAP Partner Awards.",
  },
  {
    icon: dataIcon,
    title: "Data Analytics & Integration",
    description:
      "Turning raw data into real-time intelligence through Qlik, Tableau, Power BI and custom analytics solutions that connect, govern and activate enterprise data for smarter decisions.",
  },
  {
    icon: aiIcon,
    title: "AiNow - Artificial Intelligence",
    description:
      "Transforming business data into insights through AI-powered solutions and analytics platforms, helping organizations make smarter, faster and more strategic decisions.",
  },
  {
    icon: cloudIcon,
    title: "Cloud Infrastructure and Solutions",
    description:
      "Providing scalable cloud solutions built on AWS, Azure, Google and private environments to enable agility, cost efficiency and secure digital transformation.",
  },
  {
    icon: corporateIcon,
    title: "Corporate Training & Development",
    description:
      "Equipping professionals and organizations with hands-on SAP, cloud and data analytics programs designed to strengthen skills and drive business growth.",
  },
  {
    icon: educationIcon,
    title: "MAX EdTech",
    description:
      "A strategy practice helping universities strengthen governance, academic quality, financial sustainability and graduate employability through measurable transformation.",
  },
];

export default function Expertise() {
  return (
    <section className="expertise" id="expertise">
      <div className="section-heading">
        <span className="eyebrow">WHAT WE DO</span>
        <h2>Our Expertise</h2>
        <p>
          Delivering intelligent, future-ready solutions that keep businesses
          ahead of the curve.
        </p>
      </div>
      <div className="expertise-card-container">
        {expertiseItems.map((item, index) => (
          <article
            className="expertise-card reveal-card"
            style={{ "--delay": `${index * 90}ms` }}
            key={item.title}
          >
            <div className="expertise-icon">
              <img src={item.icon} alt="" />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <a href="#contact" aria-label={`Learn more about ${item.title}`}>
              Explore solution
            </a>
          </article>
        ))}
      </div>
    </section>
  );
}
