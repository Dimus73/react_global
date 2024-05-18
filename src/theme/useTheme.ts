import {LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext, ThemeContextProps} from "./ThemeContext";
import {useContext} from "react";

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}


export function useTheme():UseThemeResult {
    const {theme, setTheme} = useContext<ThemeContextProps>(ThemeContext);
    const toggleTheme = () => {
        const newThem = theme === Theme.DARK ? Theme.LIGHT : Theme.DARK;
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newThem)
        setTheme(newThem)
    }

    return ({
        theme,
        toggleTheme,
    })

}