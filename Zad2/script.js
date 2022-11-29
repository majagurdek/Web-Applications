class Book {
    constructor(name, tel) {
      this.name = name;
      this.tel = tel;
    }
  }
  
  class UI {
    
  
    static addBookToList(book) {
      const list = document.querySelector('#book-list');
      const row = document.createElement('tr');
  
      row.innerHTML = `
        \xa0\xa0\xa0\xa0\xa0
        <td>${book.name}</td>
        \xa0\xa0\xa0\xa0\xa0
        <td>${book.tel}</td>
        \xa0\xa0\xa0\xa0\xa0
        

        <td><a href="#" class="btn btn-danger btn-sm delete">✖</a></td>
        
      `;
  
      list.appendChild(row);
    }
  
    static deleteBook(el) {
      if(el.classList.contains('delete')) {
        el.parentElement.parentElement.remove();
      }
    }

    static clearFields() {
      document.querySelector('#name').value = '';
      document.querySelector('#tel').value = '';
      
    }
  }

  
  // Display
  document.addEventListener('DOMContentLoaded', UI.displayBooks);
  
  // Add 
  document.querySelector('#book-form').addEventListener('submit', (e) => {
    e.preventDefault();
  
    // Get form values
    const name = document.querySelector('#name').value;
    const tel = document.querySelector('#tel').value;
    var regName = /^[a-zA-Z]+\s*([a-zA-Z]+)?[-]?\s*([a-zA-Z]+)?$/;
    var regTel = /^(([+]\d{2}))?\s*\d{3}\-?\s*\d{3}\-?\s*\d{3}$/;
  
    // Validation
    if(name === '' || tel === '') {
      alert("Uzupełnij wszystkie pola");
      return;
    } 

    if(!regTel.test(tel) & !regName.test(name)){
      alert("Wprowadzono niepoprawne imię i nazwisko oraz niepoprawny numer telefonu");
      return;
    }

    if(!regName.test(name)){
      alert("Wprowadzono niepoprawne imię i nazwisko");
      return;
    }
    if(!regTel.test(tel)){
      alert("Wprowadzono niepoprawny numer telefonu");
      return;
    }
    
    else {
      const tel2 = (tel.replace(/ /g, '')).replace(/\-/g, '');
      const book = new Book(name, tel2);
      UI.addBookToList(book);
      UI.clearFields();
    }
  });

  document.querySelector('#book-list').addEventListener('click', (e) => {
    UI.deleteBook(e.target);
  });


  