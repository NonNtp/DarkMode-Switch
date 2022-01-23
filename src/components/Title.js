import React, { useContext } from 'react'
import Switch from 'react-switch'
import ThemeContext from '../context/theme-context'
const Title = () => {
	const themeCtx = useContext(ThemeContext)

	const toggleHandler = (checked) => {
		themeCtx.onToggle()
	}

	const themeHeader = !themeCtx.theme ? 'light' : 'dark'

	return (
		<header className={themeHeader}>
			<span>Mode [{!themeCtx.theme ? 'light' : 'dark'}]</span>
			<Switch
				onChange={toggleHandler}
				checked={themeCtx.theme}
				uncheckedIcon={false}
				checkedIcon={false}
				onColor={'#ffa500'}
			/>
		</header>
	)
}

export default Title
