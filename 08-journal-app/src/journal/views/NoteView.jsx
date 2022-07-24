import { Button, Grid, IconButton, TextField, Typography } from "@mui/material"
import { DeleteOutline, SaveOutlined, UploadOutlined } from "@mui/icons-material"
import { ImageGallery } from "../components"
import { useSelector, useDispatch } from "react-redux"
import { useForm } from "../../hooks"
import { useEffect, useMemo, useRef } from "react"
import { setActiveNote, startSaveNote, startUploadingFiles, startDeletingNote } from "../../store/journal"
import Swal from "sweetalert2"
import "sweetalert2/dist/sweetalert2.css"

export const NoteView = () => {

	const dispatch = useDispatch()
	const { active: note, messageSaved, isSaving } = useSelector(state => state.journal)
	const { body, title, date, onInputChange, formState } = useForm(note)

	const dateString = useMemo(() => {
		const newDate = new Date(date).toUTCString()
		return newDate
	}, [date])

	useEffect(() => {
		dispatch(setActiveNote(formState))
	}, [formState])
	
	useEffect(() => {
		if (messageSaved.length > 0) {
			Swal.fire("Nota actualizada", messageSaved, "success")
		}
	}, [messageSaved])

	const fileInputRef = useRef()

	const onSaveNote = () => {
		dispatch(startSaveNote())
	}

	const onFileInputChange = ({target}) => {
		if (target.files === 0) {
			return
		}

		dispatch(startUploadingFiles(target.files))
	}

	const onDelete = () => {
		dispatch(startDeletingNote())
	}
	

	return (
		<Grid className="animate__animated animate__fadeIn animate__faster" container direction="row" justifyContent="space-between" alignItems="center" sx={{mb: 1}}>
			<Grid item>
				<Typography fontSize={39} fontWeight="light">{dateString}</Typography>
			</Grid>
			<Grid item>
				<input ref={fileInputRef} type="file" multiple="multiple" onChange={onFileInputChange} style={{display: "none"}} />

				<IconButton color="primary" disabled={isSaving} onClick={() => fileInputRef.current.click()}>
					<UploadOutlined />
				</IconButton>

				<Button disabled={isSaving} onClick={onSaveNote} color="primary" sx={{padding: 2}}>
					<SaveOutlined sx={{fontSize: 30, mr: 1}} />Guardar
				</Button>
			</Grid>

			<Grid container>
				<TextField name="title" value={title} onChange={onInputChange} type="text" variant="filled" fullWidth placeholder="Ingrese un título" label="Título" sx={{boder: "none", mb: 1}} />

				<TextField name="body" value={body} onChange={onInputChange} type="text" variant="filled" fullWidth multiline placeholder="¿Qué sucedió en el día de hoy?" minRows={5} sx={{boder: "none", mb: 1}} />
			</Grid>

			<Grid container justifyContent="end">
				<Button onClick={onDelete} sx={{mt: 2}} color="error">
					<DeleteOutline />
					Borrar
				</Button>
			</Grid>

			<ImageGallery images={note.imageUrls} />
		</Grid>
	)
}
