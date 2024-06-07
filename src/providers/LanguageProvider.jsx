import React, { createContext, useState, useContext} from "react";

const LanguageContext = createContext();

const LanguageProvider = ({children}) => {
    const languages = [
        {id: 0, name:"English", language: "en"},
        {id: 1, name:"Russian", language: "ru"},
    ]
    const [language, setLanguage] = useState("ru");

    const changeLanguage = (newLanguage) => {
        setLanguage(newLanguage);
    }
    return (
        <LanguageContext.Provider value={{language, changeLanguage, languages}}>
            {children}
        </LanguageContext.Provider>
    );
};

const useLanguage = () => {
    const context = useContext(LanguageContext);

    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};

export {LanguageProvider, useLanguage};