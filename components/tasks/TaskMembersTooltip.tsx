import * as React from "react";
import { Theme, Tooltip, Fade, Typography } from "@material-ui/core";

import { withStyles } from "@material-ui/styles";
import { EmailMemberDto } from "../../generated/apolloComponents";

interface Props {
  children: any;
  members: Array<EmailMemberDto>;
}

const CustomTooltip = withStyles((theme: Theme) => ({
  tooltip: {
    backgroundColor: theme.palette.common.white,
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: theme.palette.grey[200],
    color: theme.palette.common.black
  }
}))(Tooltip);

const TaskMembersTooltip: React.FunctionComponent<Props> = ({
  children,
  members
}) => (
  <CustomTooltip
    enterDelay={200}
    TransitionComponent={Fade}
    TransitionProps={{ timeout: 600 }}
    title={
      <React.Fragment>
        {members.map(member => (
          <Typography
            key={member.user.email}
            color="inherit"
            variant="caption"
            display="block"
          >
            {member.user.email}
          </Typography>
        ))}
      </React.Fragment>
    }
  >
    {children}
  </CustomTooltip>
);

export default TaskMembersTooltip;
