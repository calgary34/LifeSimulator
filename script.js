money=0
clicksPerJob=0
job='Unemployed'
inventory=[]
document.getElementById('job').innerHTML=job
function workhard(){
  if (job=='Unemployed'){
    document.getElementById('info').innerHTML="You don't have a job!";
  }
  if(job=='McDonalds'){
    money=money+9;
    clicksPerJob=clicksPerJob+1;
    document.getElementById('money').innerHTML=money.toString();
    document.getElementById('moneyPerClick').innerHTML='$9';
  }
  if(job=='Junior Developer'){
    money=money+30;
    clicksPerJob=clicksPerJob+1;
    document.getElementById('money').innerHTML=money.toString();
    document.getElementById('moneyPerClick').innerHTML='$30';
    if(clicksPerJob==2){
      temp=document.getElementById('jobs').innerHTML;
      document.getElementById('jobs').innerHTML=temp+"<li onclick='setJob(\"Senior Developer\")'>Senior Developer ($99 per click)</li>";
      document.getElementById('info').innerHTML="You can now click 'Senior Developer' in the job list and get a higher pay!";
    }
  }
  if(job=='Senior Developer'){
    money=money+99;
    clicksPerJob++;
    document.getElementById('money').innerHTML=money.toString();
    document.getElementById('moneyPerClick').innerHTML='$99';
    if(clicksPerJob==2){
      temp=document.getElementById('jobs').innerHTML;
      document.getElementById('jobs').innerHTML=temp+"<li onclick='setJob(\"Lead Developer\")'>Lead Developer ($150 per click)</li>";
      document.getElementById('info').innerHTML="You can now click 'Lead Developer' in the job list and get a higher pay!";
    }
  }
  if(job=='Lead Developer'){
    money=money+150;
    clicksPerJob++;
    document.getElementById('money').innerHTML=money.toString();
    document.getElementById('moneyPerClick').innerHTML='$150';
  }
}
function setJob(newJob){
  job=newJob;
  clicksPerJob=0;
  document.getElementById('job').innerHTML=job
  document.getElementById('info').innerHTML="You now work as a: "+job;
}