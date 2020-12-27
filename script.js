money=0
clicksPerJob=0
job='Unemployed'
inventory=[]
document.getElementById('job').innerHTML=job
function workhard(){
  if (job=='Unemployed'){
    document.getElementById('info').innerHTML="You don't have a job!";
  }
  if(job=='Taxi Driver'){
    if(inventory.includes('Car')){
      money=money+9;
      clicksPerJob=clicksPerJob+20;
      document.getElementById('money').innerHTML=money.toString();
      document.getElementById('moneyPerClick').innerHTML='$20';
    }
    else{
      document.getElementById('info').innerHTML='You must own a car to be a Taxi Driver. Buy one in the shop.';
    }
  }
  if(job=='McDonalds'){
    money=money+9;
    clicksPerJob=clicksPerJob+1;
    document.getElementById('money').innerHTML=money.toString();
    document.getElementById('moneyPerClick').innerHTML='$9';
  }
  if(job=='Junior Developer'){
    if(inventory.includes('Laptop')){
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
    else{
      document.getElementById('info').innerHTML='You must own a laptop to be a Junior Developer. Buy one in the shop.';
    }
  }
  if(job=='Senior Developer'){
    if(inventory.includes('Laptop')){
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
    else{
      document.getElementById('info').innerHTML='You must own a laptop to be a Senior Developer. Buy one in the shop.';
    } 
  }
  if(job=='Lead Developer'){
    if(inventory.includes('Laptop')){
      money=money+150;
      clicksPerJob++;
      document.getElementById('money').innerHTML=money.toString();
      document.getElementById('moneyPerClick').innerHTML='$150';
    }
    else{
      document.getElementById('info').innerHTML='You must own a laptop to be a Lead Developer. Buy one in the shop.';
    }
  }
}
function setJob(newJob){
  job=newJob;
  clicksPerJob=0;
  document.getElementById('job').innerHTML=job
  document.getElementById('info').innerHTML="You now work as a: "+job;
}
function buy(item){
  inventory.push(item);
  if (item=='Laptop'){
    money=money-250;
    document.getElementById('money').innerHTML=money.toString();
  }
  if (item=='Car'){
    money=money-10000;
    document.getElementById('money').innerHTML=money.toString();
  }
}