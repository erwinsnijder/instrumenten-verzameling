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
    this.merk = merk;
    this.kleur = kleur;
   }
}

let drumstel1 = new drumstel ('bob', 'groen');
let drumstel2 = new drumstel('marley', 'geel');

let instrumenten = [];

instrumenten.push(gitaar1, gitaar2, drumstel1, drumstel2);

console.log(instrumenten)
