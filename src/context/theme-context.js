import { createContext, useState } from 'react'

const ThemeContext = createContext({
	theme: false,
	onToggle: () => {},
})

export const ThemeContextProvider = (props) => {
	const [theme, setTheme] = useState(false)

	const toggleSwitch = () => {
		setTheme((prevState) => !prevState)
	}

	return (
		<ThemeContext.Provider value={{ theme: theme, onToggle: toggleSwitch }}>
			{props.children}
		</ThemeContext.Provider>
	)
}

export default ThemeContext
