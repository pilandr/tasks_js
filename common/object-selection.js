const workers = [
  {"name":"John","salary":500},
  {"name":"Mike","salary":1300},
  {"name":"Linda","salary":1500}];

    console.log(getWorthyWorkers(workers));


function getWorthyWorkers(worker) {
let total = [];
for (let i=0;i<worker.length;i++){
  if (worker[i].salary > 1000) total.push(worker[i].name);
}
return total;
}