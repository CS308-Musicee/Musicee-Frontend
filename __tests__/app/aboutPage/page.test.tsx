import React from "react";
import {render, screen} from "@testing-library/react"
import "@testing-library/jest-dom"
import AboutPage from "@/app/aboutPage/page"; // Correct import path

describe('aboutPage', () =>{
    it('should properly write', () => {
        render(<AboutPage></AboutPage>);
        const htext = screen.getByRole('heading', { name: /Welcome to Musicee/i });
        const header = "Welcome to Musicee";
        expect(htext).toHaveTextContent(header);
    });
});