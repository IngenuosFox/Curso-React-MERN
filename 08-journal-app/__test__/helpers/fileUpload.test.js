import { fileUpload } from "../../src/helpers"

describe('Pruebas en fileUpload', () => {
	
	test('debe subir el archivo correctamente a cloudinary', async() => {

		const imageUrl = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MXx8fGVufDB8fHx8&w=1000&q=80'"
		const resp = await fetch(imageUrl)
		const blob = await resp.blob()
		const file = new File([blob], "foto.jpg")

		// const url = await fileUpload(file)
		console.log(blob)
		console.log(file)
	})
})
