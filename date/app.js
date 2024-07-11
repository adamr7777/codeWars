const findYear = (month, dayOfWeek)=> {
    let year = 0;

    for(let i=2014; i<=2050; i++) {
        const current = new Date(i, month, 1);

        if(current.getDay() === dayOfWeek) {
            year = i;
            break;
        };
    };
    return year;
};


console.log('vim the best!');


