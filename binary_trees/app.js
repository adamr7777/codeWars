

const array = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]]

const start = (node)=> {
    if(!node.length) return console.log(node);

    node.forEach((child)=> {
        start(child);
    });
};


start(array);


// const test = (item)=> {
//     if(!item.length) return console.log('no');

//     console.log('success!');
// };

// test([]);