
let isDone: boolean = false;

let num: number = 1;

let myName: string = 'tom';

let info: string = `info: ${myName}`;

console.log(info);

function fuck(persion: string): void {
    alert('fuck!');
}

let u: undefined = undefined;
let n: null = null;

let a: void = u;
console.log(a)


let c: any = 'fuck';
c = 1;

let d;
d = 'ddd';
d = 1001;

let c1: number | string;
c1 = 'sa';
console.log(c1.length);

interface Person {
    readonly id: number;
    name: string;
    age?: number;
    [propName: string]: any
}

let tom: Person = {
    id: 1001,
    name: 'tom',
    age: 1001,
    fuck: 'caonima',
}
console.log(tom.fuck)

let nums: number[] = [1, 2, 3, 4, 5, 6];
let nums1: Array<number> = [1, 2, 3, 4, 5, 6];

let nums2: Array<string> = ['f', 'u', 'c', 'k'];

interface NumArray {
    id: number;
    name: string;
}

let fucks: NumArray[] = [{ id: 1, name: 'fuck1' }, { id: 2, name: 'fuck2' }]

fucks.forEach(element => {
    console.log(element)
});

let c3: string = 'c3';
let result: boolean = typeof c3 === 'string';
console.log(result);

type fuck4 = string;
let fuckInfo: fuck4 = 'info';

let yuaznu: [number, string, string, number] = [1, 'f', 'u', 2];