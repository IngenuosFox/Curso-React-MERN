import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpleTheme } from "./"


export const AppThemen = ({children}) => {
	return (
		<ThemeProvider theme={purpleTheme}>
			<CssBaseline />
			{children}
		</ThemeProvider>
	)
}
