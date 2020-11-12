const tomb = [6, 5, 9, 1, 3, 11, 7];

function linearSearchMin(arr) {
    
    let min = arr[0];

    for (let i = 0; i < arr.length; i += 1){
        
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    console.log('A tömb elemeinek minimuma: ', min); 
} 

linearSearchMin(tomb);

let minimum = Math.min(333, 1, -4, 5, 10, 3, 200, 11, 9);
console.log(minimum);
console.log('------------------');

function linearSearchMax(arr) {
    
    let max = arr[0];

    for (let i = 0; i < arr.length; i += 1){
        
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log('A tömb elemeinek maximuma: ', max); 
} 

linearSearchMax(tomb);

let maximum = Math.max(333, 1, -4, 5, 1000, 3, 2100, 11, 9);
console.log(maximum);