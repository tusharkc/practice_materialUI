import React from "react";
import {
  Drawer as MUIDrawer,
  ListItem,
  List,
  ListItemIcon,
  ListItemText,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import PersonIcon from "@mui/icons-material/Person";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";

import { withRouter } from "react-router-dom";

const useStyles = makeStyles({
  drawer: {
    width: "190px",
  },
});

const Drawer = (props) => {
  const { history } = props;
  const classes = useStyles();
  const itemsList = [
    {
      text: "Users",
      icon: <PersonIcon />,
      onClick: () => history.push("/"),
    },
    {
      text: "User List",
      icon: <PeopleAltIcon />,
      onClick: () => history.push("/users"),
    },
  ];
  return (
    <MUIDrawer variant="permanent" className={classes.drawer}>
      <List>
        {itemsList.map((item, index) => {
          const { text, onClick, icon } = item;

          return (
            <ListItem button key={text} onClick={onClick}>
              <ListItemIcon>{icon}</ListItemIcon>
              <ListItemText
                primary={text}
                style={{
                  backgroundColor:
                    window.location.pathname === "/" && index === 0
                      ? "red"
                      : window.location.pathname === "/users" && index === 1
                      ? "green"
                      : "none",
                  padding: 10,
                  width: 100,
                }}
              />
            </ListItem>
          );
        })}
      </List>
    </MUIDrawer>
  );
};

export default withRouter(Drawer);
