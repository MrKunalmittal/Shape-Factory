class Shapes {
    constructor(name ,colour){
        this._name = name;
        this._colour = colour;
    }

    set name (name){
        this._name = name;
    }

    get name() {
        return this._name;
    }

    set color (color) {
      this._color = color;
    }

    get color() {
        return this._color;
    }

    getInfo() {
        return `${this._name} ${this._color}`;
    }
    

}

export { Shapes };