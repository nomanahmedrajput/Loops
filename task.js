// var a:number = 5;
// var arr:string[] = ['this', 'is', 'array'];
// arr.forEach(function(index){
//     console.log('i = ', index);
// })
// var num:number[]=[1,2,3];
// let b=num.map(function(a){
//     return console.log("updated array : ",a+4);;
// })
// // console.log('initial array : ', num)
// // console.log("updated array : ",b);
// let arrofobj=[{
//     name:"laptop",
//     model:"y11b",
//     size:11
// },
// {
//     name:"laptop2",
//     model:"corem",
//     size:21
// },
// {
//     name:"laptop3",
//     model:"b11c",
//     size:13
// },
// ]
// for filter use this code.
// let val= arrofobj.filter(function(arrofobj_fil){
//         return arrofobj_fil.size > 13;
//     })
// for to get just size, name, or model from the array of object use this code. 
// let val= arrofobj.map(function(arrofobj_val){
//     return arrofobj_val.size;
// })
// console.log("Value of array of obj",val)
var subjects = [{
        ID: 1,
        classs: "BS(IT)",
        sub: 'English',
        sub2: 'Fundamentals of computer',
        sub3: 'Math'
    },
    {
        ID: 2,
        classs: "BS(IT)",
        sub: 'English',
        sub2: 'Fundamentals of computer',
        sub3: 'Math'
    },
    {
        ID: 3,
        classs: "BS(IT)",
        sub: 'English',
        sub2: 'Fundamentals of computer',
        sub3: 'Math'
    },
];
// let val = subjects.map(function(a){
//         return a.ID;
// let val = subjects.filter(function(filtered_Value){
//     return filtered_Value.ID > 2;
// })
var val = subjects.forEach(function (obj) {
    console.log(obj);
});
//# sourceMappingURL=task.js.map