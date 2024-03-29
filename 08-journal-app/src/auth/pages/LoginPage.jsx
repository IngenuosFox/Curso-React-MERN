import { useMemo } from 'react'
import {Link as RouterLink} from 'react-router-dom'
import { Alert, Button, Grid, Link, TextField, Typography } from "@mui/material"
import { Google } from "@mui/icons-material"
import { AuthLayout } from '../layout/AuthLayout'
import { useForm } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import { startGoogleSingIn, startLoginWithEmailPassword } from '../../store/auth'

const formData = {
	email: "",
	password: ""
}

export const LoginPage = () => {
	
	const {status, errorMessage} = useSelector(state => state.auth)

	const dispatch = useDispatch()
	const {email, password, onInputChange, formState} = useForm(formData)
	
	const onSubmit = (event) => {
		event.preventDefault()
		dispatch(startLoginWithEmailPassword({email, password}))
	}

	const onGoogleSignIn = () => {
		dispatch(startGoogleSingIn())
	}

	const isAuthenticating = useMemo(() => status === "checking", [status])

	return (

		<AuthLayout title="Login">
			<form onSubmit={onSubmit} className="animate__animated animate__fadeIn animate__faster">
				<Grid container>

					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label="Correo" name="email" type="email" placeholder="correo@google.com" value={email} onChange={onInputChange} fullWidth></TextField>
					</Grid>

					<Grid item xs={12} sx={{mt: 2}}>
						<TextField label="Contraseña" name="password" type="password" placeholder="Contraseña" value={password} onChange={onInputChange} fullWidth></TextField>
					</Grid>

					<Grid container sx={{mt: 1}} display={!!errorMessage ? "" : "none"}>
						<Grid item xs={12}>
								<Alert severity="error">{errorMessage}</Alert>
						</Grid>
					</Grid>

					<Grid container spacing={2} sx={{mb: 2, mt: 1}}>
						<Grid item xs={12} sm={6}>
							<Button disabled={isAuthenticating} type="submit" variant="contained" fullWidth>Login</Button>
						</Grid>

						<Grid item xs={12} sm={6}>
							<Button disabled={isAuthenticating} onClick={onGoogleSignIn} variant="contained" fullWidth>
								<Google />
								<Typography sx={{ml: 1}} >Google</Typography>
							</Button>
						</Grid>
					</Grid>

					<Grid container direction="row" justifyContent="end">
						<Link component={RouterLink} color="inherit" to="/auth/register">Crear una cuenta</Link>
					</Grid>

				</Grid>
			</form>
		</AuthLayout>
	
	)
}
