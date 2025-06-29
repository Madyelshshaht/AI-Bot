import { useAppSelector } from "../../store/hooks";
import { BsRobot } from "react-icons/bs";
import { BiUser } from "react-icons/bi";

type MessageType = {
    id: number;
    text: string;
    sender: "user" | "bot";
    timestamp: Date;
};

const ChatMessages = ({ message, formatTime }: { message: MessageType, formatTime: (date: Date) => string; }) => {
    const Mode = useAppSelector((state) => state.theme.darkMode); // False

    return (
        <div
            className={` flex ${message.sender === "user" ? "justify-end " : "justify-start"
                } md:px-0 px-3`}
        >
            <div
                className={`flex items-start gap-2 max-w-[80%] md:max-w-[70%]  rounded-2xl px-5 py-3.5  
                    ${message.sender === "user"
                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white"
                        : !Mode
                            ? "bg-gray-800 text-gray-100 border-gray-700"
                            : "bg-white text-gray-800 shadow-md"
                    }`}
            >

                {/* Icon */}
                <div
                    className={`flex justify-center items-center gap-2  text-xl 
                        ${message.sender === "user"
                            ? "text-indigo-200"
                            : !Mode
                                ? "text-indigo-100"
                                : " text-indigo-600"
                        }  text-center`}
                >
                    {message.sender === "user" ? <BiUser /> : <BsRobot />}

                </div>

                <div className="flex-1 ">
                    <div className="mb-1 -mt-0.5 flex justify-between items-center gap-2">
                        <span className="font-medium ">
                            {message.sender === "user" ? "You" : "Ai Assistant"}
                        </span>
                        {/* <h2>{message.timestamp && "10:32"}</h2> */}
                        <span className={`text-xs  ${message.sender === "user" ? "opacity-70" : !Mode ? "text-gray-400" : "text-gray-500"}`}>
                            {formatTime(message.timestamp)}
                        </span>
                    </div>
                    <p className="text-sm md:text-base whitespace-pre-wrap break-words leading-relaxed">
                        {message.text}
                    </p>

                </div>
            </div>
        </div>
    );
};

export default ChatMessages;
