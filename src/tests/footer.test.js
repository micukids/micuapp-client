import {screen, render} from '@testing-library/react';
import Footer from "../components/footer/Footer";

describe('Footer', () => {

    test("elemento img existe dentro del documento", () => {
        render(<Footer/>);
        const elements = screen.getByRole('img');
        expect(elements).toBeInTheDocument();
    })

    //Describir más tests aqui//
})