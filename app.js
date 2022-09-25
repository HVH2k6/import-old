const input = document.querySelector('.input_old');
const infoOld = document.querySelector('.info');
const btn = document.querySelector('.btn');
btn.onclick = function () {
  var numberOld = parseInt(input.value);

  if (!numberOld) {
    infoOld.textContent = 'tuổi nhập vào không hợp lệ';
  } else if (numberOld <= 0) {
    infoOld.textContent = 'mày chưa sinh sao tao tính được tuổi';
  } else if (numberOld >= 100) {
    infoOld.textContent = 'con lạy cụ cụ sống dai quá';
  } else {
    infoOld.textContent = 'tuổi của bạn là: ' + numberOld;
  }
  infoOld.style.textAlign = 'center';
  setTimeout(() => {
    infoOld.style.opacity = 1;
  }, 500);
};
