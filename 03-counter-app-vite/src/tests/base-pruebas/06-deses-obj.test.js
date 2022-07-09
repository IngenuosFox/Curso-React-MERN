import { usContext } from "../../base-pruebas/06-deses-obj";

describe('Pruebas en 06-deses-obj', () => {

    test('usContext debe de retornar un objeto', () => {
        
        const objetoTest = {
            clave: "ElElefante",
            edad: 34
        };
        const objeto = usContext(objetoTest);

        expect(objeto).toEqual({
            nombreClave: objetoTest.clave,
            anios: objetoTest.edad,
            latlng: {
                lat: 14.1232,
                lng: -12.3232
            }
        });
    });
});