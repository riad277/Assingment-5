const today=new Date();
const lastDate = today.toDateString();
const cDate=document.getElementById('today');
cDate.innerHTML=lastDate;