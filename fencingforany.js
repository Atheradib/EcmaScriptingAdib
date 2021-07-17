const FencingForAny = (edges,NumberOfWire,rate) => {
    let sum = 0
    for(let i=0; i<edges.length; i++){
    sum = sum + edges[i];
    }
    return sum*NumberOfWire*rate;
};


console.log(`cost of fencing ${FencingForAny([10,15,45,48,14],5,10)}/-`);


