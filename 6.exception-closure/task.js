function parseCount(number) {
    let numberAfterParse = Number.parseInt(number);
    if (isNaN(numberAfterParse)) {
        throw new Error("Невалидное значение");
    }
    return numberAfterParse;
}

function validateCount(number) {
    try {
        return parseCount(number);
    } catch (e) {
        return e;
    }
}

// 2
class Triangle {
    constructor(a, b, c) {
        this.a = a;
        this.b = b;
        this.c = c;
        if (this.a === undefined || this.b === undefined || this.c === undefined ||
            this.a + this.b < this.c || this.a + this.c < this.b ||
            this.b + this.c < this.a)
            throw new Error("Треугольник с такими сторонами не существует");
    }

    getPerimeter() {
        return this.a + this.b + this.c;
    }

    getArea() {
        let per = this.getPerimeter() / 2;
        let area = Math.sqrt(per * (per - this.a) * (per - this.b) * (per - this.c));
        return +area.toFixed(3);
    }
}

function getTriangle(a, b, c) {
    try {
        return new Triangle(a, b, c);
    } catch (err) {
        return {
            getArea() {
                return 'Ошибка! Треугольник не существует';
            },
            getPerimeter() {
                return 'Ошибка! Треугольник не существует';
            },
        };
    }
}

let tr = new Triangle(1, 2, 3);