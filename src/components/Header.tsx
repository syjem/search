import Profile from "../assets/avatar.jpg";

import { SvgIcon, Tooltip } from "@mui/material";
import Fade from "@mui/material/Fade";
import Avatar from "@mui/material/Avatar";
import { Stack } from "@mui/material";

const Header = () => {
  return (
    <>
      <Stack spacing={2} direction="row">
        <Tooltip
          title="Google apps"
          TransitionComponent={Fade}
          TransitionProps={{ timeout: 300 }}
        >
          <SvgIcon fontSize="large">
            <svg className="gb_j" focusable="false" viewBox="0 0 24 24">
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
          />
        </Tooltip>
      </Stack>
    </>
  );
};

export default Header;
