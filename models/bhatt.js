//model

const catData = require('../data');

class Cat{
    constructor(data){
        this.id = data.id;
        this.name = data.name;
        this.age = data.age;
    }

    static get all() {
        const cats = catsData.map((cat) => new Cat(cat));
        return cats;
    }

    static findBy(id) {
        const catData = catsData.filter((cat) => cat.id === id)[0];
        const cat = new Cat(catData);
        return cat;
    }
}


module.exports = Cat;