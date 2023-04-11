const submitbtn=document.getElementById('submitid');

submitbtn.addEventListener('click',passwordChecking);

async function passwordChecking(event)
{
    event.preventDefault();
    const newpass=document.getElementById('new_password').value;
    const confirmpassword=document.getElementById('confirmpassword').value;
    passobj={
        newpass
    }
   
    if(newpass===confirmpassword)
    {
        const userid=localStorage.getItem("forgetuserid");
        console.log("dd"+userid);
      const output= await axios.put(`http://13.230.79.168:4000/setnewpassword/${userid}`,passobj);

    }else{
        console.log("Password are not matched");
    }
}




