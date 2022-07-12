for (var n = 2;n<=9;n++){
    console.log('====' ,n,'단 시작 ====');
    for (var i =1;i<=9; i++){
        console.log(n, "*", i, "=", 2*i);
    }
}


const date = new Date(2017, 9, 3, 18, 20, 30);
console.log('date : %s', date.toLocaleString());
console.log('LocaleDateString : %s', date.toLocaleDateString());
console.log('LocaleTimeString : %s', date.toLocaleTimeString());

console.log('year : %s', date.getFullYear());
console.log('month : %s', date.getMonth());
console.log('date : %s', date.getDate());
console.log('hours : %s', date.getHours());
console.log('minutes : %s', date.getMinutes());
console.log('seconds : %s', date.getSeconds());



const maxResult = Math.max(95, 80, 88, 79, 50);
const minResult = Math.min(95, 80, 88, 79, 50);

function sum(a,b){
    return a+b;
}

function average(a,b){

    return (a+b)/2;
}

console.log('max : ', maxResult);
console.log('min : ', minResult);
console.log('sum : ', sum(maxResult, minResult));
console.log('average : ', average(maxResult, minResult))


const students = [
    {name : 'kyeongrok', score:85},
    {name: 'jihyun', score: 95},
    {name: 'minsup', score: 76}
];

function getDegree(score){
    if(score >= 90){
        return 'A';
    } else if (score >=80){
        return 'B';
    } else if (score>=60){
        return 'C';
    } else {
        return 'F';
    }
}

students.forEach((k )=> {
    const result = `name: ${k.name}, score: ${getDegree(k.score)}`;
    console.log(result);
})