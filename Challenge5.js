// Persegi
class Persegi{
    constructor(sisi){
        this.sisi = sisi
    }
    
    kelilingPersegi(){

        return 4 * this.sisi;

    }

    luasPersegi(){
        const result =  this.sisi * this.sisi;

        return result;
    }

}


const newPersegi = new Persegi(5)

console.log("PERSEGI :");
console.log("keliling persegi", newPersegi.kelilingPersegi())
console.log( "Luas persegi  ",newPersegi.luasPersegi())

// Persegi Panjang
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


// Trapesium
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
        return (1/2) * (this.sisiA + this.sisiB) * this.tinggi;
    }
}

// Membuat objek trapesium
const trapesiumContoh = new Trapesium(5, 7, 4, 6, 3);



// Menggunakan metode untuk menghitung keliling dan luas
const keliling = trapesiumContoh.kelilingTrapesium();
const luas = trapesiumContoh.luasTrapesium();

console.log("\nTrapesium :");
console.log("Keliling trapesium:", keliling);
console.log("Luas trapesium:", luas);
