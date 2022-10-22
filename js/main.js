// Nhập input
var numArray = [];
function themSo() {
    // nhận input
    var num = document.querySelector('#nhapSoN').value;
    if(num == '') {
        num = 0;
    } 

    // đưa input vào mảng 
    numArray.push(Number(num));

    // in mảng ra UI
    document.querySelector('#kqThemSo').innerHTML = numArray.toString();
}
document.querySelector('#btnThemSo').onclick = themSo;

// Bài 1: tính tổng số dương
function tinhTong() {
    if (numArray == '') {
        document.querySelector('#kqTinhTong_b1').innerHTML = 0;
    }
    var sum = 0;
    for (var i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            sum += numArray[i];
        } 
    }
    document.querySelector('#kqTinhTong_b1').innerHTML = sum;
}
document.querySelector('#btnTinhTong_b1').onclick = tinhTong;

// Bài 2: Đếm số dương trong mảng
function demSoDuong() {
    if (numArray == '') {
        document.querySelector('#kqSoDuong_b2').innerHTML = 0;
    }
    var count = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            count++;
        }
    }
    document.querySelector('#kqSoDuong_b2').innerHTML = 'Số dương: ' + count;
}
document.querySelector('#btnSoDuong_b2').onclick = demSoDuong;

// Bài 3: tìm số nhỏ nhất
function timMin() {
    if (numArray == '') {
        document.querySelector('#kqSoMin_b3').innerHTML = "Số nhỏ nhất: 0";
    }
    var min = numArray[0];
    for (let i = 1; i < numArray.length; i++) {
        if (min > numArray[i]) {
            min = numArray[i];
        }
    }
    document.querySelector("#kqSoMin_b3").innerHTML = "Số nhỏ nhất: " + min;
}
document.querySelector('#btnSoMin_b3').onclick = timMin;

// Bài 4: tìm số dương nhỏ nhất trong mảng
function timSoDuongNhoNhat() {
    // tạo mảng copy
    var soDuongNN = [];
    for (let i = 0; i < numArray.length; i++) {
        if(numArray[i] > 0) {
            soDuongNN[i] = numArray[i];
        }
        
    }
    // tìm số dương nhỏ nhất
    var min = soDuongNN[0];
    for (let i = 1; i < soDuongNN.length; i++) {
        if (min > soDuongNN[i]) {
            min = soDuongNN[i];
        } 
    }

    // Kiểm tra input
    if (min == undefined ) {
        min = 0;
    } 
    
    document.querySelector('#kqSoDuongNhoNhat_b4').innerHTML = "Số nhỏ nhất: " + min;
}
document.querySelector('#btnSoDuongNhoNhat_b4').onclick = timSoDuongNhoNhat;

// Bài 5: tìm số chẵn cuối cùng
function timSoChanCC() {
    var soChan = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] % 2 == 0) {
            soChan = numArray[i];
        }
        if (numArray[i] % 2 != 0) {
            document.querySelector('#kqSoChan_b5').innerHTML = soChan;
        }
    }
    document.querySelector('#kqSoChan_b5').innerHTML = soChan;
}
document.querySelector('#btnSoChan_b5').onclick = timSoChanCC;
// Bài 6: đổi chỗ 2 mảng theo vị trí
/**
* Vị trí là index của phần tử trong mảng.
* Để gán giá trị vào 1 vị trí(index) trong mảng => array[index] = giá trị;
* Tạo 1 biến tạm, gán giá trị của phần tử ở vị trí 1 vào biến tạm
* Gán giá trị của phần tử ở vị trí 2 vào vị trí 1
* Gán giá trị biến tạm vào vị trí 2
 */
function doiCho() {
    // input soViTri1, soViTri2
    var soViTri1 = document.querySelector('#soViTri1').value;
    var soViTri2 = document.querySelector('#soViTri2').value;
    if (soViTri1 == '' || soViTri2 == '') {
        return document.querySelector('#kqDoiCho_b6').innerHTML = 'Bạn nhập thiếu 1 hoặc 2 ô, không thể thực hiện thao tác';
    } 
    
    // copy array
    var numArrayCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numArrayCopy[i] = numArray[i];
    }
    // kiểm tra xem nếu soViTri2 dài hơn số mảng
    if (soViTri2 > numArrayCopy.length) {
        return document.querySelector('#kqDoiCho_b6').innerHTML = 
        "Không có " + soViTri2 + " chữ số trong mảng" 
        + ". Tối đa chỉ có " + numArrayCopy.length + " chữ số";
    }
    // temp var
    var temp = 0;
    //Swap
    temp = numArrayCopy[soViTri1];
    numArrayCopy[soViTri1] = numArrayCopy[soViTri2];
    numArrayCopy[soViTri2] = temp;

    document.querySelector('#kqDoiCho_b6').innerHTML ='Mảng sau khi đổi: ' + numArrayCopy;
}
document.querySelector('#btnDoiCho_b6').onclick = doiCho;

