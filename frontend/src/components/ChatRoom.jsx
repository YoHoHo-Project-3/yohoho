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
    width: "45%",
    marginLeft: "450px",
    padding: theme.spacing(3, 2),
    backgroundColor: "transparent",
    border: "2px solid darkblue",
    borderRadius: "45px",
     
  },

  flex: {
    display: "flex",
    alignItems: "center",
  },

  topicsWindow: {
    width: "20%",
    height: "300px",
    borderRight: "2px solid darkblue",
  },
  chatWindow: {
    width: "70%",
    height: "400px",
    padding: "50px",
  },
  chatBox: {
    width: "60%",

    marginLeft: "15em",
    marginRight: "4em",
  },

  button: {
    width: "10%",
    marginRight: "5em",
  },
  msgs: {
    color: "darkblue",
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
       <div className='chatbx'> 
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
          className="chat-blue"
          className="chathtopic"
          variant="h4"
          component="h4"
        >
          Topics:
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
                  <ListItemText primary={topic} />
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
                from: "User",
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
