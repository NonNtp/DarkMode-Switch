import React, { useContext } from 'react'
import light from '../image/light.svg'
import ThemeContext from '../context/theme-context'
import dark from '../image/dark.svg'

const Content = () => {
	const themeCtx = useContext(ThemeContext)
	const themeMain = !themeCtx.theme ? 'light' : 'dark'
	return (
		<main className={themeMain}>
			<div className='second'>
				<h1>RedCats Studio</h1>
				<p>DarkMode Workshop</p>
			</div>
			<img src={!themeCtx.theme ? light : dark} alt='light' />
		</main>
	)
}

export default Content
