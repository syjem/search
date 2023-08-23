import Profile from "../assets/avatar.jpg";

import { SvgIcon, Tooltip } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import { Stack, Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navStyle = {
    justifyContent: location.pathname !== "/" ? "space-between" : "flex-end",
  };

  return (
    <header className="header">
      <nav className="nav" style={navStyle}>
        {location.pathname !== "/" && (
          <Stack className="back-home-btn">
            <Link to={"/"}>
              <Tooltip
                title="Back to Home"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
              >
                <Button variant="text">
                  <ArrowRightAltIcon
                    className="arrow-right"
                    aria-label="Back to Home button"
                  />
                </Button>
              </Tooltip>
            </Link>
          </Stack>
        )}
        <ul className="nav-menu">
          <li className="nav-item gmail">Gmail</li>
          <li className="nav-item images">
            <Link to="/images">Images</Link>
          </li>
          <li className="nav-item">
            <Stack spacing={2} direction="row" alignItems="center">
              <Tooltip
                title="Google apps"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
              >
                <SvgIcon fontSize="large" className="google-apps">
                  <svg focusable="false" viewBox="0 0 24 24" fill="#ffffff">
                    <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
                  </svg>
                </SvgIcon>
              </Tooltip>
              <Tooltip
                title="Google Account Jemuel Repoylo syjem143@gmail.com"
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 300 }}
              >
                <Avatar
                  alt="Jemuel Repoylo"
                  src={Profile}
                  sx={{ width: 34, height: 34 }}
                  className="avatar"
                />
              </Tooltip>
            </Stack>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
