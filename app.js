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
  ,
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


const printOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#lookupForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#containorm').removeClass('show');
  $('#updateForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').addClass('show');
};

const verOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#lookupForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#containForm').removeClass('show');
  $('#updateForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#verForm').addClass('show');
};

const lookOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#containForm').removeClass('shown');
  $('#updateForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#lookupForm').addClass('show');
};

const addOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#lookupForm').removeClass('show');
  $('#containForm').removeClass('show');
  $('#updateForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#addForm').addClass('show');
};

const deleteOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#lookupForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#containForm').removeClass('show');
  $('#updateForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#deleteForm').addClass('show');
};

const containOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#lookupForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#updateForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#containForm').addClass('show');
};

const updateOn = (e) => {
  e.preventDefault();
  $('#content').empty();
  $('#verForm').removeClass('show');
  $('#lookupForm').removeClass('show');
  $('#addForm').removeClass('show');
  $('#containForm').removeClass('show');
  $('#deleteForm').removeClass('show');
  $('#printForm').removeClass('show');
  $('#updateForm').addClass('show');
};

//needs to be side nav id
$('#print').on('click', printOn);
$('#verify').on('click', verOn);
$('#lookup').on('click', lookOn);
$('#add').on('click', addOn);
$('#contains').on('click', containOn);
$('#update').on('click', updateOn);
$('#delete').on('click', deleteOn);

$('#printb').on('click', function () {
  $('#content').empty();
  employeeList.forEach(e => {
    render(e.name, e.officeNum, e.phoneNum)
  });
});

$('#contain').on('click', function (e) {
  e.preventDefault();
  $('#content').empty();
  const employeeString = $('#inputC').val();
  for (let i = 0; i < employeeList.length; i++) {
    let currentEmployee = employeeList[i].name;
    let didIFindIt = currentEmployee.indexOf(employeeString);
    if (didIFindIt > -1) {
      $('#content').text(currentEmployee);
    }
  }
});

const verifyIn = (e)  =>{
  e.preventDefault();
  let msg = 'Employee Not Found';
  $('#content').empty();
  verifyInfo = $('#inputV').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (verifyInfo === employeeList[i].name) {
      msg = 'Employee Found';
    }
  }
  $('#content').text(msg);
};

$('#sverify').on('click', verifyIn);

const addEmployee = (e) => {
  e.preventDefault();
  $('#content').empty();
  const employeeName = $('#inputAname').val();;
  const employeeOffice = $('#inputAnum').val();
  const employeeTelephone = $('#inputAp').val();

  var newEmployee = {
    name: employeeName,
    officeNum: employeeOffice,
    phoneNum: employeeTelephone
  }

  employeeList.push(newEmployee);

  for (let j = 0; j < employeeList.length; j++) {
    render(employeeList[j].name)
    render(employeeList[j].officeNum)
    render(employeeList[j].phoneNum)
  }

}
$('#sadd').on('click', addEmployee);


 const updateEmployee =(e) => {
  e.preventDefault();
  $('#content').empty();
  const employeeName = $('#inputUname').val();
  const employeeField = $('#inputUnum').val();
  const employeeValue = $('#inputUp').val();

  if (employeeField === 'office') {
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeName === employeeList[i].name) {
        employeeList[i].officeNum = employeeValue
        employeeList.forEach( e => { $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`) } )
      }

    }
  } else if (employeeField === "phone") {
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeName === employeeList[i].name) {
        employeeList[i].phoneNum = employeeValue
        employeeList.forEach( e => { $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`) } )


      }
    }
  }
}

$('#supdate').on('click', updateEmployee);

const lookupEmployee = (e) =>{
  e.preventDefault();
  $('#content').empty();
  const employeeName = $('#inputL').val();
  for (let i = 0; i < employeeList.length; i++) {
    if (employeeName === employeeList[i].name) {

      employeeList.forEach( e => { $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`) } )
    }
  }
}

    $('#slookup').on('click', lookupEmployee);

  const deleteEmployee = (e) => {
    e.preventDefault();
    const employeeName = $('#inputDname').val()
    for (let i = 0; i < employeeList.length; i++) {
      if (employeeList[i].name === employeeName) {
  
        employeeList.splice(i, 1);
  
        for (let i = 0; i < employeeList.length; i++) {
  
        employeeList.forEach( e => { $('#content').append(`${e.name} ${e.officeNum} ${e.phoneNum}`) } );
        }
      }
    }
  }
    $('#sdelete').on('click', lookupEmployee)