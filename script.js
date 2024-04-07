function calculateSum() {
  const value1 = document.getElementById('value1').value;
  const value2 = document.getElementById('value2').value;
  if (!value1 || !value2) {
    throw new Error('Preencha os campos para realizar a soma');
  }
  if (Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
    throw new Error('Informe dois números para realizar a soma');
  }
  const result = Number(value1) + Number(value2);
  return result;
}

function displayResult(result) {
  document.getElementById('result').innerHTML = `Resultado: ${result}`;
}

function sum() {
  try {
    const result = calculateSum();
    displayResult(result);
  } catch (error) {
    document.getElementById('result').innerHTML = `Erro: ${error.message}`;
  } finally {
    document.getElementById('value1').value = '';
    document.getElementById('value2').value = '';
  }
}

window.onload = () => {
  const button = document.getElementById('button');
  button.addEventListener('click', sum);
};
