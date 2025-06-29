// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { toggletheme } from "../../store/Themeslice";

import { FaMoon } from "react-icons/fa";
import { RiSunFill } from "react-icons/ri";
import { BsRobot } from "react-icons/bs";
import { RiChatNewFill } from "react-icons/ri";


const Navbar = () => {
    const dispatch = useAppDispatch();
    const Mode = useAppSelector((state) => state.theme.darkMode); // False


    return (
        <>
            <div
                className={`${!Mode ? "bg-gray-950 text-white border-gray-400" : " text-black bg-white border-gray-900"}
                    flex justify-between items-center md:px-30 px-10 py-4 border-b-2 shadow-lg sticky top-0 `}
            >
                <div className="left flex items-center gap-4">
                    <div className=" rounded-4xl bg-blue-600  w-10 h-10 cursor-pointer flex items-center justify-center text-white text-2xl" >
                        <BsRobot />
                    </div>
                    <h2 className="sm:text-lg text-md font-semibold ">Intellgent Chat</h2>
                </div>
                <div className="Right flex items-center  gap-4">
                    <h2 className="text-lg font-semibold sm:block hidden">Ai Powerd</h2>
                    <div className="btns">
                        <div
                            className="rounded-4xl bg-gray-200 p-1 w-8 h-8 cursor-pointer flex items-center justify-center text-blue-600"
                            onClick={() => dispatch(toggletheme())}
                        >
                            {Mode ? <FaMoon /> : <RiSunFill />}
                        </div>
                    </div>
                    <div className="relative group">
                        <button onClick={() => window.location.reload()} className="cursor-pointer" >
                            <RiChatNewFill className=" text-3xl" />
                        </button>

                        {/* Tooltip */}
                        <div className="absolute top-full mb-2 left-1/2 -translate-x-1/2 
                  bg-gray-600 text-white text-xs rounded-md px-2 py-1 
                  opacity-0 group-hover:opacity-100 transition-opacity duration-300 
                  pointer-events-none whitespace-nowrap z-10">
                            New Chat
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;
