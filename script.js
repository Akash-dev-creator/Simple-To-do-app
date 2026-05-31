function createTask(){
     let task= document.getElementById("akash").value;
    if (task.trim() === "") {
    alert("Please enter a task");
    return;
    }
    
      let li = document.createElement("li");
     li.innerText=task;
     
     let completeBtn = document.createElement("button");
    completeBtn.textContent = "done";
    completeBtn.classList.add("complete-btn");


    completeBtn.onclick = function () {
        li.classList.toggle("completed");
    };
    
    
     let delBtn = document.createElement("button");
     delBtn.innerText = " Delete";
     delBtn.className = "delete-btn";
     delBtn.onclick = function () {
      li.remove();
       };
      
       li.appendChild(completeBtn);
       li.appendChild(delBtn);
       
    document.getElementById("deva").appendChild(li);
    document.getElementById("akash").value = "";
      }