// Persegi (Agustinus)
class Persegi {
  constructor(sisi) {
    this.sisi = sisi;
  }

  kelilingPersegi() {
    return 4 * this.sisi;
  }

  luasPersegi() {
    const result = this.sisi * this.sisi;

    return result;
  }
}

const newPersegi = new Persegi(5);

console.log("PERSEGI :");
console.log("keliling persegi", newPersegi.kelilingPersegi());
console.log("Luas persegi  ", newPersegi.luasPersegi());

// Persegi Panjang (Agus)
class PersegiPanjang {
  constructor(panjang, lebar) {
    this.panjang = panjang;
    this.lebar = lebar;
  }

  keliling() {
    return 2 * (this.panjang + this.lebar);
  }

  luas() {
    return this.panjang * this.lebar;
  }
}

const persegiPanjang = new PersegiPanjang(5, 10);

console.log("\nPERSEGI PANJANG:");
console.log("Keliling:", persegiPanjang.keliling());
console.log("Luas:", persegiPanjang.luas());

// Lingkaran (Aditya)
class Lingkaran {
  constructor(jariJari) {
    this.jariJari = jariJari;
  }

  hitungLuas() {
    return (Math.PI * this.jariJari ** 2).toFixed(3);
  }

  hitungKeliling() {
    return (2 * Math.PI * this.jariJari).toFixed(3);
  }
}

const lingkaran = new Lingkaran(5);

console.log("\nLINGKARAN :");
console.log(`Luas lingkaran: ${lingkaran.hitungLuas()}`);
console.log(`Keliling Lingkaran: ${lingkaran.hitungKeliling()}`);

// Segitiga (Fajar)
class Segitiga {
    constructor(alas, tinggi, sisi) {
        this.alas = alas;
        this.tinggi = tinggi;
        this.sisi = sisi;
    }

    luasSegitiga() {
        return (1/2) * this.alas * this.tinggi;
    }

    kelilingSegitiga() {
        return this.alas + this.tinggi + this.sisi;
    }
}

const segitiga = new Segitiga(8, 12, 13);

console.log("\nSEGITIGA :");
console.log("Luas Segitiga:", segitiga.luasSegitiga());
console.log("Keliling Segitiga:", segitiga.kelilingSegitiga());


// Trapesium (Nicholas)
class Trapesium {
  constructor(a, b, c, d, h) {
    this.sisiA = a;
    this.sisiB = b;
    this.sisiC = c;
    this.sisiD = d;
    this.tinggi = h;
  }

  // fungsi keliling
  kelilingTrapesium() {
    return this.sisiA + this.sisiB + this.sisiC + this.sisiD;
  }

  // fungsi luas
  luasTrapesium() {
    return (1 / 2) * (this.sisiA + this.sisiB) * this.tinggi;
  }
}

// objek trapesium
const trapesium = new Trapesium(8, 12, 5, 9, 3);

// Memanggil fungsi keliling dan luas
const keliling = trapesium.kelilingTrapesium();
const luas = trapesium.luasTrapesium();

console.log("\nTRAPESIUM :");
console.log("Keliling trapesium:", keliling);
console.log("Luas trapesium:", luas);
