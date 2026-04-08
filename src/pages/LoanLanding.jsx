import React from "react";
import "../styles/LoanLanding.css";

const stats = [
  { value: "$11.5T", label: "Global lending market (2025)" },
  { value: "$2.4B", label: "LOS software market by 2027" },
  { value: "72%", label: "Banks lack modern loan software" },
  { value: "22%", label: "CAGR — digital lending software" },
];

const problems = [
  {
    title: "Manual & Fragmented",
    text: "Most banks still process loans on spreadsheets, email chains, and paper-based credit committees — slow, error-prone, and hard to scale.",
  },
  {
    title: "Legacy LOS Systems",
    text: "Traditional platforms can cost hundreds of thousands to deploy, take months to go live, and are often not built for fast-moving institutions.",
  },
  {
    title: "No Offline Support",
    text: "In markets with unstable connectivity, teams lose the ability to process loans during outages, hurting operations and customer trust.",
  },
  {
    title: "Integration Barriers",
    text: "Financial institutions need smooth connections to core banking systems, credit bureaus, and fraud services without expensive custom work.",
  },
  {
    title: "Compliance Gaps",
    text: "Audit trails, KYC workflows, and data residency rules are difficult to manage manually and expose institutions to risk.",
  },
  {
    title: "High Cost to Entry",
    text: "Smaller lenders and fintechs are often priced out of enterprise-grade origination systems, leaving a major underserved segment.",
  },
];

const solutions = [
  "Loan lifecycle management",
  "Configurable workflow engine",
  "Customer management",
  "Document management",
  "Ad-hoc reporting",
  "Integration layer",
  "Audit & compliance",
  "Offline PWA support",
];

const comparison = [
  {
    capability: "Full loan lifecycle management",
    finrule: "✓",
    lendsqr: "✓",
    ncino: "✓",
    finastra: "✓",
  },
  {
    capability: "Offline / PWA support",
    finrule: "✓",
    lendsqr: "✗",
    ncino: "✗",
    finastra: "✗",
  },
  {
    capability: "Collateral management module",
    finrule: "✓",
    lendsqr: "✗",
    ncino: "✓",
    finastra: "✓",
  },
  {
    capability: "Enterprise SSO (ADFS/Okta/SAML)",
    finrule: "✓",
    lendsqr: "✗",
    ncino: "✓",
    finastra: "✓",
  },
  {
    capability: "Document template auto-generation",
    finrule: "✓",
    lendsqr: "Limited",
    ncino: "✓",
    finastra: "Limited",
  },
  {
    capability: "Sub-$500/mo entry package",
    finrule: "✓",
    lendsqr: "✓",
    ncino: "✗",
    finastra: "✗",
  },
  {
    capability: "Core banking API + batch integration",
    finrule: "✓",
    lendsqr: "Enterprise",
    ncino: "✓",
    finastra: "✓",
  },
  {
    capability: "AI-based product recommendation",
    finrule: "✓",
    lendsqr: "✗",
    ncino: "Limited",
    finastra: "✗",
  },
  {
    capability: "6-week implementation",
    finrule: "✓",
    lendsqr: "✓",
    ncino: "✗",
    finastra: "✗",
  },
  {
    capability: "Regulatory compliance templates",
    finrule: "✓",
    lendsqr: "Limited",
    ncino: "Limited",
    finastra: "Limited",
  },
];

const packages = [
  {
    name: "Solo",
    audience: "1–2 Users",
    price: "$99–$200",
    period: "/mo",
    featured: false,
    features: [
      "Loan origination (up to 50 loans/mo)",
      "Basic workflow engine",
      "Document upload & storage",
      "Standard reports",
      "MFA authentication",
      "Email support",
      "Web access only",
    ],
  },
  {
    name: "Starter",
    audience: "MFBs & Fintechs",
    price: "$499",
    period: "/mo",
    featured: true,
    features: [
      "All Solo features",
      "Unlimited loan volumes",
      "Offline PWA support",
      "Configurable workflows",
      "Document template engine",
      "Up to 5 users",
      "Priority email support",
    ],
  },
  {
    name: "Growth",
    audience: "Commercial Banks",
    price: "$1,199",
    period: "/mo",
    featured: false,
    features: [
      "All Starter features",
      "Core banking API integration",
      "Enterprise SSO",
      "Collateral management",
      "Advanced analytics",
      "Up to 30 users",
      "SLA-backed support",
    ],
  },
  {
    name: "Enterprise",
    audience: "Tier-1 Banks & Groups",
    price: "Custom",
    period: "",
    featured: false,
    features: [
      "All Growth features",
      "Single-tenant environment",
      "Custom data model",
      "Dedicated implementation",
      "Full API access suite",
      "Unlimited users",
      "Dedicated CSM",
    ],
  },
];

