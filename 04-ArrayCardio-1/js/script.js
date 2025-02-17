const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
];
// ------------------1------------------

// const fifteen=inventors.filter(inventors=>(inventors.year >=1500 && inventors.year<1600));
// console.table(fifteen)

// ------------------2------------------

// const fullNames=inventors.map(inventors => `${inventors.first} ${inventors.last}`);
// console.table(fullNames)

// ------------------3-------------------

// const sorted=inventors.sort(function(a,b){
//     if (a.year > b.year){
//         return 1;
//     }else{
//         return -1;
//     }
// });

// const sorted=inventors.sort((a,b) => a.year > b.year ? 1 :-1)
// console.table(sorted)

// ------------------4-----------------

// let totalYears=0;
// let passedYears=0;

// for(let i=0;i<inventors.length;i++){
//     totalYears+=inventors[i].year;
// }
// console.log(totalYears)
// for(let i=0;i<inventors.length;i++){
//     passedYears+=inventors[i].passed;
// }
// console.log(passedYears)
// console.log(passedYears-totalYears)


// const totalYears=inventors.reduce((total,inventors) => {
//     return total + (inventors.passed - inventors.year);},0);

// console.log(totalYears)

// -----------------5------------------

// const oldest = inventors.sort((a,b) => {
//     const lastGuy=a.passed - a.year;
//     const nextGuy=b.passed - b.year;
//     if(lastGuy>nextGuy){
//         return -1;
//     }else{
//         return 1;
//     }
// });

// const oldest= inventors.sort((a,b)=>{
//     const lastGuy=a.passed-a.year;
//     const nextGuy = b.passed-b.year;
//     return lastGuy>nextGuy ? -1 : 1 ;
// } )
// console.table(oldest)

// ----------------6--------------------

// const alpha=people.sort(function(lastOne,nextOne){
//     const [alast, afirst]= lastOne.split(", ");
//     const [blast, bfirst]= nextOne.split(", ");
//     return alast > blast ? 1: -1;

// });
// console.log(alpha);

// const alpha=people.sort((lastOne,nextOne)=>{
//     const [alast,afirst]=lastOne.split(", ");
//     const [blast,bfirst]=nextOne.split(", ");
//     return alast>blast?1:-1;
// });

// console.log(alpha)

// -----------------7----------------------

// const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

// const transportation=data.reduce((obj,item)=>{
//     if(!obj[item]){
//         obj[item]=0;
//     }
//     obj[item]++;
//     return obj;
// },{});

// console.log(transportation)