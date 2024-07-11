const solution = (a, b)=> {
    let shorterString = '';
    let longerString = '';

    if(a.length === b.length) return 'error';

    if(a.length > b.length) {
        longerString = a;
        shorterString = b;
    } else {
        shorterString = a;
        longerString = b;
    };

    return `${shorterString}${longerString}${shorterString}`;
};


console.log(solution('aaa', 'ccc'));
