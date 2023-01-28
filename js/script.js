// 3. Выберите любой встроенный класс JS на ваш выбор 
// и расширьте его функциональность

Object.prototype.consoleThis = () => {
    console.log(this);
};

let obj = {};
obj.consoleThis();

// 4. Создайте класс описывающий сущность вашего хобби

class Hobby {
    static benefits = ['Cool', 'Pastime']

    static sortBy (param) {
        return (a, b) => a[param] > b[param] ? 1 : -1;
    }

    static createNewHobbieType (name) {
        return class newHobby extends Hobby {
            static benefits = [...super.benefits]

            constructor (options) {
                super({name: name, ...options});
                let {discription = 'None discription'} = options;
                this.discription = discription; 
            }

            addAuthorBenefits (benefits) {
                newHobby.benefits.push(benefits);
            }
        };
    }

    constructor ({name = 'У хобби нет названия', year}) {
        this.name = name;
        this.startYear = year;
    }

    get startYear () {
        return this._year;
    }

    set startYear (value) {
        let now = new Date(); 
        if (value <= now.getFullYear() && value > now.getFullYear() - 100) {
            this._year = +value;
        } else {
            console.log('Не верный год');
            return;
        }
    }

    durationHobby () {
        if (this.startYear) {
            return new Date().getFullYear() - this.startYear;
        } else {
            throw new Error('Не известна дата начала');
        }
    }

}

let HobbyGym = Hobby.createNewHobbieType('gym');

let gym = new HobbyGym({year: 2004});

class circleRide extends Hobby {
    static benefits = [...super.benefits, 'metabolism accelerates', 'oxygen supply to organs improves']

    constructor(options) {
        super({name: 'Circle', year: options.year});
        let {discription = 'None discription'} = options;
        this.discription = discription; 
    }
}







