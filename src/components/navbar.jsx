import { useState, useEffect } from "react";
import { CiHome } from "react-icons/ci";
import { IoIosNotificationsOutline } from "react-icons/io";
import { Button } from "@/components/ui/button";
import { IoSettings } from "react-icons/io5";
import { HiOutlineMenu } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import { motion, AnimatePresence} from "framer-motion";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest(".menu-container")) {
                setIsOpen(false);
            }
        };
        document.addEventListener("click", handleClickOutside);
        return () => document.removeEventListener("click", handleClickOutside);
    }, []);

    return (
        <div className="flex items-center w-full px-4 h-[50px] shadow-md shadow-black-500 bg-red-50">
            <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
                <CiHome size={40} className="cursor-pointer" />
            </motion.div>
            <div className="flex-1 text-center h-[50px]">
                <h1 className="absolute left-1/2 transform -translate-x-1/2 text-[30px] justify-center text-red-700 font-bold font-serif">
                    Flavour Fiend
                </h1>
            </div>
            {!isOpen &&(
            <div className="hidden md:flex items-center space-x-6">
                <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
                    <IoIosNotificationsOutline size={35} className="cursor-pointer" />
                </motion.div>
                <Button variant="outline">Login</Button>
                <motion.div whileTap={{ scale: 0.8 }} whileHover={{ scale: 1.1 }}>
                    <IoSettings size={35} className="cursor-pointer" />
                </motion.div>
            </div>
            )}
            <div className="md:hidden menu-container relative">
                <motion.div
                    whileTap={{ scale: 0.8 }}
                    whileHover={{ scale: 1.1 }}
                    onClick={(e) => {
                        e.stopPropagation(); // Prevent closing when clicking the menu
                        setIsOpen(!isOpen);
                    }}
                >
                    {isOpen ? <IoMdClose size={35} /> : <HiOutlineMenu size={35} />}
                </motion.div>
                <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute top-12 right-0 w-40 bg-white shadow-md rounded-lg p-3 flex flex-col items-center space-y-3"
                    >
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <IoIosNotificationsOutline size={25} />
                            <span className="text-lg">Notifications</span>
                        </div>
                        <div className="flex items-center space-x-3 cursor-pointer">
                            <IoSettings size={25} />
                            <span className="text-lg">Settings</span>
                        </div>
                    
                    </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </div>
    );
}

export default Navbar;


