// const north=[0,1];
// const south=[0,-1];
// const east=[1,0];
// const west=[-1,0];


const finalPosition = function (steps) {
  var final=[0,0];

   for (const move of steps){
    //  console.log(move);
    //  console.log(final);
     if( move === "north"){      
       final[0]+=0;
       final[1]+=1;       
     }
     else if( move === "south"){
      final[0]+=0;
      final[1]-=1;
    }else if( move === "east"){
      final[0]+=1;
      final[1]+=0;
    }else {
      final[0]-=1;
      final[1]+=0;
    }//if
    
   }//for
   console.log(final);
   return final;
}

const moves = ['north', 'north', 'west', 'west', 'north', 'east','north']  

finalPosition(moves);