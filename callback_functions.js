function foo(bar) {

    if(itsNight){
        bar();
    }

    if(isDrinksEmpty){
        bar();
    }   
}
// foo is a higher order function
// Bar is a call back function
// This will make more sense in event listeners