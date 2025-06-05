/* eslint-disable no-unused-vars */
import { useRef, useState, useEffect } from "react";
import { Row, Col } from "antd";
import {
  Clock,
  ShieldCheck,
  Gauge,
  CheckCircle,
  UserCheck,
  TrendingUp,
} from "lucide-react";
import { motion, useInView } from "framer-motion";
import CountUp from "react-countup";
import { useTranslation } from "react-i18next";
import "../styles/Benefits.css";

const Benefits = () => {
  const { t } = useTranslation();
  const benefitRef = useRef(null);
  const benefitInView = useInView(benefitRef, { once: true, amount: 0.2 });

  const impactRef = useRef(null);
  const impactInView = useInView(impactRef, { amount: 0.4 });

  const [countTrigger, setCountTrigger] = useState(false);
  useEffect(() => {
    if (impactInView) {
      setCountTrigger((prev) => !prev);
    }
  }, [impactInView]);

  const benefitsData = [
    {
      title: t("benefits.efficiency.title"),
      description: t("benefits.efficiency.description"),
      icon: <Clock className="benefit-icon" />,
    },
    {
      title: t("benefits.accuracy.title"),
      description: t("benefits.accuracy.description"),
      icon: <CheckCircle className="benefit-icon" />,
    },
    {
      title: t("benefits.speed.title"),
      description: t("benefits.speed.description"),
      icon: <Gauge className="benefit-icon" />,
    },
    {
      title: t("benefits.compliance.title"),
      description: t("benefits.compliance.description"),
      icon: <ShieldCheck className="benefit-icon" />,
    },
    {
      title: t("benefits.customer.title"),
      description: t("benefits.customer.description"),
      icon: <UserCheck className="benefit-icon" />,
    },
  ];

  const impactData = [
    {
      value: 40,
      suffix: "%",
      description: t("benefits.impact.reductionTime"),
      icon: <TrendingUp className="benefit-icon" />,
    },
    {
      value: 60,
      suffix: "%",
      description: t("benefits.impact.decreaseErrors"),
      icon: <TrendingUp className="benefit-icon" />,
    },
    {
      value: 90,
      suffix: "%",
      description: t("benefits.impact.complianceReady"),
      icon: <TrendingUp className="benefit-icon" />,
    },
  ];

  const fancyVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.95 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.15,
        duration: 0.8,
        ease: "easeOut",
      },
    }),
  };

  return (
    <div className="benefits-section">
      <h2 className="benefits-title">{t("benefits.title")}</h2>
      <Row gutter={[32, 32]} className="benefits-row" ref={benefitRef}>
        {benefitsData.map((item, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <motion.div
              className="h-full flex"
              custom={index}
              initial="hidden"
              animate={benefitInView ? "visible" : "hidden"}
              variants={fancyVariants}
            >
              <div className="benefit-card bg-blue-100/10 rounded backdrop-blur-md h-full w-full flex flex-col justify-between">
                <h3 className="benefit-heading flex items-center gap-2">
                  {item.icon}
                  {item.title}
                </h3>
                <p className="benefit-text">{item.description}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>

      <h2 className="benefits-title">{t("benefits.impactTitle")}</h2>
      <Row gutter={[32, 32]} className="benefits-row" ref={impactRef}>
        {impactData.map((item, index) => (
          <Col xs={24} md={12} lg={8} key={index}>
            <motion.div
              className="h-full flex"
              custom={index}
              initial="hidden"
              animate={impactInView ? "visible" : "hidden"}
              variants={fancyVariants}
            >
              <div className="benefit-card bg-blue-100/10 rounded backdrop-blur-md h-full w-full flex flex-col justify-between">
                <h3 className="benefit-heading text-center flex justify-center items-center gap-2 text-3xl font-bold">
                  {item.icon}
                  {impactInView && (
                    <span className="inline-block min-w-[4ch] text-right">
                      <CountUp
                        key={countTrigger}
                        end={item.value}
                        duration={2.5}
                        suffix={item.suffix}
                      />
                    </span>
                  )}
                </h3>
                <p className="benefit-text text-center">{item.description}</p>
              </div>
            </motion.div>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Benefits;
