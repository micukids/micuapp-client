import {screen, render} from '@testing-library/react';
import MusicButton from "../components/musicbutton/MusicButton";

describe('Music Button', () => {

    test("elemento existe una imagen de button parlante existe dentro del documento", () => {
        render(<MusicButton/>);
        const elements = screen.getByRole('img');
        expect(elements).toBeInTheDocument();
    })

})