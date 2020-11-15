let qnt = document.getElementById('input-qnt').value;

function setQntMinus() {
  var minValue = 1;
  var value = parseInt(document.getElementById('input-qnt').value, 10);
  value = isNaN(value) ? 0 : value;

  if (value > minValue) {
    value--;
  } else {
    alert('Já é a quantidade mínimo!');
  }

  document.getElementById('input-qnt').value = value;
}

function setQntPlus() {
  var maxValue = 9;
  var value = parseInt(document.getElementById('input-qnt').value, 10);
  value = isNaN(value) ? 0 : value;

  if (value < maxValue) {
    value++;
  } else {
    alert('Já é a quantidade máxima!');
  }

  document.getElementById('input-qnt').value = value;
}
