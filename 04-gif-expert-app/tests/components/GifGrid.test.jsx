import { render, screen } from "@testing-library/react";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('Pruebas en <GifGrid />', () => {
    
    const category = "Meme"

    test('debe de mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        });

        render(<GifGrid category={category} />);

        expect(screen.getByText("Cargando...")).toBeTruthy();
        expect(screen.getByText(category)).toBeTruthy();
    });

    test('debe de mostrar items cuando se cargan las imágenes useFetchGifs', () => {
        
        const gifs = [
            {
                id: "ABC",
                title: "Lapras",
                url: "https://www.lapras.es"
            },
            {
                id: "123",
                title: "Pikachu",
                url: "https://www.pikachu.es"
            }
        ];

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: false
        });

        render(<GifGrid category={category} />);

        expect(screen.getAllByRole("img").length).toBe(2);
    });
});