// Bài 7: sắp xếp tăng dần
function sxTangDan() {
    // copy array
    var numArrayCopy = [];
    for (var i = 0; i < numArray.length; i++) {
        numArrayCopy[i] = numArray[i];
    }

    // temp var
    var temp = 0;
    
    for (let i = 0; i < numArrayCopy.length - 1; i++) {
        for (let j = 0; j < numArrayCopy.length - 1 - i; j++) {
            if (numArrayCopy[j] > numArrayCopy[j + 1]) {
                temp = numArrayCopy[j];
                numArrayCopy[j] = numArrayCopy[j + 1];
                numArrayCopy[j + 1] = temp;
            }
        }
    }
    document.querySelector('#kqSapXep_b7').innerHTML = 'Mảng sau khi sắp xếp: ' + numArrayCopy;
}
document.querySelector('#btnSapXep_b7').onclick = sxTangDan;
// Bài 8: tìm số nguyên tố đầu tiên trong mảng
/** 
 * Khi tìm thấy số nguyên tố đầu tiên thì dùng lệnh dừng vòng lặp (break) để không duyệt những số tiếp theo trong mảng
 */
function timSoNguyenTo() {
    var soNT = -1;
    for (let i = 0; i < numArray.length; i++) {
        if (checkPrime(numArray[i])) {
            soNT = numArray[i];
            break;
        }
    }
    if (soNT == -1) {
        document.querySelector("#kqSoNguyenTo_b8").innerHTML =
            "Không có số nguyên tố nào tồn tại";
    } else {
        document.querySelector("#kqSoNguyenTo_b8").innerHTML =
            "Số nguyên tố đầu tiên: " + soNT;
    }
    //document.querySelector('#kqSoNguyenTo_b8').innerHTML = 'OK';
}
document.querySelector('#btnSoNguyenTo_b8').onclick = timSoNguyenTo;

function checkPrime(n) {
    if(n === 1) {
        return false;
    } else if (n === 2) {
        return true;
    } else {
        for (var i = 2; i < n; i++) {
            if (n % i == 0) {
                return false;
            }
        }
        return true;
    }
}
// Bài 9: có bao nhiêu số nguyên
// B1: Input cho array mới
var numListB9 = [];
function themSoB9() {
    // nhận input
    var num = document.querySelector('#inpThemSo_b9').value;
    if(num == '') {
        num = 0;
    } 

    // đưa input vào mảng 
    numListB9.push(Number(num));

    // in mảng ra UI
    document.querySelector('#kqThemSo_b9').innerHTML = numListB9.toString();
}
document.querySelector('#btnThemSo_b9').onclick = themSoB9;

//B2: Đếm số nguyên trong dãy số thực
function demSoNguyen() {
    if (numListB9.length == '') {
        return document.querySelector("#kqDemSoNguyen_b9").innerHTML = 'Mảng rỗng';
    }

    // Đếm số nguyên
    var count = 0;
    for (let i = 0; i < numListB9.length; i++) {
        if (Number.isInteger(numListB9[i])) {
            count++;
        }
    }
    document.querySelector("#kqDemSoNguyen_b9").innerHTML = "Số nguyên: " + count;
}
document.querySelector('#btnDemSoNguyen_b9').onclick = demSoNguyen;

// Bài 10: so sánh số lượng số dương, số lượng số âm
function ssAmDuong() {
    var soDuong = 0;
    var soAm = 0;
    for (let i = 0; i < numArray.length; i++) {
        if (numArray[i] > 0) {
            soDuong++;
        } else if (numArray[i] < 0){
            soAm++;
        }
    }
    
    if (soAm == soDuong) {
        document.querySelector('#kqSS_b10').innerHTML = 'Số âm = Số dương' + '. ( Số âm: ' + soAm + '. Số dương: ' + soDuong + ' )';
    } else if (soAm > soDuong) {
        document.querySelector('#kqSS_b10').innerHTML = 'Âm thịnh dương suy' + '. ( Số âm: ' + soAm + '. Số dương: ' + soDuong + ' )';
    } else {
        document.querySelector('#kqSS_b10').innerHTML = 'Dương thịnh âm suy' + '. ( Số âm: ' + soAm + '. Số dương: ' + soDuong + ' )';
    }
    
}
document.querySelector('#btnSS_b10').onclick = ssAmDuong;