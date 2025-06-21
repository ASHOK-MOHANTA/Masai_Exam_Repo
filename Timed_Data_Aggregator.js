const logs = [
  { user: "Alice", duration: 5, activity: "Search" },
  { user: "Bob", duration: 3, activity: "View Product" },
  { user: "Alice", duration: 2, activity: "Add to Cart" },
  { user: "Charlie", duration: 7, activity: "Checkout" },
  { user: "Bob", duration: 1, activity: "Search" },
  { user: "Charlie", duration: 4, activity: "View Product" },
];

let totalDurationPerUser = logs.reduce((result,log)=>{
    result[log.user] = (result[log.user] || 0) + log.duration;
    return result;
},{});

let activeusers = Object.entries(totalDurationPerUser).filter(([user,totalduration])=>totalduration > 5)
.map(([user]) => user);

let totalDuration = logs.reduce((sum, log) => sum + log.duration, 0);
let averageDuration = totalDuration / logs.length;

setTimeout(()=>{
    console.log("Total Duration Per User:", totalDurationPerUser);
    console.log("Active Users (>5 min):", activeusers);
    console.log("Avg Session Duration:", averageDuration.toFixed(2));
},2000)
