for (let i = 1; i <= 100; i++) {
	console.log(i); 
}

for (let i = 11; i <= 33; i++) {
	console.log(i); 
}

for (let i = 0; i <= 100; i += 2) {
	console.log(i); 
}

for (let i = 1; i <= 99; i += 2) {
	console.log(i); 
}

for (let i = 100; i >= 0; i--) {
	console.log(i); 
}

let arr = ['a', 'b', 'c', 'd', 'e'];
for (let elem of arr) {
	console.log(elem);
}

let obj = {x: 1, y: 2, z: 3};
for (let key in obj) {
	console.log(key); // выведет 'x', 'y', 'z'
}
for (let key in obj) {
	console.log(obj[key]); // выведет 1, 2, 3
}

let i = 1;

while (i <= 100) {
	console.log(i);
	i++;
}

let i1 = 11;

while (i1 <= 33) {
	console.log(i1);
	i1++;
}

console.log('STOP')

let num = 1;

while (num < 1000) {
	num = num * 3;
}

console.log(num);

let arr1 = ['a', 'b', 'c', 'd', 'e'];

for (let i = 0; i <= arr1.length - 1; i++) {
	console.log(arr1[i]);
}

for (let i = 1; i < arr1.length -1; i++) {
	console.log(arr1[i]);
}

let arr3 = ['a', 'b', 'c', 'd', 'e'];
		
for (let i = 0; i <= arr3.length -1; i++) {
	console.log(arr3[i]);
}

let arr4 = [2, 5, 9, 15, 1, 4];
for (let elem of arr4) {
	if (elem > 3 && elem < 10) {
		console.log(elem);
	}
}

let obj1 = {a: 1, b: 2, c: 3, d: 4, e: 5};
for (let key in obj1) {
	if (obj1[key] % 2 ===0){
	console.log(obj1[key]); // выведет 1, 2, 3
	}
}

let res = 0;

for (let i = 2; i <= 100; i+=2) {
	res = res + i;
}

console.log(res);

let res1=0;
for (let i = 1; i <= 99; i+=2) {
	res1 = res1 + i;
}

console.log(res1);

let res2=1;
for (let i = 1; i <= 20; i++) {
	res2 = res2 * i;
}

console.log(res2);

let arr5 = [2, 5, 9, 3, 1, 4];
let res3 = 0;

for (let elem of arr5) {
	res3 += elem;
}

console.log(res3);
let res4 = 0;
for (let elem of arr5) {
	if (elem % 2 ===0){
	res4 += elem;
	}
}
console.log(res4);
let res5 = 0;
for (let elem of arr5) {
	res5 += elem**2;
}
console.log(res5);

let str = '';

for (let i = 0; i < 5; i++) {
	str += '-';
}

console.log(str); 

let str1 = '';

for (let i = 1; i <= 9; i++) {
	str1 += i;
}

console.log(str1); // выведет '12345'

let str2 = '';

for (let i = 1; i <= 9; i--) {
	str2 += i;
}

console.log(str2); // выведет '12345'