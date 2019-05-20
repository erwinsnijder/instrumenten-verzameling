  class gitaar {
    constructor(merk, kleur) {
    this.merk = merk;
    this.kleur = kleur;
    }
}

let gitaar1 = new gitaar('Harley', 'rood');
let gitaar2 = new gitaar('Davidson', 'zwart');

class drumstel {
  constructor(merk, kleur) {
    this.merk = kleur;
    this.kleur = merk;
   }
}

let instrumenten = [];

instrumenten.push(gitaar1, gitaar2);

console.log(instrumenten)
