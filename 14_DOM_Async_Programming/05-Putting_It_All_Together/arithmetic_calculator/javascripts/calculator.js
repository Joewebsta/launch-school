class Model {
  constructor() {}
}

class View {
  constructor() {
    this.generateHTML();
    this.form = document.querySelector('form');
    this.num1 = document.querySelector('#num1');
    this.num2 = document.querySelector('#num2');
    this.operator = document.querySelector('#operator');
    this.result = document.querySelector('.result');
  }

  generateHTML() {
    let calculatorTemplate = document.querySelector('#calculatorTemplate');
    let calculatorTemplateFunc = Handlebars.compile(calculatorTemplate.innerHTML);
    document.body.insertAdjacentHTML('afterbegin', calculatorTemplateFunc());
  }

  bindCalculate() {
    this.form.addEventListener('submit', e => {
      e.preventDefault();

      let result;
      let num1 = Number(this.num1.value);
      let num2 = Number(this.num2.value);
      let operator = this.operator.value;

      if (operator === '+') result = num1 + num2;
      if (operator === '-') result = num1 - num2;
      if (operator === '*') result = num1 * num2;
      if (operator === '/') result = num1 / num2;
      
      this.displayResult(result);
    });
  }

  displayResult(result) {
    this.result.innerText = result;
  }
}

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
    
    this.view.bindCalculate();
  }
  
}

const app = new Controller(new Model(), new View());