const security = [
  {
    title: "Identity & Access",
    items: [
      "MFA authentication standard",
      "Enterprise SSO",
      "Role-based access control (RBAC)",
      "Bank-managed VPN network integration",
    ],
  },
  {
    title: "Data Security",
    items: [
      "Azure Key Vault for secrets & certificates",
      "Encryption in transit and at rest",
      "Point-in-time data recovery",
      "Automated backup & restore",
    ],
  },
  {
    title: "Audit & Compliance",
    items: [
      "Complete user action audit trail",
      "Global regulatory reporting support",
      "Document versioning & traceability",
      "Proactive monitoring & alerting",
    ],
  },
];

const journey = [
  {
    step: "01",
    title: "Discovery",
    weeks: "Week 1–2",
    items: [
      "Requirements workshops",
      "Process mapping",
      "Integration scoping",
      "Onboarding plan",
    ],
  },
  {
    step: "02",
    title: "Setup",
    weeks: "Week 2–4",
    items: [
      "Environment provisioning",
      "Identity provider config",
      "VPN connectivity",
      "Data migration",
    ],
  },
  {
    step: "03",
    title: "Configure",
    weeks: "Week 3–6",
    items: [
      "Loan product setup",
      "Workflow config",
      "Document templates",
      "User roles & permissions",
    ],
  },
  {
    step: "04",
    title: "Go Live",
    weeks: "Week 6–8",
    items: ["UAT & training", "Parallel run", "Production cutover", "Hypercare support"],
  },
];

const whyFinrule = [
  { value: "50%+", label: "Reduction in loan processing time" },
  { value: "6 Weeks", label: "Average time to go live" },
  { value: "85%+", label: "SaaS gross margin for platform delivery" },
  { value: "190+", label: "Countries supported globally" },
];

const differentiators = [
  "Fast 6-week implementation",
  "Native offline-capable PWA",
  "Azure-backed enterprise availability",
  "No-code workflow and product setup",
  "Built for global financial institutions",
];

