import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <Stack spacing={2}>
        <Stack
          direction="row"
          justifyContent="space-between"
          flexWrap="wrap"
          gap={2}
        >
          <h6>Philippines</h6>
          <h6 className="advance-search-nav">
            <Link to="/advanced_search">Advanced Search</Link>
          </h6>
        </Stack>
        <hr className="separator-hr" />
        <Stack
          direction="row"
          justifyContent="space-between"
          className="footer-nav-info"
          flexWrap="wrap"
          gap={5}
        >
          <Stack direction="row" flexWrap="wrap" gap={2}>
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Work</p>
          </Stack>
          <Stack direction="row" spacing={3}>
            <p>Privacy</p>
            <p>Terms</p>
            <p>Settings</p>
          </Stack>
        </Stack>
      </Stack>
    </footer>
  );
};

export default Footer;
