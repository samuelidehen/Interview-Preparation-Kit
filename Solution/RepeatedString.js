
//Solution 1//
function RepeatedString(s,n){
    let newStr = s;
    let count = 0;
    (s.length ==1 && s =="a") ? count=n : count;
    
    while(newStr.length <= n){
      newStr += s;
    }
     newStr = newStr.slice(0,n).split('').forEach(a => {if(a=="a"){count++;}});
    
    return count;
  }
  
  RepeatedString('abcac',10)
  //Output = 7;


// Solution 2//
function RepeatedString(s,n){
const numOfRepeats = Math.floor( n / s.length );

// additional number of strings to get to the limit n
const remainderString = n % s.length;

// find number of matches in a string
let matches = ( s.match(/a/g) || [] ).length;

// multiply number of matches in a string with number of repeatations
matches = matches * numOfRepeats;

// find number of matches in remainder string
const remainderMatches = (s.substring(0,remainderString).match(/a/g) || [] ).length;

// add it up
return matches + remainderMatches;

}
RepeatedString('abcac',10)
//Output = 7;

