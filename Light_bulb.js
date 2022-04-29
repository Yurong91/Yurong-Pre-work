//=====CALL BY ID ====//
const pic = document.querySelector('#lightBulb1')
const ON = document.querySelector('#ON')
const OFF = document.querySelector('#OFF')
const box = document.querySelector('#box')


//====FUNCTION====/
function Light_off(event) {
    pic.src="https://toppng.com/uploads/preview/light-bulb-on-off-png-11553940208oq66nq8jew.png"
} 
function Light_on(event) {
    pic.src="https://toppng.com/uploads/preview/light-bulb-png-transparent-light-bulb-115628766421gdl0skp2k.png"
}

//====ADD EVENT====//
ON.addEventListener('click',Light_on)
OFF.addEventListener('click',Light_off)