const LoanLanding = () => {
  return (
    <div className="loan-landing-page">
      <section className="loan-hero">
        <div className="loan-hero-bg"></div>

        <div className="loan-container">
          <div className="loan-hero-inner">
            <div className="loan-badge">Global Competitive Offer</div>

            <h1>
              Loan Origination Platform
              <span> for Financial Institutions Worldwide</span>
            </h1>

            <p className="loan-hero-text">
              Enterprise-grade, global-ready, and offline-capable loan origination
              infrastructure built for banks, microfinance institutions, and fintechs.
            </p>

            <div className="loan-hero-highlights">
              <div className="loan-pill">6 Wks Implementation</div>
              <div className="loan-pill">99.99% Azure Data SLA</div>
              <div className="loan-pill">PWA Offline-Capable</div>
            </div>

            <div className="loan-hero-actions">
              <a href="#pricing" className="loan-btn loan-btn-primary">
                View Pricing
              </a>
              <a href="#contact" className="loan-btn loan-btn-secondary">
                Talk to Sales
              </a>
            </div>
          </div>

          <div className="loan-stats-grid">
            {stats.map((stat) => (
              <div className="loan-stat-card" key={stat.label}>
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>The Global Lending Opportunity</span>
            <h2>Modern lending infrastructure is no longer optional</h2>
            <p>
              From microfinance banks in Lagos to commercial banks in London,
              financial institutions need a scalable, compliant, and modern loan
              origination system that actually works in the real world.
            </p>
          </div>
        </div>
      </section>

      <section className="loan-section loan-section-alt">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>The Problem</span>
            <h2>What financial institutions are dealing with today</h2>
          </div>

          <div className="loan-problem-grid">
            {problems.map((item) => (
              <div className="loan-problem-card" key={item.title}>
                <div className="loan-card-topline"></div>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>The FinRule Solution</span>
            <h2>One platform covering the complete loan lifecycle</h2>
            <p>
              FinRule gives institutions a single system for intake, underwriting,
              approvals, documentation, reporting, integrations, and compliance.
            </p>
          </div>

          <div className="loan-solution-grid">
            {solutions.map((item) => (
              <div className="loan-solution-card" key={item}>
                <div className="loan-solution-icon">✓</div>
                <h3>{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-section loan-section-alt">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>Competitive Positioning</span>
            <h2>FinRule vs the competition</h2>
          </div>

          <div className="loan-table-wrap">
            <table className="loan-compare-table">
              <thead>
                <tr>
                  <th>Capability</th>
                  <th>FinRule</th>
                  <th>Lendsqr</th>
                  <th>nCino</th>
                  <th>Finastra</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.capability}>
                    <td>{row.capability}</td>
                    <td className="loan-yes">{row.finrule}</td>
                    <td>{row.lendsqr}</td>
                    <td>{row.ncino}</td>
                    <td>{row.finastra}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="loan-table-note">
            ✓ = Full native support &nbsp; • &nbsp; ✗ = Not available &nbsp; •
            &nbsp; Limited / Enterprise = restricted availability
          </p>
        </div>
      </section>

      <section className="loan-section" id="pricing">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>Pricing Packages</span>
            <h2>Transparent pricing for every institution size</h2>
            <p>
              From solo lenders to global bank groups, choose the package that
              matches your scale and operational needs.
            </p>
          </div>

          <div className="loan-pricing-grid">
            {packages.map((pkg) => (
              <div
                className={`loan-price-card ${pkg.featured ? "featured" : ""}`}
                key={pkg.name}
              >
                {pkg.featured && <div className="loan-featured-tag">Most Popular</div>}

                <div className="loan-price-head">
                  <span className="loan-package-audience">{pkg.audience}</span>
                  <h3>{pkg.name}</h3>

                  <div className="loan-price-box">
                    <strong>{pkg.price}</strong>
                    <span>{pkg.period}</span>
                  </div>
                </div>

                <ul className="loan-feature-list">
                  {pkg.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <a href="#contact" className="loan-btn loan-btn-card">
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-section loan-section-alt">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>Security & Compliance</span>
            <h2>Enterprise-grade controls built in</h2>
          </div>

          <div className="loan-security-grid">
            {security.map((block) => (
              <div className="loan-security-card" key={block.title}>
                <h3>{block.title}</h3>
                <ul>
                  {block.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="loan-sla-banner">
            Azure SLA • App Service 99.95% • PostgreSQL HA 99.99% • Blob Storage
            99.9–99.99% • GDPR & SOC2 Ready
          </div>
        </div>
      </section>

      <section className="loan-section">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>Implementation Journey</span>
            <h2>From signed contract to live operations in weeks</h2>
          </div>

          <div className="loan-journey-grid">
            {journey.map((item) => (
              <div className="loan-journey-card" key={item.step}>
                <div className="loan-step">{item.step}</div>
                <span className="loan-weeks">{item.weeks}</span>
                <h3>{item.title}</h3>
                <ul>
                  {item.items.map((subItem) => (
                    <li key={subItem}>{subItem}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-section loan-section-alt">
        <div className="loan-container">
          <div className="loan-section-heading">
            <span>Why FinRule</span>
            <h2>Built to move faster without sacrificing enterprise strength</h2>
          </div>

          <div className="loan-why-grid">
            {whyFinrule.map((item) => (
              <div className="loan-why-card" key={item.label}>
                <h3>{item.value}</h3>
                <p>{item.label}</p>
              </div>
            ))}
          </div>

          <div className="loan-diff-box">
            {differentiators.map((item) => (
              <div className="loan-diff-item" key={item}>
                <span>✓</span>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="loan-cta-section" id="contact">
        <div className="loan-container">
          <div className="loan-cta-card">
            <span className="loan-cta-kicker">Ready to Transform Your Lending Operations?</span>
            <h2>
              A global-ready loan origination platform built for modern financial
              institutions
            </h2>

            <div className="loan-cta-points">
              <p>Enterprise-grade platform for institutional lending worldwide</p>
              <p>The only LOS with native offline PWA support for unstable connectivity environments</p>
              <p>Azure-backed availability with compliance-ready architecture</p>
              <p>Packages starting from $99/mo up to enterprise custom deployment</p>
            </div>

            <div className="loan-cta-actions">
              <a href="mailto:finance@finrule.io" className="loan-btn loan-btn-primary">
                finance@finrule.io
              </a>
              <a
                href="https://finrule.io/"
                target="_blank"
                rel="noreferrer"
                className="loan-btn loan-btn-secondary"
              >
                Visit finrule.io
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoanLanding;