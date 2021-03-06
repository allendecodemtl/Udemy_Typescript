var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
{ // Exercise 1 - How was your TypeScript Class?
    var Car = /** @class */ (function () {
        function Car(name) {
            this.name = name;
            this.acceleration = 0;
        }
        Car.prototype.honk = function () {
            console.log("Toooooooooot!");
        };
        Car.prototype.accelerate = function (speed) {
            this.acceleration += speed;
        };
        return Car;
    }());
    var car = new Car("BMW");
    car.honk();
    console.log(car.acceleration);
    car.accelerate(10);
    console.log(car.acceleration);
    // Exercise 2 - Two objects, based on each other ...
    // var baseObject = {
    //     width: 0,
    //     length: 0
    // };
    // var rectangle = Object.create(baseObject);
    // rectangle.width = 5;
    // rectangle.length = 2;
    // rectangle.calcSize = function() {
    //     return this.width * this.length;
    // };
    // console.log(rectangle.calcSize());
    var BaseObject = /** @class */ (function () {
        function BaseObject() {
            this._width = 0;
            this._length = 0;
        }
        Object.defineProperty(BaseObject.prototype, "width", {
            get: function () {
                return this._width;
            },
            set: function (value) {
                this._width = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(BaseObject.prototype, "length", {
            get: function () {
                return this._length;
            },
            set: function (value) {
                this._length = value;
            },
            enumerable: true,
            configurable: true
        });
        return BaseObject;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Rectangle.prototype.calcSize = function () {
            return this.width * this.length;
        };
        return Rectangle;
    }(BaseObject));
    var rect = new Rectangle();
    rect.width = 5;
    rect.length = 20;
    console.log(rect.calcSize());
    // Exercise 3 - Make sure to compile to ES5 (set the target in tsconfig.json)
    // var person = {
    //     _firstName: ""
    // };
    // Object.defineProperty(person, "firstName", {
    //     get: function () {
    //         return this._firstName;
    //     },
    //     set: function (value) {
    //         if (value.length > 3) {
    //             this._firstName = value;
    //         }
    //         else {
    //             this._firstName = "";
    //         }
    //     },
    //     enumerable: true,
    //     configurable: true
    // });
    // console.log(person.firstName);
    // person.firstName = "Ma";
    // console.log(person.firstName);
    // person.firstName = "Maximilian";
    // console.log(person.firstName);
    // Exercise 3
    var Person = /** @class */ (function () {
        function Person() {
            this._firstName = "";
        }
        Object.defineProperty(Person.prototype, "firstName", {
            get: function () {
                return this._firstName;
            },
            set: function (name) {
                this._firstName = name;
            },
            enumerable: true,
            configurable: true
        });
        return Person;
    }());
    var p = new Person();
    console.log(p.firstName);
    p.firstName = "Ma";
    console.log(p.firstName);
    p.firstName = "Maximilian";
    console.log(p.firstName);
    // console.log(person.firstName);
    // person.firstName = "Ma";
    // console.log(person.firstName);
    // person.firstName = "Maximilian";
    // console.log(person.firstName);
}
