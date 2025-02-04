import React from "react";
import Header from "../fragments/Header";
import Navbar from "../fragments/Navbar";
import { useContext } from "react";
import { ThemeContext } from "../../context/ThemeContext";
import { NotifContext } from "../../context/notifContext";
import SimpleBackdrop from "../elements/Backdrop";
import CustomizedSnackbars from "../elements/Snackbar";

const MainLayout = (props) => {
    const { children } = props;
    const { theme } = useContext(ThemeContext);
    const { msg, setMsg, open, setOpen, isLoading, setIsLoading } = 
       useContext(NotifContext);
    
    const { isDarkMode, setIsDarkMode } = useContext(ThemeContext);
    
       const toggleTheme = () => {
         setIsDarkMode(!isDarkMode);
       };
       
    return (
      <div className={`flex w-screen min-h-screen max-w-full ${isDarkMode ? 'bg-gray-800' : 'bg-special-mainBg'}`}>

        {/* navbar start*/}
<Navbar />
{/* navbar end*/}
        <div className="w-screen">
          {isLoading && (
          <SimpleBackdrop isLoading={isLoading} setIsLoading={setIsLoading} />
          )}
          {msg && ( 
          <CustomizedSnackbars
          severity={msg.severity}
          message={msg.desc}
          open={open}
          setOpen={setOpen}
          />
          )}
          {/* header start*/}
<Header />
{/* header end*/}
          {/* content start*/}
<main className="px-6 py-4">{ children }</main>
{/* content end*/}
        </div>
      </div>
    );
  };
  
  export default MainLayout;