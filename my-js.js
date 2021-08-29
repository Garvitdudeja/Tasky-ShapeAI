const taskContainer = document.querySelector('.task__container');
console.log(taskContainer);

const addNewCard = () => {



  const taskData = {
    id: `${Date.now()}`,
    title: document.getElementById("tasktitle").value,
    type: document.getElementById("tasktype").value,
    description: document.getElementById("taskdescription").value,
    image: document.getElementById("imageurl").value
  };

  
  const taskContainer = document.querySelector(".task__container");
  console.log(taskContainer);
  console.log(taskContainer);
  console.log(taskContainer);
  console.log(taskContainer);
  console.log(taskContainer);
  
  

  //HTML DOM manipulator

  const newCard = `<div  id=${taskData.id} class="col-sm-12 col-md-6 col-lg-4">
  <div class="card">
    <div class="card-header d-flex justify-content-end gap-2">
      <button type="button" class="btn btn-outline-primary"><i class="fas fa-pencil-alt"></i></button>
      <button type="button" class="btn btn-outline-danger"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="card-body">
      <img src=${taskData.image}
      class="card-img-top" alt="">
      <h5 class="card-title mt-3">${taskData.title}</h5>
      <p class="card-text">${taskData.description}</p>
      <a href="#" class="btn btn-primary fw-bold">${taskData.type}</a>
    </div>
    <div class="card-footer">
      <button class="btn btn-outline-primary">Open Task</button>
    </div>
  </div>
  </div>
</div>`


  taskContainer.insertAdjacentHTML('beforeend', newCard);

  //clear modal form

    document.getElementById("tasktitle").value= "";
    document.getElementById("tasktype").value="";
    document.getElementById("taskdescription").value= "";
    document.getElementById("imageurl").value= "";


    return;


};

const LoadIntialData= () =>{
  
}

console.log(taskContainer);
