
var counterValue = 0;
class Counter {
    constructor(elem) {
      this._elem = elem;
      elem.onclick = this.onClick.bind(this); // (*)
    }

    increment() {
       counterValue  += 1;
       const counter1 = document.querySelector('#value');
       counter1.innerHTML = counterValue;
      
    }

    decrement() {
        counterValue  -= 1; 
        const counter2 = document.querySelector('#value');
        counter2.innerHTML = counterValue;
    }

        onClick(event) {
      let action = event.target.dataset.action;
      if (action) {
        this[action]();
      }
    };
  }

  new Counter(counter);