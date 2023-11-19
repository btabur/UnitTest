
import { render,screen} from "@testing-library/react"
import Toppings from "."
import userEvent from "@testing-library/user-event"


test("Veri api den geldikten sonra cardlar ekrana basılır", async ()=> {
    render(<Toppings/>)

   const images = await screen.findAllByRole('img')   // resimler asekron olarak geldiği için find metodunu kulandık

   expect(images.length).toBeGreaterThanOrEqual(1)
})


test("sosları ekleme çıkarma toplam fiyatı etkiler",async () => {

    render(<Toppings/>)

    const user = userEvent.setup();

   const total = screen.getByRole('heading', {name:/Soslar Ücreti:/i}) //başlığın devamı değişebileceği için bu şekilde yaptık

   //iki sosu çağırma

   const MMs = await screen.findByAltText('M&Ms')
   const mochi = await screen.findByAltText('Mochi');

   //sosu sepete ekle

  
     await user.click(MMs)

   //sepetteki yazı doğru mu

   expect(total).toHaveTextContent('3') //textin herhangi bir yerinde 3 yazıyor mu

   //diğer sosu sepete ekle
   await user.click(mochi);

   //sepetteki yazı doğru mu
    expect(total).toHaveTextContent('6')

    //sosu sepetten çıkar
    await user.click(MMs)

    //sepeti kontrol et
    expect(total).toHaveTextContent('3')

    //diğer sosu da sepetten çıkar
    await user.click(mochi);

    //sebeti kontrol et
    expect(total).toHaveTextContent('0')
})