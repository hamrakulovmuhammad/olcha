let body = document.body
let advertisement_flex = document.createElement('div')

for (let i = 0; i < 3; i++) {
    let advertisement = document.createElement('div')

    advertisement_flex.classList.add('advertisement_flex')
    advertisement.classList.add('advertisement')

    body.append(advertisement_flex)
    advertisement_flex.append(advertisement)
}

let cont = document.querySelector('.container_theree')




let phones_flex = document.createElement('div') 
for (let i = 0; i < 8 ; i++) {
    let phone_block = document.createElement('div')
    let phone_icons = document.createElement('div')
    let phone = document.createElement('div')
    let phone_img = document.createElement('img')
    let ic = document.createElement('div')
    let ic_img = document.createElement('img')
    let ic_image = document.createElement('img')
    let h1 = document.createElement('h1')
    let h2 = document.createElement('h2')
    let h3 = document.createElement('h3')
    let button_flex = document.createElement('div')
    let lil = document.createElement('button')
    let button_img = document.createElement('img')
    let lol = document.createElement('div')

    phones_flex.classList.add('phones_flex')
    phone_block.classList.add('phone_block')
    phone_icons.classList.add('phone_icons')
    phone_img.classList.add('phone')
    ic.classList.add('ic')
    h1.classList.add('phone_block_h1')
    h2.classList.add('phone_block_h2')
    h3.classList.add('phone_block_h3')
    button_flex.classList.add('button_flex')
    lil.classList.add('lil')
    button_img.classList.add('button_img')
    lol.classList.add('lol')


    phone_img.src = "img/phone.jpg"
    ic_img.src = "icons/heart.svg"
    ic_image.src = "icons/signal-alt-2.svg"
    h1.innerHTML = 'Смартфон Xiaomi Redmi Note 11 Pro 128GB 8 GB Grey'
    h2.innerHTML = '3 804 000 сум'
    h3.innerHTML = '634 000 сум / 6 мес.'
    button_img.src = "icons/shopping-cart.svg"
    lol.innerHTML = 'в рассрочку'

    body.append(phones_flex, cont)
    phones_flex.append(phone_block)
    phone_block.append(phone_icons, h1, h2, h3, button_flex)
    phone_icons.append(phone, ic)
    phone.append(phone_img)
    ic.append(ic_img, ic_image)
    button_flex.append(lil, lol)
    lil.append(button_img)

}
