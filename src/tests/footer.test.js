import {screen, render} from '@testing-library/react';
import Footer from "../components/footer/Footer";

describe('Footer', () => {

    test("elemento img existe dentro del documento", () => {
        render(<Footer/>);
        const elements = screen.getByRole('img');
        expect(elements).toBeInTheDocument();
    })

    test("Texto contacto existe dentro del documento", () => {
        render(<Footer/>);
        expect(screen.getByText(/CONTACTO/i)).toBeInTheDocument();
    })

    test("Texto creditos existe dentro del documento", () => {
        render(<Footer/>);
        expect(screen.getByText(/CRÉDITOS/i)).toBeInTheDocument();
    })

    test("elemento ancor existe dentro del documento", () => {
        const { container } = render(<Footer />)
        const elements = container.querySelector('a')
        expect(elements).toBeInTheDocument();
    })
})