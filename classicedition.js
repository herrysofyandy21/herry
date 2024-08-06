function Kotak(nama, teksHarga, warna, harga, nomorGrup, sewaDasar, sewa1, sewa2, sewa3, sewa4, sewa5) {
    this.nama = nama;
    this.teksHarga = teksHarga;
    this.warna = warna;
    this.pemilik = 0;
    this.gadai = false;
    this.rumah = 0;
    this.hotel = 0;
    this.nomorGrup = nomorGrup || 0;
    this.harga = (harga || 0);
    this.sewaDasar = (sewaDasar || 0);
    this.sewa1 = (sewa1 || 0);
    this.sewa2 = (sewa2 || 0);
    this.sewa3 = (sewa3 || 0);
    this.sewa4 = (sewa4 || 0);
    this.sewa5 = (sewa5 || 0);
    this.jumlahTanah = 0;

    if (nomorGrup === 3 || nomorGrup === 4) {
        this.hargaRumah = 50;
    } else if (nomorGrup === 5 || nomorGrup === 6) {
        this.hargaRumah = 100;
    } else if (nomorGrup === 7 atau nomorGrup === 8) {
        this.hargaRumah = 150;
    } else if (nomorGrup === 9 atau nomorGrup === 10) {
        this.hargaRumah = 200;
    } else {
        this.hargaRumah = 0;
    }
}

function Kartu(teks, aksi) {
    this.teks = teks;
    this.aksi = aksi;
}

function koreksi() {
    document.getElementById("namaSel1").textContent = "Jalan Mediterania";

    // Tambahkan gambar ke pembesaran.
    document.getElementById("tokenPerbesar5").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; bottom: 20px;" />';
    document.getElementById("tokenPerbesar15").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
    document.getElementById("tokenPerbesar25").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
    document.getElementById("tokenPerbesar35").innerHTML += '<img src="images/train_icon.png" height="60" width="65" alt="" style="position: relative; top: -20px;" />';
    document.getElementById("tokenPerbesar12").innerHTML += '<img src="images/electric_icon.png" height="60" width="48" alt="" style="position: relative; top: -20px;" />';
    document.getElementById("tokenPerbesar28").innerHTML += '<img src="images/water_icon.png" height="60" width="78" alt="" style="position: relative; top: -20px;" />';
}

function teksUtilitas() {
    return '&nbsp;&nbsp;&nbsp;&nbsp;Jika satu "Utilitas" dimiliki, sewa adalah 4 kali jumlah yang ditunjukkan pada dadu.<br /><br />&nbsp;&nbsp;&nbsp;&nbsp;Jika kedua "Utilitas" dimiliki, sewa adalah 10 kali jumlah yang ditunjukkan pada dadu.';
}

function teksTransportasi() {
    return '<div style="font-size: 14px; line-height: 1.5;">Sewa<span style="float: right;">$25.</span><br />Jika 2 Kereta Api dimiliki<span style="float: right;">50.</span><br />Jika 3 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">100.</span><br />Jika 4 &nbsp; &nbsp; " &nbsp; &nbsp; " &nbsp; &nbsp; "<span style="float: right;">200.</span></div>';
}

function pajakKemewahan() {
    tambahPeringatan(pemain[gilirannya].nama + " membayar $100 karena mendarat di Pajak Kemewahan.");
    pemain[gilirannya].bayar(100, 0);

    $("#mendarat").show().text("Anda mendarat di Pajak Kemewahan. Bayar $100.");
}

function pajakKota() {
    tambahPeringatan(pemain[gilirannya].nama + " membayar $200 karena mendarat di Pajak Kota.");
    pemain[gilirannya].bayar(200, 0);

    $("#mendarat").show().text("Anda mendarat di Pajak Kota. Bayar $200.");
}

var kotak = [];

kotak[0] = new Kotak("GO", "KUMPULKAN GAJI $200 KETIKA LEWAT.", "#FFFFFF");
kotak[1] = new Kotak("Jalan Mediterania", "$60", "#8B4513", 60, 3, 2, 10, 30, 90, 160, 250);
kotak[2] = new Kotak("Komunitas Chest", "IKUTI INSTRUKSI DI KARTU ATAS", "#FFFFFF");
kotak[3] = new Kotak("Jalan Baltic", "$60", "#8B4513", 60, 3, 4, 20, 60, 180, 320, 450);
kotak[4] = new Kotak("Pajak Kota", "Bayar $200", "#FFFFFF");
kotak[5] = new Kotak("Kereta Api Reading", "$200", "#FFFFFF", 200, 1);
kotak[6] = new Kotak("Jalan Oriental", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
kotak[7] = new Kotak("Kesempatan", "IKUTI INSTRUKSI DI KARTU ATAS", "#FFFFFF");
kotak[8] = new Kotak("Jalan Vermont", "$100", "#87CEEB", 100, 4, 6, 30, 90, 270, 400, 550);
kotak[9] = new Kotak("Jalan Connecticut", "$120", "#87CEEB", 120, 4, 8, 40, 100, 300, 450, 600);
kotak[10] = new Kotak("Hanya Mengunjungi", "", "#FFFFFF");
kotak[11] = new Kotak("Tempat St. Charles", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
kotak[12] = new Kotak("Perusahaan Listrik", "$150", "#FFFFFF", 150, 2);
kotak[13] = new Kotak("Jalan States", "$140", "#FF0080", 140, 5, 10, 50, 150, 450, 625, 750);
kotak[14] = new Kotak("Jalan Virginia", "$160", "#FF0080", 160, 5, 12, 60, 180, 500, 700, 900);
kotak[15] = new Kotak("Kereta Api Pennsylvania", "$200", "#FFFFFF", 200, 1);
kotak[16] = new Kotak("Tempat St. James", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
kotak[17] = new Kotak("Komunitas Chest", "IKUTI INSTRUKSI DI KARTU ATAS", "#FFFFFF");
kotak[18] = new Kotak("Jalan Tennessee", "$180", "#FFA500", 180, 6, 14, 70, 200, 550, 750, 950);
kotak[19] = new Kotak("Jalan New York", "$200", "#FFA500", 200, 6, 16, 80, 220, 600, 800, 1000);
kotak[20] = new Kotak("Parkir Gratis", "", "#FFFFFF");
kotak[21] = new Kotak("Jalan Kentucky", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
kotak[22] = new Kotak("Kesempatan", "IKUTI INSTRUKSI DI KARTU ATAS", "#FFFFFF");
kotak[23] = new Kotak("Jalan Indiana", "$220", "#FF0000", 220, 7, 18, 90, 250, 700, 875, 1050);
kotak[24] = new Kotak("Jalan Illinois", "$240", "#FF0000", 240, 7, 20, 100, 300, 750, 925, 1100);
kot
