//Solution 1//
function jumpingOnClouds(c) {
    let jump =  0;
      for(var i =0 ; i< c.length ; i++){
        if(c[i+1]===0){
          if(c[i+2]===0){
            
            jump +=1;
            i++;
          }else if(c[i+2]===1){
            jump +=1;
            
          }else if(c[i+2]== undefined){
            jump +=1;
          }
        }
        if(c[i+1] === 1){
          jump += 1;
          i++;
         
        }
      }
      
      return jump;
    
    }

    jumpingOnClouds([0 ,0 ,0 ,1 ,0 ,0]);
    //Output = 3;

    //Solution 2//


function jumpingOnClouds(c) {
    var n = 0;
    for (var i = 0; i < c.length - 1;) {
      i += (c[i+2] ? 1 : 2);
      n++;
    }
    return n;
  }
    
  
 jumpingOnClouds([0,1,0,0,0,1,0]);
 //Output = 3;
