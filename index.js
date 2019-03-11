document.querySelector('.page-loaded').innerHTML = (new Date().toLocaleTimeString());

document.querySelector('.ajax-get-html').addEventListener('click' , ajaxGet);

function ajaxGet(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            document.querySelector('.html-container').innerHTML = xhr.responseText;
        }
    }
    xhr.open('GET' , 'client-data.html' , true);
    xhr.send();
}

document.querySelector('.ajax-get-json').addEventListener('click' , ajaxJSON);

function ajaxJSON(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
           const clientData = JSON.parse(xhr.responseText);
           document.querySelector('.client-name').innerHTML = clientData.name;
           document.querySelector('.client-balance').innerHTML = clientData.balance;
        }
    }
    xhr.open('GET' , 'client-data.json' , true);
    xhr.send();
}

window.addEventListener('load' , getCurrency);

document.querySelector('.update-currency').addEventListener('click' , getCurrency);

document.querySelector('.update-currencyUAH').addEventListener('click' , getCurrencyUAH);

function getCurrency(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const currency = JSON.parse(xhr.responseText);
            document.querySelector('.currency-container').innerText = currency.rates['USD'];
        }
    }
    xhr.open('GET' , 'http://data.fixer.io/api/latest?access_key=36375ad49b12f9c4bb28c7be43ae6471' , true);
    xhr.send();
}

function getCurrencyUAH(){
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            const currency = JSON.parse(xhr.responseText);
            document.querySelector('.currency-containerUAH').innerText = currency.rates['UAH'];
        }
    }
    xhr.open('GET' , 'http://data.fixer.io/api/latest?access_key=36375ad49b12f9c4bb28c7be43ae6471' , true);
    xhr.send();
}
//
const text = document.querySelector('textarea');
const display = document.querySelector('.form-feedback');
document.querySelector('input[type=submit]')
  .addEventListener('click', saveText);

function saveText(e) {
  e.preventDefault();
  localStorage['text'] = text.value;
}
//const dataRaz = document.querySelector('input[type="date"].raz');
document.querySelector('.load')
  .addEventListener('click', loadText);

function loadText() {
  text.value = localStorage['text'] || '';
}

document.querySelector('.sendfeed')
  .addEventListener('click', sendText);

function sendText() {
  document.querySelector('.sendfeed').submit();
  display.value = 'Thank you for your feedback!';
}
