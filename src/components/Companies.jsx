import "./Companies.css";

function Companies() {
  const companies = [
    { name: "Google", className: "google" },
    { name: "f", className: "facebook" },
    { name: "amazon.com", className: "amazon" },
    { name: "Apple", className: "apple" },
    { name: "NETFLIX", className: "netflix" },
    { name: "Cisco", className: "cisco" },
    { name: "PayPal", className: "paypal" },
    { name: "ORACLE", className: "oracle" },
    { name: "Microsoft", className: "microsoft" },
    { name: "Meta", className: "meta" },
    { name: "Adobe", className: "adobe" },
    { name: "IBM", className: "ibm" },
  ];

  return (
    <section className="companies-section" id="companies">
      <div className="companies-content">

        <h2>
          Get All Premium Questions Asked In <span>FAANG</span>
          <br />
          Companies
        </h2>

        <div className="companies-marquee">
          <div className="companies-track">

            {/* First set */}
            <div className="companies-group">
              {companies.map((company, index) => (
                <div
                  className={`company-logo ${company.className}`}
                  key={`first-${index}`}
                >
                  {company.name}
                </div>
              ))}
            </div>

            {/* Duplicate set for continuous marquee */}
            <div className="companies-group">
              {companies.map((company, index) => (
                <div
                  className={`company-logo ${company.className}`}
                  key={`second-${index}`}
                >
                  {company.name}
                </div>
              ))}
            </div>

          </div>
        </div>

        <button type="button" className="companies-button">
          Go Ahead
        </button>

      </div>
    </section>
  );
}

export default Companies;