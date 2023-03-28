import {screen, render} from '@testing-library/react';
import MainButton from "../components/mainButton/MainButton";
import NameCard from "../components/name/NameCard";
import MusicButton from "../components/musicbutton/MusicButton";


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

    test("Existe una imagen de botón parlante dentro del documento", () => {
            render(<MusicButton/>);
            const element = screen.getByRole('img');
            expect(element).toBeInTheDocument();
        })
    })
  