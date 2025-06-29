import { useAppSelector } from "../../store/hooks";

import { useRef, useEffect } from "react";

import { LuSend } from "react-icons/lu";



type Iinput = {
    input: string;
    setInput: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    HandleSendMessage: () => void;
};

const ChatInput = ({ input, setInput, loading, HandleSendMessage }: Iinput) => {
    const Mode = useAppSelector((state) => state.theme.darkMode); // False
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto"; // إعادة الضبط
            textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // ضبط على المحتوى
        }
    }, [input]);


    return (
        <div
            className={`
            ${!Mode
                    ? "bg-gray-950 border-t border-gray-700"
                    : "bg-white border-t border-gray-200"
                }
                `}
        >
            <div className="max-w-6xl mx-auto ">
                <div className="flex items-center gap-1">
                    <textarea
                        // type="text" if input
                        ref={textareaRef}
                        placeholder="type Your Message"
                        autoComplete="on"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault();
                                HandleSendMessage();
                            }
                        }}
                        rows={1}
                        className={` w-full resize-none ${Mode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-900"
                            } rounded-2xl px-5 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-50 focus:border-transparent`}
                    />
                    <div className="btn p-3 ">
                        <button className={`p-1 cursor-pointer ${Mode
                            ? "bg-gray-700 border-gray-600 text-white placeholder-gray-400"
                            : "bg-white border-gray-300 text-gray-900"}  hover:bg-green-500 rounded-full h-12 w-12 flex justify-center items-center  `}
                            onClick={HandleSendMessage}
                            disabled={loading || !input.trim()}
                        >
                            <LuSend className="text-2xl me-0.5  " />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChatInput;
