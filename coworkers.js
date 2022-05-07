   var coworkers = {
  
  "programmer" : "egoing",
  "designer" : "leezha"
  
};

document.write("programmer :"+ coworkers.programmer+"<br>");
document.write("designer :"+ coworkers.designer+"<br>");
coworkers.bookkeeper = "dura";
document.write("bookkeeper :"+ coworkers.bookkeeper+"<br>");
coworkers["data scientist"] = "taeho";
document.write("data scientistr :"+ coworkers["data scientist"]+"<br>"+"<br>");


for(var key in coworkers ){
    document.write(key+':'+coworkers[key]+"<br>")
  
}


coworkers.showALL = function(){
  for(var key in this ){
    document.write(key+':'+this[key]+"<br>")
  
}
  
}

coworkers.showALL();
 
