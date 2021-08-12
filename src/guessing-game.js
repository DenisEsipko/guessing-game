class GuessingGame {
    constructor() {
        this.min = null;
        this.max = null;
        this.answer = null;
    }

    //Этот метод принимает мин и максимальное значение диапазона номера, чтобы угадать
    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

//Этот метод возвращает кандидата решения
// (вы делаете предположение на основе диапазона и предыдущих допущений)
    guess() {
        this.answer = Math.round((this.max  + this.min) / 2);
        return this.answer;
    }

    //Этот метод называется, если REV Call of Heggn () возвращаемый номер, который больше, чем ответ
    lower() {
        this.max = this.answer;
    }

    //Этот метод называется, если предыдущий звонок догадается () возвращаемый номер, который ниже ответа
    greater() {
        this.min = this.answer;
    }
}

module.exports = GuessingGame;
