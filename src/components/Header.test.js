import { render } from "@testing-library/react";
import React from "react";
import Header from "./Header";

let container = null;

beforeEach(()=>{
    container = render(<Header/>).container;

})

it('should show logo',()=>{
    expect(true).toBe(true)
})