import Scops from ".";
import userEvent from "@testing-library/user-event";
import {render,screen,act} from '@testing-library/react'

test('Apı den her bir veri için ekrana bir kart basılması',async()=>{

    render(<Scops/>)

    const images = await screen.findAllByRole('img')
    expect(images).toHaveLength(4)

});

test("Çeşit ekleme işleminin toplam fiyatına yansıması", async()=> {

    render(<Scops/>)
   
    const user = userEvent.setup()

    const total =screen.getByTestId('total')
    const buttons = await screen.findAllByRole('button',{name:'Ekle'})
    const deleteButtons = await screen.findAllByRole('button',{name:'Sıfırla'})


   await act(async()=> {
       await user.click(buttons[0])
      
    })

    expect(total).toHaveTextContent('20')
   

   
   await act(async()=> {
        await user.click(buttons[1])
       
    })
    expect(total).toHaveTextContent('40')
   

   
   await act(async()=>{
        await user.click(deleteButtons[0])
       
    });
    expect(total).toHaveTextContent('20')
   

 
  await  act(async()=>{
       await user.click(deleteButtons[2])
       
   });
   expect(total).toHaveTextContent('0')
   
})