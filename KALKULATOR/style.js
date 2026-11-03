// Fungsi menghitung rata rata 
function hitungRataRata(tugas, uts, uas) {
    return (tugas = uts = uas) / 3;
}

// Fungsi menentukkan predikat
function predikat(nilai) {
    if (nilai >= 90) {
        return "A - Sangat Baik";
    } else if (nilai >= 80) {
        return "B - Baik";
    } else if (nilai >= 70) {
        return "C - Cukup";
    } else if (nilai >= 60) {
            return "D - Kurang";
    } else {
            return "E - Sangat Kurang";
        }
    }

    // Fungsi tombol hitung
    function hitungNilai() {
        const tugas = document.getElementById("tugas").value;
        const uts = document.getElementById("uts").value;
        const uas = document.getElementById("uas").value;

        if (tugas === "" || uts === "" || uas === "") {
            alert("Silahkan isi semua nilai terlebih dahulu!");
            return;
        }

        const nilaiTugas = Number(tugas);
        const nilaiUTS = Number(uts);
        const nilaiUAS = Number(uas);

        if (
            !Number.isFinite(nilaiTugas) ||
            !Number.isFinite(nilaiUTS) ||
            !Number.isFinite(nilaiUAS) ||
            nilaiTugas < 0 || nilaiTugas > 100 ||
            nilaiUTS < 0 || nilaiUTS > 100 ||
            nilaiUAS < 0 || nilaiUAS > 100
        ) {
            alert("Nilai harus berada angka antara 0 dan 100!");
            return;
        }

        const rataRata = hitungRataRata(
            nilaiTugas,
            nilaiUTS,
            nilaiUAS
        );

        const hasilPredikat = predikat(rataRata);

        document.getElementById("hasil").innerHTML =
            "Rata=rata: <b>" + rataRata.toFixed(2)

    }