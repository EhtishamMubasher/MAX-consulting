import logo from "../images/logo-bg-less.png";
import "../styles/navbar.css";

export default function NavBar() {
  return (
    <header className="navbar">
      <div className="logo">
        <a href="#">
          <img src={logo} alt="MAX" />
        </a>
      </div>
      <nav aria-label="Primary Navigation">
        <ul className="nav-links">
          <li>
            <a href="#">About</a>
          </li>
          <li className="has-dropdown">
            <a href="#">Services</a>

            <div className="mega-menu">
              <div className="menu-column">
                <div className="menu-group">
                  <a href="#" className="menu-title">
                    SAP ERP
                  </a>
                  <ul>
                    <li>
                      <a href="#">SAP GROW</a>
                    </li>
                    <li>
                      <a href="#">RISE with SAP</a>
                    </li>
                    <li>
                      <a href="#">SAP CX &amp; CRM(Hybris)</a>
                    </li>
                    <li>
                      <a href="#">SAP Analytics Cloud</a>
                    </li>
                    <li>
                      <a href="#">SAP Support</a>
                    </li>
                    <li>
                      <a href="#">SAP Business Technology Platform</a>
                    </li>
                    <li>
                      <a href="#">AP Automation for SAP</a>
                    </li>
                    <li>
                      <a href="#">SAP S/4HANA</a>
                    </li>
                    <li>
                      <a href="#">SAP Ariba (Supply Chain Solution)</a>
                    </li>
                    <li>
                      <a href="#">SAP GRC &amp; Cyber Security</a>
                    </li>
                    <li>
                      <a href="#">SAP Training &amp; Certification</a>
                    </li>
                    <li>
                      <a href="#">SAP Upgrade</a>
                    </li>
                    <li>
                      <a href="#">SAP Datasphere</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu-column">
                <div className="menu-group">
                  <ul>
                    <li>
                      <a href="#">SAP SuccessFactors (HCM)</a>
                    </li>
                    <li>
                      <a href="#">SAP Business Planning &amp; Consolidation</a>
                    </li>
                    <li>
                      <a href="#">SAP Audit Management</a>
                    </li>
                    <li>
                      <a href="#">SAP Training and Certification Modules</a>
                    </li>
                    <li>
                      <a href="#">SAP for Higher Education</a>
                    </li>
                  </ul>
                </div>

                <div className="menu-group">
                  <a href="#" className="menu-title">
                    Oracle Fusion &amp; Cloud ERP
                  </a>
                </div>

                <div className="menu-group">
                  <a href="#" className="menu-title">
                    TMC Cloud
                  </a>
                  <ul>
                    <li>
                      <a href="#">Cloud Solutions</a>
                    </li>
                    <li>
                      <a href="#">Managed Cloud for SAP S/4HANA</a>
                    </li>
                    <li>
                      <a href="#">
                        Cloud Disaster Recovery as a Service (DRaaS)
                      </a>
                    </li>
                    <li>
                      <a href="#">Cloud Infrastructure as a Service (IaaS)</a>
                    </li>
                    <li>
                      <a href="#">Cloud Backup as a Service (BaaS)</a>
                    </li>
                    <li>
                      <a href="#">Cloud Platform as a Service (PaaS)</a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="menu-column">
                <div className="menu-group">
                  <a href="#" className="menu-title">
                    Data Analytics &amp; Integration and CRM
                  </a>
                  <ul>
                    <li>
                      <a href="#">Qlik</a>
                    </li>
                    <li>
                      <a href="#">Tableau</a>
                    </li>
                    <li>
                      <a href="#">Salesforce</a>
                    </li>
                  </ul>
                </div>

                <div className="menu-group">
                  <a href="#" className="menu-title">
                    Financial Solutions
                  </a>
                  <ul>
                    <li>
                      <a href="#">Banking</a>
                    </li>
                    <li>
                      <a href="#">Insurance</a>
                    </li>
                    <li>
                      <a href="#">AML Compliance</a>
                    </li>
                  </ul>
                </div>

                <div className="menu-group">
                  <a href="#" className="menu-title">
                    Blackboard
                  </a>
                </div>

                <div className="menu-group">
                  <a href="#" className="menu-title">
                    TMC EdTech
                  </a>
                </div>
              </div>
            </div>
          </li>

          <li>
            <a href="#">Clients</a>
          </li>
          <li>
            <a href="#">Career</a>
          </li>
          <li>
            <a href="#">News &amp; Blogs</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#" aria-label="Region or Language">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                aria-hidden="true"
              >
                <path d="M0 0h48v48H0z" fill="none" />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M24 2.5v43c-6.573 0-11.902-9.626-11.902-21.5S17.427 2.5 24 2.5S35.902 12.126 35.902 24S30.573 45.5 24 45.5M45.5 24h-43m40.12-10.75H5.38m37.24 21.5H5.38"
                />
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.5 24c0 11.874 9.626 21.5 21.5 21.5S45.5 35.874 45.5 24S35.874 2.5 24 2.5S2.5 12.126 2.5 24"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
