// Code your solution here
function findMatching(drivers,str){
    const res=drivers.filter((driver)=>driver.toLowerCase()==str.toLowerCase())
 return res;
}

function fuzzyMatch(drivers,str){
    const res=drivers.filter((driver)=>driver.startsWith(str))
 return res;
}
function matchName(drivers,str){
    const res=drivers.filter((driver)=>driver.name===str)
 return res;
}