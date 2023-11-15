import Scops from ".";
import userEvent from "@testing-library/user-event";
import {render,screen} from '@testing-library/react'

test('Apı den her bir veri için ekrana bir kart basılması',async()=>{

    render(<Scops/>)

    const images = await screen.findAllByRole('img')
    expect(images).toHaveLength(4)

})