/**
  Square Number

  Diberikan sebuah function squareNumber dimana menerima inputan berupa number.
  Function ini akan mengembalikan array multidimensi yang isi value tersebut secara
  proses menyerupai `board snakes and ladders` (angka 1 dimulai dari KOLOM ATAS) TAPI
  alih-alih menuliskan value angka kamu akan menuliskan simbol/karakter dengan syarat sebagai berikut:
  - jika value merupakan bilangan genap maka diganti menjadi karakter 'o'
  - jika value merupakan bilangan ganjil maka diganti menjadi karakter 'x'
  - jika value merupakan kelipatan 4 maka diganti menjadi simbol '#'

  Contoh 1:
  ==========
  input: 3
  proses:
          [
            [ 1, 2, 3 ],
            [ 6, 5, 4 ],
            [ 7, 8, 9 ]
          ]
  output:
          [
            [x, o, x],
            [o, x, #],
            [x, #, x]
          ]

  Contoh 2:
  ==========
  input: 4
  proses:
        [
          [ 1, 2, 3, 4 ],
          [ 8, 7, 6, 5 ],
          [ 9, 10, 11, 12 ],
          [ 16, 15, 14, 13 ]
        ]
  output:
        [
          [ x, o, x, # ],
          [ #, x, o, x ],
          [ x, o, x, # ],
          [ #, x, o, x ]
        ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
**/


function squareNumber(num) {
    let nums = []
    let count = 1
    if (num < 3) return `Minimal input adalah 3`;
    for (i = 0; i < num; i++){
        nums[i] = [];
        for (j = 0; j < num; j++){
            nums[i][j] = count++;        
        }
    }

    for (i =0; i <= nums.length-1; i++){
        for (j = 0; j <= nums[i].length-1; j++){
            if (nums[i][j] % 2 === 0) {
                if (nums[i][j] % 4 === 0) nums[i][j] = '#';
                else if (nums[i][j] % 4 !== 0) nums[i][j] = 'o';
            } else nums[i][j] = 'x';
        }
    }
    return nums;
  }
  
  console.log(squareNumber(3));
  // [ [x, o, x],  [o, x, #], [x, #, x] ]
  
  console.log(squareNumber(4));
  // [ [ x, o, x, # ],
  //   [ #, x, o, x ],
  //   [ x, o, x, # ],
  //   [ #, x, o, x ] ]
  
  console.log(squareNumber(5));
  // [ 
  //   [ x, o, x, #, x ],
  //   [ o, x, #, x, o ],
  //   [ x, o, x, #, x ],
  //   [ #, x, o, x, # ],
  //   [ x, o, x, #, x ] 
  // ]