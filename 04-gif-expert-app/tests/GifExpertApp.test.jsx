import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => {
    
    test('debe de añadir la nueva categoria introducida', async() => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "Pokemon"}});
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2);
    });

    test('no debe de volver a añadir la categoria si esta esta repetida', async() => {
        render(<GifExpertApp />);
        const input = screen.getByRole("textbox");
        const form = screen.getByRole("form");

        fireEvent.input(input, {target: {value: "Pokemon"}});
        fireEvent.submit(form);

        fireEvent.input(input, {target: {value: "Pokemon"}});
        fireEvent.submit(form);

        expect(screen.getAllByRole("heading", {level: 3}).length).toBe(2);
    });
});