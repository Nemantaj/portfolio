import {
  Modal,
  Text,
  Input,
  Textarea,
  Button,
  Divider,
  Loading,
} from "@nextui-org/react";
import { motion } from "framer-motion";
import { Fragment, useState, useEffect } from "react";
import useInput from "../../hooks/useInput";
import emailjs from "@emailjs/browser";

import { RiCloseFill } from "react-icons/ri";
import { TbMail, TbBook, TbSend, TbCheck } from "react-icons/tb";

import "./EmailModal.css";

const MotionText = motion(Text);
const MotionButton = motion(Button);
const MotionInput = motion(Input);
const MotionTextarea = motion(Textarea);

const EmailModal = (props) => {
  const [errorState, setErrorState] = useState({
    isError: false,
    errorMsg: "",
  });
  const [loading, setLoading] = useState(false);
  const [btnText, setBtnText] = useState("Send");

  const staggerInput = {
    hidden: { opacity: 0 },
    show: {
      scale: 1,
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
        duration: 1,
      },
    },
  };

  const itemA = {
    hidden: { scale: 0.7, opacity: 0 },
    show: { scale: 1, opacity: 1 },
  };

  useEffect(() => {
    setBtnText("Send");
  }, []);

  const {
    inputValue: emailValue,
    error: emailError,
    isValid: emailValid,
    inputHandler: emailHandler,
    blurHandler: emailBlur,
    clearInput: emailClear,
  } = useInput((value) => value.includes("@") && value.length !== 0);

  const {
    inputValue: subjectValue,
    error: subjectError,
    isValid: subjectValid,
    inputHandler: subjectHandler,
    blurHandler: subjectBlur,
    clearInput: subjectClear,
  } = useInput((value) => value.length !== 0 && value.length < 250);

  const {
    inputValue: composeValue,
    error: composeError,
    isValid: composeValid,
    inputHandler: composeHandler,
    blurHandler: composeBlur,
    clearInput: composeClear,
  } = useInput((value) => value.length !== 0);

  const submitHandler = (event) => {
    event.preventDefault();

    if (!emailValid && !subjectValid && !composeValid) {
      return setErrorState({
        isError: true,
        errorMsg: "Please provide all the required fields to send an email!",
      });
    }

    setLoading(true);
    emailjs.send(
      "service_kmthm76",
      "template_xgr49qs",
      {
        from_email: emailValue,
        to_name: "Nemantaj",
        message: composeValue,
        from_name: emailValue,
        subject: subjectValue,
      },
      "Ukwjwlf8nRkrE2GNK"
    );
    setBtnText("Email Sent");
    setLoading(false);
    emailClear();
    subjectClear();
    composeClear();
    props.onClose();
  };

  return (
    <Fragment>
      <Modal
        fullScreen
        open={props.visible}
        onClose={props.onClose}
        aria-label="Contact via Email Menu"
      >
        <Modal.Header className="email_header">
          <MotionText
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { scale: 0.7, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", duration: 1 },
              },
            }}
            h3
            css={{ fontFamily: "Neon2" }}
          >
            Get in touch via email
          </MotionText>
          <MotionButton
            auto
            flat
            size="sm"
            rounded
            color="error"
            css={{ fontFamily: "Neon" }}
            onClick={props.onClose}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            variants={{
              hidden: { scale: 0.7, opacity: 0 },
              visible: {
                scale: 1,
                opacity: 1,
                transition: { type: "spring", duration: 1 },
              },
            }}
            whileHover={{
              scale: 1.1,
              transition: { duration: 0.1, type: "spring" },
            }}
            whileTap={{
              scale: 0.9,
              transition: { duration: 0.1, type: "spring" },
            }}
          >
            <RiCloseFill />
          </MotionButton>
        </Modal.Header>
        <Divider />
        <Modal.Body className="email_body">
          <motion.form
            className="email_form"
            variants={staggerInput}
            initial="hidden"
            animate="show"
            onSubmit={submitHandler}
          >
            <MotionInput
              type="text"
              required
              label={
                emailError ? "Please enter a valid email address!" : "Email"
              }
              contentLeft={<TbMail />}
              placeholder="Email address"
              bordered
              clearable
              css={{ fontFamily: "Neon3", w: "100%", mw: "550px" }}
              aria-label="Enter your email address here!"
              onChange={emailHandler}
              onBlur={emailBlur}
              value={emailValue}
              color={emailError ? "error" : "default"}
              variants={itemA}
            />
            <MotionInput
              type="text"
              required
              label={
                subjectError
                  ? "Please enter a subject to send an email!"
                  : "Subject"
              }
              contentLeft={<TbBook />}
              placeholder="Subject"
              bordered
              clearable
              css={{ fontFamily: "Neon3", w: "100%", mw: "550px" }}
              aria-label="Subject"
              onChange={subjectHandler}
              onBlur={subjectBlur}
              value={subjectValue}
              color={subjectError ? "error" : "default"}
              variants={itemA}
            />
            <MotionTextarea
              required
              label={
                composeError
                  ? "The email body is empty, write something to send an email!"
                  : "Compose email"
              }
              placeholder="Compose email"
              bordered
              clearable
              css={{ fontFamily: "Neon3", w: "100%", mw: "550px" }}
              aria-label="Subject"
              onChange={composeHandler}
              onBlur={composeBlur}
              value={composeValue}
              color={composeError ? "error" : "default"}
              variants={itemA}
            />
            {errorState.isError && (
              <MotionText
                color="$red600"
                css={{
                  py: "5px",
                  px: "10px",
                  bgColor: "$red100",
                  br: "20px",
                  fontFamily: "Neon3",
                  alignSelf: "end",
                }}
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring" }}
              >
                {errorState.errorMsg}
              </MotionText>
            )}
            <MotionButton
              type="submit"
              auto
              rounded
              color="success"
              css={{ fontFamily: "Neon", alignSelf: "end" }}
              flat
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.1, type: "spring" },
              }}
              whileTap={{
                scale: 0.9,
                transition: { duration: 0.1, type: "spring" },
              }}
              disabled={
                emailValid && subjectValid && composeValid ? false : true
              }
              variants={itemA}
            >
              {loading && <Loading type="spinner" />}
              {!loading && btnText === "Send" && <TbSend />}
              {!loading && btnText === "Send" && "Send"}
              {!loading && btnText === "Email Sent" && <TbCheck />}
              {!loading && btnText === "Email Sent" && "Email Sent"}
            </MotionButton>
          </motion.form>
        </Modal.Body>
      </Modal>
    </Fragment>
  );
};

export default EmailModal;
