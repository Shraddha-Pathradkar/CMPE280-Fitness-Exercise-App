import React from "react";
import { Link } from "react-router-dom";
import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from "styled-components";
import BookOnlineAppointment from "./BookOnlineAppointment";
import GoogleMaps from "./GoogleMaps";
import RequestCallBack from "./RequestCallBack";

class Chatbox extends React.Component {


  render() {
<<<<<<< HEAD
    const CustomStep = ({ triggerNextStep }) => {
      return (
        <Link to={"/nearby-gym"} >Show gold gym near me.</Link>
      );
    };

=======
>>>>>>> 1a753b2e8328d5668c9238f9e9945116cca6beb7
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
    const steps = [
      {
        id: "Greet",
        message: "Hello, Welcome to golds gym!!",
        trigger: "1"
      },
      {
        id: '1',
        message: 'What is your name?',
        trigger: '2',
      },
      {
        id: '2',
        user: true,
        trigger: '3',
      },
      {
        id: '3',
        message: 'Hi {previousValue}, nice to meet you!',
        trigger: '1a',
      },
      {
        id: '1a',
        message: 'How can we help you ?',
        trigger: '2a',
      },
      {
        id: '2a',
        options: [
          { value: 2, label: 'Request a call back', trigger: '3a' },
          { value: 3, label: 'Book online appointment', trigger: '3b' },
          { value: 4, label: 'Find us near by', trigger: '3c' },

        ],
      },
      {
        id: '3a',
        component: (
          <div>
            <RequestCallBack />
          </div>
        ),
        // trigger: '1a',
      },
      {
        id: '3b',
        component: (
          <div>
            <BookOnlineAppointment />
          </div>
        ),
        // trigger: '1a',
      },
      {
        id: '3c',
        component: (
          <div>
            <CustomStep />
          </div>
        )
      }
    ];

    return (
      <ThemeProvider theme={theme}>

        <ChatBot
          steps={steps}
        />
      </ThemeProvider>
    );
  }
}
export default Chatbox;
