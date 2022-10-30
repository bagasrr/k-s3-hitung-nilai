let hasil = document.querySelector("#hasil");

const button = document.querySelector(".button");
button.addEventListener("click", () => {
  let nama = document.getElementById("nama").value,
    absensi = parseInt(document.getElementById("absensi").value),
    tugas = parseInt(document.getElementById("absensi").value),
    uts = parseInt(document.getElementById("uts").value),
    uas = parseInt(document.getElementById("uas").value);
  let total = absensi * 0.4 + tugas * 0.1 + uts * 0.2 + uas * 0.3;
  if (isNaN(absensi) || isNaN(tugas) || isNaN(uts) || isNaN(uas)) {
    alert("Harap Masukkan Nama dan Nilai");
  } else {
    if (total >= 85) {
      hasil.innerHTML = `Halo ${nama} Nilai kamu adalah A, Kamu lolos`;
    } else if (total >= 70) {
      hasil.innerHTML = `Halo ${nama} Nilai kamu adalah B, Kamu lolos, lebih giat lagi ya`;
    } else if (total >= 50) {
      hasil.innerHTML = `Halo ${nama} Nilai kamu adalah C, Nilai kamu Mepet, tapi kamu lolos`;
    } else if (total >= 40) {
      hasil.innerHTML = `Halo ${nama} Nilai kamu adalah D, Belajar Lagi Ya Dek`;
    } else {
      hasil.innerHTML = `Halo ${nama} Nilai kamu tidak ada, Niat kuliah ga?`;
    }
  }
});
