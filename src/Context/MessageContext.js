import React, {createContext, useState} from 'react';

const MessageContext = createContext();

const MessageProvider = ({children}) => {
  const [message, setMessage] = useState([]);

  const values = {
    message,
    setMessage,
  };

  return (
    <MessageContext.Provider value={values}>{children}</MessageContext.Provider>
  );
};

export {MessageProvider, MessageContext};
