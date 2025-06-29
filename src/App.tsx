import Navbar from './components/Navbar/Navbar';

import { useAppSelector } from './store/hooks';


import './App.css'
import { useState } from 'react';
import ChatMessages from './components/ChatMessages/ChatMessages';
import { formatTime, getRandomResponse } from './utils/chatUtils';
import LoadingIndicator from './components/Loading/LoadingIndicator';
import ChatInput from './components/CahtInput/CahtInput';
import { GenerateContnet } from "./services/GeminiApi";


type MessageType = {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
};


function App() {
  const Mode = useAppSelector((state) => state.theme.darkMode) // False

  const [loading, setLoading] = useState(false)
  const [input, setInput] = useState("")
  const [message, setMessage] = useState<MessageType[]>([
    // {
    //   id: 2,
    //   text: "Hello bot ",
    //   sender: "user",
    //   timestamp: new Date(),
    // },
    {
      id: 1,
      text: "Hello ,  How can i Help You",
      sender: "bot",
      timestamp: new Date(),
    }

  ]);


  const HandleSendMessage = () => {
    const userMessage = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessage((prev) => [...prev, userMessage])
    setInput("")
    setLoading(true);


    setTimeout(() => {
      const botMessage = {
        id: (Date.now() + 1).toString(),
        text: GenerateContnet(input),
        sender: "bot",
        timestamp: new Date(),
      }
      setMessage((prev) => [...prev, botMessage])
      setLoading(false);
    }, 1500)
  }

  return (
    <>
      <div className="flex flex-col h-screen justify-between " >

        <Navbar />

        {/* content */}
        <div className={`${!Mode ? 'bg-gray-950 text-white' : ' text-black bg-white'} 
        flex-1 overflow-y-auto  pt-4 md:p-6  h-screen  `}>
          <div className="max-w-5xl mx-auto space-y-4">
            {message.map((msg) => (
              <ChatMessages key={msg.id} message={msg} formatTime={formatTime} />
            ))}
            {loading && <LoadingIndicator />}
          </div>
        </div>

        {/* InputChat */}
        <ChatInput input={input} setInput={setInput} loading={loading} HandleSendMessage={HandleSendMessage} />
      </div>

    </>
  )
}

export default App
