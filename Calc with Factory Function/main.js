// Calculator with Factory Function

function createCalculator() {
    return {
        display: document.querySelector('.display'),

        start() {
            this.clickButtons();
            this.pressEnter();
            this.display.focus();
        },

        clickButtons() {
            document.addEventListener('click', (e) => {
                const el = e.target;

                if(el.classList.contains('btn-num')) {
                    this.btnForDisplay(el.innerText);
                } 

                if(el.classList.contains('btn-clear')) {
                    this.clearDisplay();
                }

                if(el.classList.contains('btn-del')) {
                    this.deleteOne();
                }

                if(el.classList.contains('btn-eq')) {
                    this.btnEqual();
                }

            });
        },

        pressEnter() {
            this.display.addEventListener('keyup', e => {
                if(e.keyCode === 13) {
                    this.btnEqual();
                }
            });
        },

        btnForDisplay(valor) {
            this.display.value += valor;
            this.display.focus();
        },

        btnEqual() {
            let calculation = eval(this.display.value);

            try {
               

               if(!calculation) {
                   alert('Invalid calculation!');
                   return;
               }

               this.display.value = String(calculation);
            }  catch(e) {
                alert('Invalid calculation!');
                return;
            }


       },

       deleteOne() {
        this.display.value = this.display.value.slice(0, -1);
    },

    clearDisplay() {
        this.display.value = '';
    },

    };
}

const calculator = createCalculator();
calculator.start();