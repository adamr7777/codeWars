

const smaller = (nums)=> {
    return nums.map((item, itemIndex)=> {
        let times = 0;
        nums.forEach((element, elementIndex)=>{
            if(itemIndex >= elementIndex) return;
            if(item > element) ++times;
        });
        return times;
    });
};


console.log(smaller([5, 4, 3, 2]));
