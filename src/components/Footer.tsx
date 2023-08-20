import { Stack } from "@mui/material";

const Footer = () => {
  return (
    <footer className="footer">
      <Stack spacing={2}>
        <h6>Philippines</h6>
        <hr />
        <Stack
          direction="row"
          justifyContent="space-between"
          className="footer-nav-info"
        >
          <Stack direction="row" spacing={5}>
            <p>About</p>
            <p>Advertising</p>
            <p>Business</p>
            <p>How Search Work</p>
          </Stack>
          <Stack direction="row" spacing={5}>
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
