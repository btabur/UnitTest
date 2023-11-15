/**
 * ilk olarak test edeceğim component dosyama import edilir
 * test kütüphanesinden ekrana basmak için ve diğer gerekli işlemler için 
 * gerekli meteod lar alınır
 */

import Form from '.';
import {render,screen,fireEvent} from '@testing-library/react'
import  UserEvent, { userEvent }  from '@testing-library/user-event';

/* test metodu iki değer alır ilk değer neyin test edildiğidir
diğer değer ise test fonksiyonudur.
*/
test('Koşulların onaylanmasına göre buton aktifliği',async ()=>{
    /**teste başlamadan önce 
     * test edilecek komponenet render metordu ile arka planda kaldırılır
     */

    //test edilecek bileşeni ekrana basma
    render(<Form/>)
    //user türetme

    const user =userEvent.setup()

    //gerekli elemanları alma

    //siaprişi onayla butonu
    const orderButton = screen.getByRole('button')
        //check box
    const chechBox = screen.getByRole('checkbox')

    // sipariş onayla butonu başlangıç ta disabled olacak
    expect(orderButton).toBeDisabled()

    // checkbox un başlangıç ta tikli olmamasını beklyoruaz
    expect(chechBox).not.toBeChecked()

    //check box a tılama
   await user.click(chechBox)
    //chech box tık lı ile sparişi onayla butonun aktif olaması durumunu kontrol
   expect(orderButton).toBeEnabled()
    //checkbox a ikiğnci kez tıkla
   await user.click(chechBox)
    //siparişi onayla butonu pasif olacak
   expect(orderButton).toBeDisabled
})

test('onayla butonu hover olunca bildirim çıkar',async ()=> {
    render(<Form/>)
    const user = userEvent.setup()

    //gerekli elemanları çekme
    const checkBox = screen.getByRole('checkbox')
    const orderButton = screen.getByRole('button')
    const popUp = screen.getByText('Size gerçekten bir şey',{exact:false}) // metin %100 uysun mu

    //checkbox a tıklama
    await user.click(checkBox)
    //siparişi onayla butonunun üzerine gelme
    fireEvent.mouseEnter(orderButton)
    //popup ın ekranın üzerinde görünür olması kontrolü
    expect(popUp).toBeVisible()
    //mouse un siparişi tamamla butonunu üstünden ayrılması
    fireEvent.mouseLeave(orderButton)
    //popup ın ekrandan
    expect(popUp).not.toBeVisible()




})