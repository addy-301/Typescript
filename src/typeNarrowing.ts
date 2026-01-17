function fun(kind: string|number){
    if(typeof kind==='string'){
        return `Have ${kind}.`
    }
    return `Number is ${kind}.`
}

function fun2(msg?: string){
    if(!msg){
        return 'No message provided.'
    }
    return `Message is: ${msg}`;
}

function fun3(size: "small" | "medium" | "large" | number){
    if(size==="small"){
        return "You selected small size."
    }
    else if(size==="medium"){
        return "You selected medium size."
    }
    else if(size==="large"){
        return "You selected large size."
    }
    return `You selected size number ${size}.`   
}


class A{
    fn(){
        return "This is fn in class A."
    }
}

class B{
    fn(){
        return "This is fn in class B."
    }
}

function fn(cls: A | B){
    if(cls instanceof A){
        return cls.fn();
    }
    if(cls instanceof B){
        return cls.fn();
    }
    return "Unknown class instance."
}

type ran={
    type: string
    id: number
}

function process(obj: ran | string):obj is ran{
    if(obj && typeof obj==='object' && 'type' in obj && 'id' in obj){
        return true;
    }
    return false;
}

function exec(item: ran | string){
    if(process(item)){
        return `Object with type: ${item.type} and id: ${item.id}`;
    }
    return `String value: ${item}`;
}

type threat1={
    type: 'threat1'
    level: number
}
type threat2={
    type: 'threat2'
    affected: number
}
type threat3={
    type: 'threat3'
    level: number
}

type vuln=threat1 | threat2 | threat3;

function func(exp: vuln){
    switch(exp.type){
        case 'threat1':
            return `Threat1 with level ${exp.level}`;
        case 'threat2':
            return `Threat2 affecting ${exp.affected}`;
        case 'threat3':
            return `Threat3 with level ${exp.level}`;
    }
}

function test(tst: threat1 | threat2){
    if("level" in tst){
        return `Threat with level ${tst.level}`;
    }
}

function isStringArray(arr:unknown): arr is string[]{
    return Array.isArray(arr) && arr.every(item=>typeof item==='string');
}