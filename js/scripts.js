const form = document.getElementById('form');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const botao = document.getElementById('submit');
const nome = document.getElementById('nome')




let i = 0;
form.addEventListener('submit', (event) => {
    event.preventDefault();
    nameValidate();
    endeValidate();
    phoneValidate();
    emailValidate();


})
// este função adciona ou remove os spans de erro dependendo da entrada do usuário
function setError(index) {
    campos[index].style.border = '2px solid #e63636';
    spans[index].style.display = 'block';

}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';

}

function nameValidate() {
    if (campos[0].value.length < 3) {
        setError(0);
      
    }
    else {
        removeError(0)
        i = i+1
    }
}

function endeValidate() {
    if (campos[1].value.length == 0) {
        setError(1);
    
    }
    else {
        removeError(1);
       i = i+1;
    }


}

function phoneValidate() {
    if (campos[2].value.length < 9) {
        setError(2);
   
    }
    else {
        removeError(2)
      i = i+1;
    }

}

function emailValidate() {
    if (!emailRegex.test(campos[3].value)) {
        setError(3);
      

    }
    else {
        removeError(3);
     i= i+1;

    }

}

function clickEvent() {
    if (i < 4) {
        alert('preencha todos os campos para realizar o cadastro')
    }
    else {
        alert("Cadasto realizado com sucesso, O aluno(a): " +  nome.value  + " receberá todo o material e suporte necessário para realizar os seus estudos" )
    }
}