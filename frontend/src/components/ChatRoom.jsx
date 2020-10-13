import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { CTX } from "./Store";
import "./ChatRoom.css";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "55%",
    height: "850px",
    marginLeft: "330px",
    padding: theme.spacing(3, 2),
    backgroundColor: "transparent",
    border: "1.5px solid darkblue",
    boxShadow: "inset 8px 19px 20px 35px rgba(0,0,0,0.32)",
    borderRadius: "35px",
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },

  topicsWindow: {
    width: "12%",
  },

  chatWindow: {
    marginTop: "1em",
    width: "80%",
    height: "600px",
    padding: "50px",
    border: "1px solid darkblue",
    borderRadius: "40px",
  },
  chatBox: {
    width: "990px",
    height:" 4em",
    marginLeft: "9em",
    marginRight: "0.5em",
    marginTop: "1em",
  },

  button: {
    marginTop: "1em",
    width: "15%",
    height: "53px",
    backgroundColor: " #E2000C",
    marginRight: "3em",
  },
  msgs: {
    color: " red",
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
    <div className="chatbody">
      <div className="chatbx">
        <Paper className={classes.root}>
          <Typography
            className="chat-blue chat-center"
            className="chath1"
            variant="h4"
            component="h1"
          >
            CHAT
          </Typography>

          <Typography
            className="chat-blue chat-center"
            className="chath"
            component="h5"
          >
            Choosen topic: {activeTopic}
          </Typography>

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
                    <ListItemText className='topicClr' primary={topic} />
                  </ListItem>
                ))}
              </List>
            </div>

            <div className={classes.chatWindow}>
              {allChats[activeTopic].map((chat, i) => (
                <div className={classes.flex} className={classes.msgs} key={i}>
                  <Typography variant="body1" gutterBottom>
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
                  from: props.user.name,
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
    </div>
  );
}
