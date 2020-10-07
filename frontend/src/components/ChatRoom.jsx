import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Chip from "@material-ui/core/Chip";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { text } from "body-parser";
import { CTX } from "./Store";
 
const useStyles = makeStyles((theme) => ({
  root: {
    width: "70%",
    marginLeft: "260px",
    marginTop: "70px",
    padding: theme.spacing(3, 2),
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },
  topicsWindow: {
    width: "15%",
    height: "300px",
    borderRight: "2px solid grey",
  },
  chatWindow: {
    width: "60%",
    height: "400px",
    padding: "20px",
  },
  chatBox: {
    width: "85%",

    marginLeft: "15em",
    marginRight: "4em",
  },

  button: {
    width: "10%",
    marginRight: "5em",
  },
  msgs: {
    color: "#3f51b5",
  },
}));
export default function ChatRoom(props) {
  const classes = useStyles();

  //CTX Store
  const { allChats, sendChatAction } = React.useContext(CTX);
  const topics = Object.keys(allChats);

  //local state
  const [activeTopic, changeActiveTopic] = React.useState(topics[0]);
  const [textValue, changeTextValue] = React.useState("");
  return (
    <div>
      <Paper className={classes.root}>
        <Typography variant="h4" component="h1">
          Chat app
        </Typography>
        <Typography variant="h4" component="h3">
          Topics:
        </Typography>

        <Typography component="h5">Choosen topic: {activeTopic}</Typography>

        <div className={classes.flex}>
          <div className={classes.topicsWindow}>
            <List>
              {topics.map((topic) => (
                <ListItem
                  onClick={(e) => {
                    changeActiveTopic(e.target.innerText);
                  }}
                  key={topic}
                  button
                >
                  <ListItemText primary={topic} />
                </ListItem>
              ))}
            </List>
          </div>

          <div className={classes.chatWindow}>
            {allChats[activeTopic].map((chat, i) => (
              <div className={classes.flex} className={classes.msgs} key={i}>
                <Typography variant="body1" gutterBottom>
                  {" "}
                  {chat.from}: {chat.msg}
                </Typography>
              </div>
            ))}
          </div>
        </div>
        <div className={classes.flex}>
          <TextField
            label="Send a message"
            className={classes.chatBox}
            value={textValue}
            onChange={(e) => changeTextValue(e.target.value)}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.button}
            onClick={() => {
              sendChatAction({
                from: props.user.username,
                msg: textValue,
                topic: activeTopic,
              });
              changeTextValue("");
            }}
          >
            Send
          </Button>
        </div>
      </Paper>
    </div>
  );
}
