import { fileUpload } from "../../src/helpers"

describe('Pruebas en fileUpload', () => {
	
	test('debe subir el archivo correctamente cloudinary', async() => {

		const imageUrl = "https://opidesign.net/wp-content/uploads/landscape-architecture-fun-facts-outside-productions-blog-980x551.jpg"
		const resp = await fetch(imageUrl)
		const blob = await resp.blob()
		const file = new File([blob], "foto.jpg")

		const url = await fileUpload()
	})
})