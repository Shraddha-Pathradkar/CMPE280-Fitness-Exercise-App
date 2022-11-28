import React from "react";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";

class Chatbox extends React.Component {
  render() {
    const theme = {
      background: '#f5f8fb',
      fontFamily: 'Helvetica Neue',
      headerBgColor: 'red',
      headerFontColor: '#fff',
      headerFontSize: '15px',
      botBubbleColor: 'red',
      botFontColor: '#fff',
      userBubbleColor: '#fff',
      userFontColor: '#4a4a4a',
    };

    return (
      <ThemeProvider theme={theme}>

        <ChatBot

          steps={[
            {
              id: "1",
              message: "Hola! need Help?",
              trigger: "2"
            },
            {
              id: "2",
              user: true,
              trigger: "3"
            },
            {
              id: "3",
              message: "{previousValue}, okay",
              trigger: "4"
            },

            {
              id: "4",
              user: true,
              trigger: "5"
            },
            {
              id: "5",
              message: "okay",
              trigger: "6"
            },
            {
              id: "6",
              user: true,
              trigger: "7"
            },
            {
              id: "7",
              message: "okay",
              end: true
            }
          ]}
        />
      </ThemeProvider>
    );
  }
}
export default Chatbox;
