function uocso() {
  const N = Number(prompt("Nhập vào số cần kiểm tra ước số"));
  let dsUoc = " ";

  for (let i = 1; i <= N; i++) {
    if (N % i == 0) {
      dsUoc = dsUoc + " " + i + ",";
    }
  }
  console.log("Ước số là" + dsUoc);
  const danhSachuocSo = document.getElementById(iduocso).value;
  document.innerHTML = danhSachuocSo;
}

function soHoanHao() {
  const N = Number(prompt("Nhập vào số cần ktr số hoàn hảo:"));
  let total = 0;
  for (let i = 1; i < N; i++) {
    if (N % i == 0) {
      total = total + i;
    }
  }
  if (N == total) {
    alert("Là số hoàn hảo");
  } else {
    alert("Không phải Là số hoàn hảo");
  }
  document.innerHTML = document.getElementById(idsoHoanHao);
}
