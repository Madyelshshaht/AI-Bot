import { useAppSelector } from "../../store/hooks"
import { BsRobot } from "react-icons/bs";





const LoadingIndicator = () => {
    const Mode = useAppSelector((state) => state.theme.darkMode) // False

    return (
        <div className='flex justify-start'>
            <div className={`${!Mode
                ? "bg-gray-800 text-gray-100 border-gray-700"
                : "bg-white text-gray-800 shadow-md"}
                rounded-2xl px-5 max-w-[80%] md:max-w-[70%]
                `}>
                <div className="flex items-center space-x-3 py-2">
                    <BsRobot className={`h-5 w-5 ${!Mode ? "text-indigo-100" : "text-indigo-600"}`} />
                    <div className="flex space-x-1">
                        <div className={`w-2 h-2 ${!Mode ? "bg-gray-500" : "bg-indigo-400"}
                            rounded-full animate-bounce`} style={{ animationDelay: "0s" }}>
                        </div>
                        <div className={`w-2 h-2 ${!Mode ? "bg-gray-500" : "bg-indigo-400"}
                            rounded-full animate-bounce`} style={{ animationDelay: "150ms" }}>
                        </div>
                        <div className={`w-2 h-2 ${!Mode ? "bg-gray-500" : "bg-indigo-400"}
                            rounded-full animate-bounce`} style={{ animationDelay: "300ms" }}>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LoadingIndicator