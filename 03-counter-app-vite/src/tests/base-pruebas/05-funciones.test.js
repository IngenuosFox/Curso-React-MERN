import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
    
    test('getUSer debe de retornar un objeto', () => {
        
        const testUser = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(testUser).toEqual(user);
    });

    test('getUsuarioActivo debe de retornar un objeto', () => {
        
        const name = "Jonathan";
        const usuarioActivo = getUsuarioActivo(name);

        expect(usuarioActivo).toEqual({
            uid: "ABC567",
            username: name
        });
    });
});