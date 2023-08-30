        const boasvindas = document.querySelector('.boasvindas');
        const registrar = document.querySelector('.registrar');
        const logar = document.querySelector('.logar');


        registrar.addEventListener('click', () => {
            boasvindas.classList.add('mover')
        })
        logar.addEventListener('click',()=>{
            boasvindas.classList.remove('mover')
        })
