import {screen, render} from '@testing-library/react';
import MainButton from "../components/mainButton/MainButton";
import NameCard from "../components/name/NameCard";


describe('MainButton and NameCard', () => {

    test("elemento button existe dentro del documento", () => {
        render(<MainButton/>);
        const elements = screen.getByRole('button');
        expect(elements).toBeInTheDocument();
    })
    test("elemento p existe dentro del documento", () => {
        const { container } = render(<NameCard />)
        const elements = container.querySelector('p')
        expect(elements).toBeInTheDocument();


    })
  
    /*test("Texto abecedario existe dentro del documento", () => {
        render(<MainButton/>);
        expect(screen.getByText(/Aprende.*? abecedario/i)).toBeInTheDocument();
    })*/

})