function Bird() {
       let weight = 15
       this.getWeight = function () {
              return weight
       }
}

let duck = new Bird()
duck.getWeight()