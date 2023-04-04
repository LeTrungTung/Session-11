// for (let i = 1; i <= 100; i++) {
//   if (i == 99) {
//     alert("Đã hoàn thành");
//     break;
//   }
// }
// let nhietDo;
// do {
//   nhietDo = Number(prompt("Nhập vào nhiệt độ:"));
//   if (nhietDo > 100) {
//     alert("Giảm nhiệt độ: nhiệt độ phải nhỏ hơn 100");
//   } else if (nhietDo < 20) {
//     alert("Tăng nhiệt độ: nhiệt độ phải lớn hơn 20");
//   } else {
//     alert("Nhiệt độ đã ổ định");
//   }
// } while (nhietDo > 100 || nhietDo < 20);

// function check_songuyento() {
//   const sokiemtra = Number(
//     prompt("Nhập số cần kiểm tra là nguyên tố hay ko")
//   );
//   let ktra_ngto = true;
//   for (let i = 2; i < sokiemtra; i++) {
//     if (sokiemtra % i == 0) {
//       ktra_ngto = false;
//       break;
//     }
//   }
//   if (ktra_ngto == true) {
//     alert("Là số nguyên tố");
//   } else alert("Không phải là số nguyên tố");
// }

function in_songuyento() {
  const soluong = Number(
    prompt("Nhập số lượng số nguyên tố cần thể hiện")
  );
  let count = 0;
  let N = 2;
  let ktra_ngto = true;
  while (count < soluong) {
    ktra_ngto = true;
    let i = 1;
    while (i < N) {
      i = i + 1;
      if (N % i == 0) {
        ktra_ngto = false;
        break;
      }
    }
    if (ktra_ngto) {
      count = count + 1;
      console.log("Số nguyên tố thứ", count, "là: " + N);
    }
  }
}

//   while (count < soluong) {
//     let N = 2;
//     let demnt = 0;
//     for (let i = 2; i < N; i++) {
//       if (N % i == 0) {
//         demnt = demnt + 1;
//       }
//     }
//     if (dem > 1) {
//       N = N + 1;
//     } else count = count + 1;
//   }
// }
function change() {
  const element = document.getElementById("idtext");
  element.style.fontSize = "30px";
}
