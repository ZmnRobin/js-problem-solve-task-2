let person=[
    {
        name: "Sunil",
        age: 21,
        temparature: 98,
    },
    {
        name: "Raj",
        age: 22,
        temparature: 98,
    },
    {
        name: "Rajesh",
        age: 23,
        temparature: 98,
    },
    {
        name: "Biplab",
        age: 24,
        temparature: 98,
    },
    {
        name: "Sourav",
        age: 25,
        temparature: 98,
    },
    {
        name: "Ali Hasan",
        age: 34,
        temparature: 98,
    },
    {
        name: "Raju",
        age: 35,
        temparature: 106,
    },
    {
        name: "Ali Raj",
        age: 36,
        temparature: 98,
    },
    {
        name: "Raju",
        age: 45,
        temparature: 98,
    },
    {
        name: "Robin",
        age: 47,
        temparature: 98,
    },
    {
        name: "Raja",
        age: 48,
        temparature: 100,
    },
    {
        name: "Rahim",
        age: 49,
        temparature: 107,
    }
];


const vaxTrail=(person)=>{
    let A=[];
    let B=[];
    let C=[];
    let D=[];
    let obj={};

    //loop for checking checking all index of temparature and age
    for(let i=0;i<person.length;i++){
        if(person[i].temparature<100 && person[i].age>=20 && person[i].age<=30){
            A.push(person[i]);
        }
        else if(person[i].temparature<100 && person[i].age>=31 && person[i].age<=40){
            B.push(person[i]);
        }
        else if(person[i].temparature<100 && person[i].age>=41 && person[i].age<=50){
            C.push(person[i]);
        }
        else if(person[i].temparature>=100){
            D.push(person[i]);
        }
        else{
            console.log("No one is eligible for vaccination trail");
        }
    }
    
    obj.A=A;
    obj.B=B;
    obj.C=C;
    obj.D=D;
    return obj;
}

let result=vaxTrail(person);
console.log(result);