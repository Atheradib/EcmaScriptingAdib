const FencingRectPrice =(b,w,NumberofWire,CostPerFeet) =>{
    const perimeter=b+w+b+w ;
    const TotalCost = perimeter* NumberofWire* CostPerFeet;
    return TotalCost

}

console.log(`Total cost of fencing ${FencingRectPrice(15,12,5,12)}`);

const FencingTriPrice =(h,b,a,NumberofWire,CostPerFeet) =>{
    const perimeter=h+b+a ;
    const TotalCost = perimeter* NumberofWire* CostPerFeet;
    return TotalCost
}

    console.log(`Total cost of fencing ${FencingTriPrice(15,12,14,5,12)}`);