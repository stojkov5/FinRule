/* eslint-disable no-unused-vars */
import React from "react";
import { Row, Col, message } from "antd";
import { Formik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";
import { User, Mail, Building2, Briefcase, MessageSquare } from "lucide-react";
import { useTranslation } from "react-i18next";
import "../styles/Contact.css";

const ContactUs = () => {
  const { t } = useTranslation();

  const ContactSchema = Yup.object().shape({
    fullName: Yup.string().required(t("form.errors.fullName")),
    email: Yup.string()
      .email(t("form.errors.invalidEmail"))
      .required(t("form.errors.email")),
    organization: Yup.string(t("form.errors.organization")),
    role: Yup.string(t("form.errors.role")),
    message: Yup.string(t("form.errors.message")),
  });

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6, ease: "easeOut" },
    }),
  };

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Submitted:", values);
    message.success(t("form.successMessage"));
    resetForm();
  };

  return (
    <section className="w-full pt-30 montserrat-100">
      <Row justify="center">
        <Col span={20}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={0}
            className="p-8 md:p-10 bg-white/5 rounded-xl shadow-2xl backdrop-blur-md"
          >
            <motion.h2
              className="contact-title text-white text-center mb-10"
              variants={fadeUp}
              custom={0}
            >
              {t("form.title")}
            </motion.h2>

            <Row gutter={[32, 32]}>
              <Col xs={24} md={12} className="order-2 md:order-1">
                <Formik
                  initialValues={{
                    fullName: "",
                    email: "",
                    organization: "",
                    role: "",
                    message: "",
                  }}
                  validationSchema={ContactSchema}
                  onSubmit={handleSubmit}
                >
                  {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                  }) => (
                    <motion.form
                      onSubmit={handleSubmit}
                      className="space-y-5"
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true, amount: 0.2 }}
                    >
                      {[
                        {
                          label: t("form.labels.fullName"),
                          name: "fullName",
                          type: "text",
                          icon: User,
                        },
                        {
                          label: t("form.labels.email"),
                          name: "email",
                          type: "email",
                          icon: Mail,
                        },
                        {
                          label: t("form.labels.organization"),
                          name: "organization",
                          type: "text",
                          icon: Building2,
                        },
                        {
                          label: t("form.labels.role"),
                          name: "role",
                          type: "text",
                          icon: Briefcase,
                        },
                      ].map((field, i) => (
                        <motion.div
                          key={field.name}
                          variants={fadeUp}
                          custom={i + 1}
                        >
                          <label className="contact-label mb-1 block">
                            {field.label}
                          </label>
                          <div className="relative">
                            <field.icon className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60 w-5 h-5" />
                            <input
                              type={field.type}
                              name={field.name}
                              onChange={handleChange}
                              onBlur={handleBlur}
                              value={values[field.name]}
                              className="form-input pl-10 bg-white/10 text-white placeholder-white/60 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                          </div>
                          {touched[field.name] && errors[field.name] && (
                            <div className="form-error">
                              {errors[field.name]}
                            </div>
                          )}
                        </motion.div>
                      ))}

                      <motion.div variants={fadeUp} custom={5}>
                        <label className="contact-label mb-1 block">
                          {t("form.labels.message")}
                        </label>
                        <div className="relative">
                          <MessageSquare className="absolute left-3 top-3 text-white/60 w-5 h-5" />
                          <textarea
                            name="message"
                            rows="4"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.message}
                            className="form-input pl-10 bg-white/10 text-white placeholder-white/60 border-white/20 focus:outline-none focus:ring-2 focus:ring-blue-400"
                          />
                        </div>
                        {touched.message && errors.message && (
                          <div className="form-error">{errors.message}</div>
                        )}
                      </motion.div>

                      <motion.div variants={fadeUp} custom={6}>
                        <button
                          type="submit"
                          className="form-button w-full rounded-full px-6 py-3"
                        >
                          {t("form.submitButton")}
                        </button>
                      </motion.div>
                    </motion.form>
                  )}
                </Formik>
              </Col>

              <Col xs={24} md={12} className="order-1 md:order-2">
                <motion.div variants={fadeUp} custom={7}>
                  <p className="contact-paragraph text-white/80 mb-6 leading-relaxed">
                    {t("form.description")}
                  </p>
                  <div className="text-white/80 contact-paragraph space-y-2">
                    <p>
                      <strong>{t("form.contactDetailsTitle")}</strong>
                    </p>
                    <p>
                      {t("form.emailLabel")}:{" "}
                      <a href="#" className="underline">
                        info@startfinno.com
                      </a>
                    </p>
                    <p>
                      {t("form.phoneLabel")}:{" "}
                      <a href="#" className="underline">
                        708-240-1738
                      </a>
                    </p>
                  </div>
                </motion.div>
              </Col>
            </Row>

            <motion.p
              className="contact-footer text-center text-white/80 mt-12"
              variants={fadeUp}
              custom={8}
            >
              {t("form.contactFooter")}
            </motion.p>
          </motion.div>
        </Col>
      </Row>
    </section>
  );
};

export default ContactUs;
