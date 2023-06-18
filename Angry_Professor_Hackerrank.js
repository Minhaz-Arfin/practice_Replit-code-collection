let arr = [1,2,-1,-2,-3];
function angryProfessor(k, a) {
    let count = [];
    for(let i=0; i<a.length; i++){
      if(a[i]<= 0){
        count.push(a[i]);
      }
    }
  if(count.length< k){
    return "YES";
  } else {
    return "NO"
  }

}
let result = angryProfessor(2,arr);
console.log(result);