let subs: number | string='1M'; //union type, can hold number or string

let status: 'pending' | 'success' | 'error'='pending'; //literal type, can hold only specific string values

let seat: 'aisle'|'window'|'middle'='aisle'; //literal type for seat positions

seat='window'; //valid

const orders=['12', '14', '26', '28']
let currOrder: string | undefined; // Avoid any ]
//let currOrder; Avoid using any type
for(let x of orders){
    if(x==='28'){
        currOrder=x;
        break;
    }
}
console.log(currOrder)  