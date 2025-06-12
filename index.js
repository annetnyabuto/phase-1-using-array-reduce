const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here
//total is the accumulator
const totalBatteries = batteryBatches.reduce(function(total,batch){
    return total + batch;
},
0);// initialize the total
