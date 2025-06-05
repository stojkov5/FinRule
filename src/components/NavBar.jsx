/* eslint-disable no-unused-vars */
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useTranslation } from "react-i18next";
import { Row, Col } from "antd";
import "../styles/Navbar.css";
// Animation Variants
const backdropVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      duration: 0.3,
      when: "afterChildren",
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -10 },
};

const Navbar = () => {
  const { t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  // Lock scroll when mobile menu is open
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", isOpen);
    return () => document.body.classList.remove("overflow-hidden");
  }, [isOpen]);

  return (
    <nav className=" absolute bg-transparent  w-full z-50">
      <Row justify={"center"} className="w-full">
        <Col span={20} className="w-full">
          <div className=" relative max-w-7xl m-auto flex items-center justify-between ">
            {/* Logo */}
            <NavLink className=" text-xl font-bold text-gray-800">
              <img src="./FinRule.png" alt="FinRule" className="h-30 object-contain" />
            </NavLink>

            {/* Desktop menu */}
            <div className="hidden lg:flex space-x-6 montserrat-100 ">
              <NavLink to="/" className="nav-link ">
                {t("nav.home")}
              </NavLink>
              <NavLink to="/about" className="nav-link">
                {t("nav.about")}
              </NavLink>
              <NavLink to="/contact" className="nav-link">
                {t("nav.contact")}
              </NavLink>
              <NavLink to="/product" className="nav-link">
                {t("nav.product")}
              </NavLink>
              <NavLink to="/solutions" className="nav-link">
                {t("nav.solutions")}
              </NavLink>
            </div>
            <div className="hidden lg:flex  items-center space-x-4">
              {/* Language Switcher */}
              <LanguageSwitcher />
            </div>

            {/* Mobile menu toggle */}
            <div className="lg:hidden flex items-center justify-end w-full">
              <button
                onClick={toggleMenu}
                className="text-white focus:outline-none"
              >
                {isOpen ? (
                  <motion.div
                    animate={{ rotate: 180 }}
                    transition={{ duration: 0.3 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    animate={{ rotate: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </button>
            </div>
          </div>

          {/* Backdrop + Fullscreen Mobile Menu */}
          <AnimatePresence>
            {isOpen && (
              <>
                {/* Dark semi-transparent background */}
                <motion.div
                  key="backdrop"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 0.5 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="fixed inset-0 bg-black z-30"
                  onClick={toggleMenu} // close when backdrop is clicked
                />

                {/* Fullscreen menu */}
                <motion.div
                  key="fullscreen-menu"
                  initial="closed"
                  animate="open"
                  exit="closed"
                  variants={backdropVariants}
                  className="fixed top-0 left-0 w-full h-full mobile-menu text-gray-700 lg:hidden z-40"
                >
                  {/* Close Button */}
                  <div className="flex justify-end p-4  ">
                    <button
                      onClick={toggleMenu}
                      className="text-white absolute top-12 right-12"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  {/* Navigation Links */}
                  <div className="flex flex-col items-center justify-center h-full space-y-6 text-xl">
                    {["/", "/about", "/contact", "/product", "/solutions"].map(
                      (path, idx) => (
                        <motion.div key={idx} variants={itemVariants}>
                          <NavLink
                            to={path}
                            onClick={toggleMenu}
                            className="nav-link montserrat-100"
                          >
                            {t(`nav.${path === "/" ? "home" : path.slice(1)}`)}
                          </NavLink>
                        </motion.div>
                      )
                    )}
                    <div className="flex items-center space-x-4">
                      {/* Language Switcher */}
                      <LanguageSwitcher />
                    </div>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </Col>
      </Row>
    </nav>
  );
};

export default Navbar;
