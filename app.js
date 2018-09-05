const employeeList = [
  {
    name: 'Jan',
    officeNum: 1,
    phoneNum: '222-222-2222'
  },
  {
    name: 'Juan',
    officeNum: 304,
    phoneNum: '489-789-8789'
  },
  {
    name: 'Margie',
    officeNum: 789,
    phoneNum: '789-789-7897'
  },
  {
    name: 'Sara',
    officeNum: 32,
    phoneNum: '222-789-4654'
  },
  {
    name: 'Tyrell',
    officeNum: 3,
    phoneNum: '566-621-0452'
  },
  {
    name: 'Tasha',
    officeNum: 213,
    phoneNum: '789-766-5675'
  },
  {
    name: 'Ty',
    officeNum: 211,
    phoneNum: '789-766-7865'
  },
  {
    name: 'Sarah',
    officeNum: 345,
    phoneNum: '222-789-5231'
  }
];

const userCommand = prompt('Enter a command');
  
if (userCommand === "print") {
  for (let i = 0; i < employeeList.length; i++){
    render(employeeList[i].name);
    render(employeeList[i].officeNum);
    render(employeeList[i].phoneNum);
  }
}


 else if (userCommand === "verify") {
  const userVerify = prompt("Enter an employee name");
  for (let i = 0; i < employeeList.length; i++){
    if(userVerify === employeeList[i].name){
      render("true")
    } else {
      render("false")
    }
  }
}


if (userCommand === "lookup") {
  const userLookup = prompt("Enter an employee name");
  for (let i = 0; i < employeeList.length; i++){
    if(userLookup === employeeList[i].name){
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
      render(employeeList[i].phoneNum);
}
  }
}


if (userCommand === "contains") {

  const userContains = prompt("Enter a partial string: ");
    for (let i = 0; i < employeeList.length; i++){
        if (employeeList[i].userContains);
        render (employeeList[i].name);
        render (employeeList[i].officeNum);
        render (employeeList[i].phoneNum);
  }
}


if (userCommand === "update") {
  
  const userName = prompt('Enter an employee to update');
  const userValue = prompt('Enter an updated name');

   for (var i = 0; i < employeeList.length; i++){
    if (userName === employeeList[i].name){
        employeeList[i].name === userValue

        console.log(employeeList);
    }
    render(employeeList[i].name); 
    render(employeeList[i].officeNum); 
    render(employeeList[i].phoneNum); 
}
}
  

if (userCommand === "add") {
      
    const addEmployee = prompt("Enter an employee name to add: ");
    const addOfficeNum = prompt("Enter an office number: ");
    const addPhoneNum = prompt("Enter a phone number: ");
     
      const addToList = {
        name: addEmployee,
        officeNum: addOfficeNum,
        phoneNum: addPhoneNum
      }
      console.log(addToList);

      employeeList.push(addToList);
      
      for (let i = 0; i < employeeList.length; i++) {
        render(employeeList[i].name);
        render(employeeList[i].officeNum);
        render(employeeList[i].phoneNum);
      }
    }
  

    if (userCommand === "delete") {

      const deleteEmployee = prompt("Enter the name of the employee to delete: ");

      for (let i = 0; i < employeeList.length; i++) {
        if (deleteEmployee === employeeList[i].name) {

          delete employeeList[i].name;
          delete employeeList[i].officeNum;
          delete employeeList[i].phoneNum;

          console.log(employeeList);
                    
        }
        render(employeeList[i].name);
        render(employeeList[i].phoneNum);
        render(employeeList[i].officeNum);
   
   }
  }

  
  if (userCommand === "office") {
    const userOffice = prompt("Enter an employee name:");

    for (let i = 0; i < employeeList.length; i++){
      if (userOffice === employeeList[i].name) { 
      render(employeeList[i].name);
      render(employeeList[i].officeNum);
    }
  }
}