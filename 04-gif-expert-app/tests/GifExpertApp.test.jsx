/**
 * @jest-environment jsdom
 */
import { fireEvent, render, screen } from "@testing-library/react";
import { GifExpertApp } from "../src/GifExpertApp";

describe('Pruebas en <GifExpertApp />', () => { 

    const inputValue = 'One Piece';

    test('debe de armar un flujo completo', () => { 

        render(<GifExpertApp />);

        const form = screen.getByRole('form');
        const input = screen.getByRole('textbox');

        fireEvent.input( input, { target : { value: inputValue } } );
        fireEvent.submit( form );
        
        expect( input.value ).toBe('');

    });

});