import {screen, render} from '@testing-library/react';
import Logo from "../components/logo/Logo";


describe('Navigation', () => {

    test("elemento logo existe dentro del documento", () => {
        render(<Logo/>);
        const elements = screen.getByRole('img');
        expect(elements).toBeInTheDocument();
    })

    test("elemento logo existe dentro del documento", () => {
        render(<Logo/>)
        const alternative = screen.getByAltText(/Logo.*? cuadrado/i)
    })

})