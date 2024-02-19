const empleados = [
    {
        id : 1,
        nombre : "Carlos"
    },
    {
        id : 2,
        nombre : "Carlitos"
    },
    {
        id : 3,
        nombre : "Carlangas"
    }
]

const salarios = [
    {
        id : 1,
        salario : 1000
    },
    {
        id : 2,
        salario : 5000
    },

]


const getEmpleado=(id , callback) =>{
    const empleado = empleados.find(x=>x.id === id)?.nombre;
    if(empleado){
        callback(null, empleado)
    }else{
        callback("No existe el empleado con el id " + id)
    }
}

const getSalario = (id,callback) => {
    const salario = salarios.find(s=>s.id === id)?.salario;
    if (salario){
        callback(null, salario)
    }else{
        callback("No existe el salario para el id " + id)
    }
}

// USANDO CALLBACKS

const id=3;
getEmpleado(id,(err,emp)=>{
   if(err){
     console.log("ERROR");
     return console.log(err);
   } 
   getSalario(id,(err,salario)=>{

       if(err){
         return console.log(err);
       }

       console.log("El empleado: "+emp+" tiene un salario de: "+salario);

   })
})