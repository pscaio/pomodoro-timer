let workTexto = document.querySelector('[data-work]');
let breakTexto = document.querySelector('[data-break]');
const botaoComecar = document.querySelector('[data-comecar]');
const botaoRecomecar = document.querySelector('[data-recomecar]');
const botaoPausar = document.querySelector('[data-pausar]');

const tempoPadrao = 25;

let workTime = tempoPadrao;
let breakTime = 5;

let segundos = '00';

window.onload = () => {
    document.querySelector('[data-min]').innerHTML = workTime;
    document.querySelector('[data-seg]').innerHTML = segundos
}

document.querySelector("[data-recomecar]").style.display = 'none'

botaoComecar.addEventListener('click', ()=> {

    document.querySelector("[data-comecar]").style.display = 'none'
    document.querySelector("[data-recomecar]").style.display = 'block'

    segundos = 59;

    let workMin = workTime - 1;
    let breakMin = breakTime - 1;

    breakCount = 0;

    function contador (){

        document.querySelector('[data-min]').innerHTML = workMin;
        document.querySelector('[data-seg]').innerHTML = segundos;
        
        if(segundos === 0) {
            segundos = 59;
        }
        segundos = segundos - 1;

        if (segundos === 0) {
            
            workMin = workMin - 1;
           

            if (workMin === -1) {
             
                if(breakCount % 2 === 0) {
                    
                    workMin = breakMin;
                    breakCount++

                    workTexto.classList.remove('ativo');
                    breakTexto.classList.add('ativo');
                    
                } else {
    
                    let workTime = tempoPadrao - 1;

                    workMin = workTime;
                    breakCount++;

                    workTexto.classList.add('ativo');
                    breakTexto.classList.remove('ativo');
                }
            }
        }
    }
    const intervaloSeg = setInterval(contador, 1000);

    botaoRecomecar.addEventListener('click', () => { 
        
        function recomecar() {
               
   
                let workTime = tempoPadrao;
                segundos = '00'

                document.querySelector('[data-min]').innerHTML = workTime;
                document.querySelector('[data-seg]').innerHTML = segundos           

                clearInterval(intervaloSeg)

                workTexto.classList.add('ativo');
                breakTexto.classList.remove('ativo');

                document.querySelector("[data-comecar]").style.display = 'block'
                document.querySelector("[data-recomecar]").style.display = 'none'  
        }

        recomecar() 
    })
})






