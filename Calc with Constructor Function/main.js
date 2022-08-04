//Função construtora/ Constructor function -> Objetos
//Função fábrica -> Factory function -> Objetos
// Construtora -> Pessoa (new)

// function Pessoa(nome, sobrenome) {
//     const ID = 12345; // Atributo privado


//     this.nome = nome; // Atributo publico
//     this.sobrenome = sobrenome;
// };

// const p1 = new Pessoa('Gabriel', 'Veras');

function Calculator() {
    this.display = document.querySelector('.display');

    this.captureClicks = () => {
        document.addEventListener('click', event => {
            const el = event.target;
            if (el.classList.contains('btn-num')) this.addNumDisplay(el);
            if (el.classList.contains('btn-clear')) this.clear(el);
            if (el.classList.contains('btn-del')) this.del(el);
            if (el.classList.contains('btn-eq')) this.equal(el);
        });
    };

    this.addNumDisplay = el => {
        this.display.value += el.innerText;
        this.display.focus();
    }
    this.start = () => {
        this.captureClicks();
        this.captureEnter();
        this.display.focus();
    }
    this.clear = () => this.display.value = '';
    this.del = () => this.display.value = this.display.value.slice(0, -1);
    this.captureEnter = () => {
        document.addEventListener('keyup', e => {
            if (e.keyCode !== 13) return;
            this.equal();
        });

    };
    this.equal = () => {
        try {
            const calculation = eval(this.display.value);

            if (!calculation) {
                alert('Invalid calculation');
                return;
            }

            this.display.value = calculation;
        } catch (e) {
            alert('Invalid calculation');
            return;
        }
    }

}

const calculator = new Calculator();
calculator.start();