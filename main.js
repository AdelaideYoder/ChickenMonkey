// for (var x=1; x <= 100; x++){
//     if( x % 3 && x % 5 ) {
//         document.write(x);
//     } else {
//         if( x % 3 == 0 ) {
//             document.write("ping");
//         }
//         if( x % 5 == 0 ) {
//             document.write("pong");
//         }
//     }
//     document.write('<br>'); //line breaks to enhance output readability
// }​

// for (var x=1; x <= 100; x++){
//      if ( x % 5 && x % 7 ) {
//     console.log("ChickenMonkey");
// } else {
//     if ( x % 5 === 0 ) {
//      console.log("Chicken");
//  } if ( x % 7 === 0); {
//      console.log("Monkey");
//  } if (x) {
//      console.log(x);
//  }
// }
// }

for (var x=1; x <= 100; x++) {
    if (x % 5 === 0 && x % 7 === 0){
        console.log("ChickenMonkey");
    } if (x % 5 === 0 ) {
        console.log("Chicken");
    } if (x % 7 === 0 ) {
        console.log("Monkey");
    } else {
        console.log(x);
    }
} 