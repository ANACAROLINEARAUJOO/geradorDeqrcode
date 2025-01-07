const inputValue = document.querySelector('#inputValue');
const btnValue = document.querySelector('#btnValue');
const imgQrCode = document.querySelector('#QrCode');
const container = document.querySelector('.container');
let valueDefault;


btnValue.addEventListener('click', () => {
    let qrcodeValue = inputValue.value.trim();
    if (!qrcodeValue || qrcodeValue === valueDefault) return;
    valueDefault = qrcodeValue;
    btnValue.innerText = 'Gerando Qr Code...';
    imgQrCode.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${valueDefault}`
    imgQrCode.addEventListener('load', () => {
        container.classList.add('active')
        btnValue.innerText = 'Gerar'
    })
})
