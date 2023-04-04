// Demo vòng lạp
//Nhập  N chuỗi số  và tìm ra số lớn nhát

// chuỗi số: a1, a2, a3, ...an

// lặp 10 lần
// for (let i = 1; i <= 10; i = i + 1) {
//   console.log("Lần thứ ", i);
// }

// for (let i = 1, j = 1; i <= 10; i++, j + 3) {
//   console.log("I", i);
//   console.log("J", j);
// }

// let i = 0;
// let sum = 0;

// while (sum < 100) {
//   sum = sum + i;
//   i++;
// }
// console.log("check", i, sum);

// do {
//   j++;
//   console.log("Lần lặp thứ j", j);
// } while (j <= 0);

// // vòng lặp lồng nhau

// for (let i=0;i<10,i++){
//     for (let j=0,j<5,j++){
//         console("ket qua", i, j)
//     }
// }
// // let max=a1
// // for (let i=0;i<=n;i=i+1){
// //     if (ai>=a1){
// //         max=ai
// //     }
// // } console.log("Số lớn nhất là ",max)

function checkPrime() {
  const N = Number(prompt("Nhập số cần ktra:"));
  if (N >= 2) {
    let isPrime = true;
    for (let i = 2; i < N; i++) {
      if (N % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      alert("Là số nguyên tố");
    } else {
      alert("Không Là số nguyên tố");
    }
  } else {
    alert("Là số nguyên tố");
  }
}

function primeString() {
  const totalPrime = number(
    prompt("Nhập vào số lượng số nguyên tố cần in")
  );
  let countPrime = 0;
  let N = 2;
  let primeString = "";
  while (countPrime < totalPrime) {
    let isPrime = true;
    for (let i = 2; i < N; i++) {
      if (N % i == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      countPrime++;
      primeString = primeString + "" + N;
    }
    N++;
  }
  console.log(111111111, primeString);
}
