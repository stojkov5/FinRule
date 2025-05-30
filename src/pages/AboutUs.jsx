import { Row, Col } from "antd";
import "../styles/About.css"; // Make sure to import your custom CSS
import { useTranslation } from "react-i18next";
const AboutUs = () => {
  const { t } = useTranslation();
  const sections = [
    {
      title: t("about.companyOverview.title"),
      content: t("about.companyOverview.content"),
    },
    {
      title: t("about.coreValues.title"),
      content: (
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>{t("about.coreValues.items.innovation")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.integrity")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.partnership")}</strong>
          </li>
          <li>
            <strong>{t("about.coreValues.items.scalability")}</strong>
          </li>
        </ul>
      ),
    },
    {
      title: t("about.ourJourney.title"),
      content: t("about.ourJourney.content"),
    },
    {
      title: t("about.leadershipTeam.title"),
      content: t("about.leadershipTeam.content"),
    },
  ];

  return (
    <Row className="text-white pt-30" justify="center">
      <Col span={20}>
        <h2 className="montserrat-600 text-center page-title">{t("about.title")}</h2>

        {sections.map((section, index) => (
          <Row
            key={index}
            gutter={[32, 32]}
            justify="space-between"
            align="middle"
            className="mb-10"
          >
            {index % 2 === 0 ? (
              <>
                <Col xs={24} md={16}>
                  <div className="about-section-box">
                    <h3 className="text-2xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <div className="text-base leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </Col>
                <Col xs={0} md={6}></Col> {/* Spacer */}
              </>
            ) : (
              <>
                <Col xs={0} md={6}></Col> {/* Spacer */}
                <Col xs={24} md={16}>
                  <div className="about-section-box">
                    <h3 className="text-2xl font-semibold mb-4">
                      {section.title}
                    </h3>
                    <div className="text-base leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </Col>
              </>
            )}
          </Row>
        ))}
      </Col>
    </Row>
  );
};

export default AboutUs;
