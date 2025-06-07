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

// Framer Motion variants
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
    <motion.footer
      initial="hidden"
      whileInView="visible"
      variants={container}
      viewport={{ once: false, amount: 0.2 }}
      className="relative text-white mt-10 mb-10 overflow-hidden"
    >
      {/* Footer Container */}
      <Row justify="center" className="w-full px-4 ">
        <Col
          xs={24}
          md={20}
          className="bg-blue-100/10 p-4 rounded backdrop-blur-md  relative"
        >
          {/* Mobile background logo */}
          <div className="md:hidden absolute inset-0 z-[-1] opacity-50 flex items-center justify-center">
            <img src={Logo} alt="FinRule Logo" className="w-2/3" />
          </div>

          <Row
            gutter={[24, 24]}
            justify="space-between"
            align="middle"
            className="text-center md:text-left"
          >
            {/* Logo (desktop) */}
            <Col xs={24} md={6}>
              <div className="hidden md:flex flex-col items-center md:items-start">
                <img
                  src={Logo}
                  alt="FinRule Logo"
                  className="h-full mb-4 animate-pulse max-h-24"
                />
              </div>
            </Col>

            {/* Quick Links */}
            <Col xs={24} md={8}>
              <motion.h4
                className="font-semibold mb-2 footer-links text-center md:text-left"
                variants={fadeIn}
              >
                {t("footer.quick")}
              </motion.h4>
              <ul className="space-y-1 text-sm footer-links text-center md:text-left">
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

            {/* Legal */}
            <Col xs={24} md={8}>
              <motion.h4
                className="font-semibold mb-2 footer-links text-center md:text-left"
                variants={fadeIn}
              >
                {t("footer.legal")}
              </motion.h4>
              <ul className="space-y-1 text-sm footer-links text-center md:text-left">
                <motion.li variants={fadeIn}>
                  <NavLink to="/privacy" className="footer-link">
                    <Shield className="inline w-4 h-4 mr-2" />
                    {t("footer.privacy")}
                  </NavLink>
                </motion.li>
                <motion.li variants={fadeIn}>
                  <NavLink to="/terms" className="footer-link">
                    <FileText className="inline w-4 h-4 mr-2" />
                    {t("footer.terms")}
                  </NavLink>
                </motion.li>
              </ul>
            </Col>
          </Row>
        </Col>
      </Row>

      {/* Footer note */}
      <motion.div variants={fadeIn}>
        <Row justify="center" className="mt-5">
          <Col span={20} className="text-center text-md text-gray-500">
            FinRule M7 LLC
          </Col>
        </Row>
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
