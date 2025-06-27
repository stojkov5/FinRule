/* eslint-disable no-unused-vars */
import { Row, Col } from "antd";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import {
  Home,
  Info,
  ShoppingBag,
  Layers,
  Mail,
  Shield,
  FileText,
} from "lucide-react";
import Logo from "/FinRule.png";
import "../styles/Footer.css";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Footer = () => {
  const { t } = useTranslation();

  return (
    <>
      {/* Main Footer Section with Background */}
      <motion.footer
        initial="hidden"
        whileInView="visible"
        variants={container}
        viewport={{ once: false, amount: 0.2 }}
        className="relative text-white mt-10 overflow-hidden"
      >
        {/* Background logo */}
        <div className="footer-bg-logo">
          <img src={Logo} alt="FinRule Logo" />
        </div>

        <Row justify="center" className="w-full  relative z-10">
          <Col
            md={20}
            xs={22}
            className="bg-blue-100/10 p-6 md:p-8 rounded-2xl backdrop-blur-md relative"
          >
            <Row
              gutter={[16, 16]}
              justify="space-between"
              align="middle"
              className="text-center md:text-left"
            >
              <Col span={24}>
                <motion.h4
                  className="font-semibold footer-links text-center"
                  variants={fadeIn}
                >
                  {t("footer.quick")}
                </motion.h4>
              </Col>
              <Col span={24}>
                <ul className="flex gap-3 text-sm footer-links text-center justify-center items-center flex-wrap">
                  <motion.li variants={fadeIn}>
                    <NavLink to="/" className="footer-link">
                      <Home className="inline w-4 h-4 mr-2" />
                      {t("footer.home")}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <NavLink to="/about" className="footer-link">
                      <Info className="inline w-4 h-4 mr-2" />
                      {t("footer.about")}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <NavLink to="/product" className="footer-link">
                      <ShoppingBag className="inline w-4 h-4 mr-2" />
                      {t("footer.product")}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <NavLink to="/solutions" className="footer-link">
                      <Layers className="inline w-4 h-4 mr-2" />
                      {t("footer.solutions")}
                    </NavLink>
                  </motion.li>
                  <motion.li variants={fadeIn}>
                    <NavLink to="/contact" className="footer-link">
                      <Mail className="inline w-4 h-4 mr-2" />
                      {t("footer.contact")}
                    </NavLink>
                  </motion.li>
                </ul>
              </Col>

              {/* Legal Note */}
              <Col span={24} className="text-center text-md text-gray-400">
                FinRule M7 LLC
              </Col>
            </Row>
          </Col>
        </Row>
      </motion.footer>

      {/* Footer Bottom (separate from main background) */}
      <Row justify="center" className=" ">
        <Col span={20}>
          <Row justify="center" align="middle">
            <Col xs={24} md={12}>
              <div className="hidden md:flex items-center justify-start mb-2 md:mb-0">
                <img
                  src="/FinRule.png"
                  className="w-20"
                  alt="FinRule Logo Mini"
                />
              </div>
            </Col>
            <Col xs={24} md={12}>
              <ul className="flex gap-3 justify-end items-center text-sm footer-links text-end">
                <li>
                  <NavLink to="/privacy" className="footer-link">
                    <Shield className="inline w-4 h-4 mr-2" />
                    {t("footer.privacy")}
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/terms" className="footer-link">
                    <FileText className="inline w-4 h-4 mr-2" />
                    {t("footer.terms")}
                  </NavLink>
                </li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
};

export default Footer;
