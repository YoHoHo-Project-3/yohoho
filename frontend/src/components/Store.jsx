import React from "react";
import io from "socket.io-client";

export const CTX = React.createContext();

const initState = {
  general: [],
   random: [],
};
function reducer(state, action) {
  const { from, msg, topic } = action.payload;
  switch (action.type) {
    case "RECEIVE_MESSAGE":
      return {
        ...state,
        [topic]: [
          ...state[topic],

          {
            from,
            msg,
          },
        ],
      };
    default:
      return state;
  }
}
function sendChatAction(value) {
  socket.emit("chat message", value);
}
let socket;

export default function Store(props) {
  const [allChats, dispatch] = React.useReducer(reducer, initState);

  if (!socket) {
    socket = io(":3001");
    socket.on("chat message", function (msg) {
      dispatch({ type: "RECEIVE_MESSAGE", payload: msg });
    });
  }

  return (
    <CTX.Provider value={{ allChats, sendChatAction }}>
      {props.children}
    </CTX.Provider>
  );
}
