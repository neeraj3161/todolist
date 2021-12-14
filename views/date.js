// console.log(module);
// creating a date module and requiring it in our main index.ejs file

module.exports=getDate;


function getDate(){
    var newDate=new Date();
    var getting_date=(newDate.getDate());
    var month=newDate.getMonth()+1;
    var year=newDate.getFullYear();
    var completeDate=getting_date + "/"+ month+"/"+year
    var days=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday']
    var day=newDate.getDay();
    var final_day=days[day]
    return completeDate;
}