import { useState } from "react";
import { Alert, Snackbar } from "@mui/material";
import { Footer, Tooltip } from "./FooterSection.style";
import Image from "next/image";

const FooterSection = () => {
  const [open, setOpen] = useState(false);
  const vertical = "bottom";
  const horizontal = "center";

  const handleClick = () => {
    setOpen(true);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setOpen(false);
  };

  const copyEmail = () => {
    navigator.clipboard.writeText("gs130899@gmail.com");
    handleClick();
  };

  return (
    <Footer id="contact">
      <div className="socialIcons">
        <a href="https://github.com/singhlify" target="_blank" rel="noreferrer">
          <i className="fab fa-github"></i>
        </a>
        <a
          href="https://www.linkedin.com/in/singhlify/"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-linkedin"></i>
        </a>
        <a
          href="https://twitter.com/singhlify"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-twitter"></i>
        </a>

        <Tooltip title="Click to Copy" placement="top">
          <i onClick={copyEmail} className="fas fa-envelope"></i>
        </Tooltip>

        <a
          href="https://dribbble.com/Singhlify"
          target="_blank"
          rel="noreferrer"
        >
          <i className="fab fa-dribbble"></i>
        </a>
      </div>

      <a
        href="https://www.buymeacoffee.com/Singhlify"
        target="_blank"
        rel="noreferrer"
        style={{
          display: "flex",
          margin: "2rem auto",
          width: "fit-content",
          height: "fit-content",
        }}
      >
        <Image
          src={`https://ik.imagekit.io/${process.env.NEXT_PUBLIC_IMAGEKIT_ID}/bmc-button.png?latest`}
          alt="Buy Me A Coffee - Singhlify"
          width={217}
          height={60}
        />
      </a>

      <p>Handcrafted with ❤️</p>

      <p>
        A special thanks to
        <a href="https://www.figma.com/@tinjo" target="_blank" rel="noreferrer">
          <b> Tinjo Thomas </b>
        </a>
        for this awesome design
      </p>

      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        key={vertical + horizontal}
        open={open}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          className="snackbar__alert"
          onClose={handleClose}
          severity="success"
          sx={{ width: "100%" }}
        >
          Email copied to clipboard
        </Alert>
      </Snackbar>
    </Footer>
  );
};

export default FooterSection;
