function Chiahet() {
  const a = +prompt("Nhập số a:");
  const b = +prompt("Nhập số b:");
  if (a % b == 0) {
    alert(a + " chia hết cho " + b);
  } else {
    alert(a + " không chia hết cho " + b);
  }
}

function checkAge() {
  const tuoi = +prompt("Nhập tuổi học sinh:");
  if (tuoi < 15) {
    alert("Chưa đủ điều kiện học lớp 10");
  } else {
    alert("Đã đủ điều kiện học lớp 10");
  }
}

function checknumber() {
  const number = +prompt("Nhập số kiểm tra là số dương:");
  if (number > 0) {
    alert(number + " là số dương");
  } else {
    alert(number + " không phải là số dương");
  }
}

function findMax() {
  const a = +prompt("Nhập số thứ 1:");
  const b = +prompt("Nhập số thứ 2:");
  const c = +prompt("Nhập số thứ 3:");
  if (a >= b && a >= c) {
    alert("Max là: " + a);
  } else if (b >= c) {
    alert("Max là: " + b);
  } else {
    alert("Max là: " + c);
  }
}
