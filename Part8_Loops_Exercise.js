/// PART 8 - LOOP EXERCISES

//Here I have just two problems, but you'll need to use each loop type we
// learned about to solve them!



//// PROBLEM 1 ///

// Using a For Loop , print (console.log()) out the word "hello" 5 times.
//
// I will  done this with a While Loop and a For Loop

// While Loop
var x=5
while(x>0){
        console.log("hello");
        x=x-1;
}

// For Loop


for (var i = 0; i < 5; i++) {
        console.log("hello");
}



// PROBLEM 2 ///
///////////////

// Using Loops to console.log() (print out) all the odd numbers from 1 to 25
// I will do  this using two methods, a while loop and a for loop

// METHOD ONE
// While Loop
var x=0;
while (x<25) {
        if (x%2 == 1) {
                console.log(x);
        }
        x=x+1;
}

// METHOD TWO
// For Loop
for (var i = 0; i <=25; i++) {
        if (i%2 == 1) {
                console.log(i);
        }
}
