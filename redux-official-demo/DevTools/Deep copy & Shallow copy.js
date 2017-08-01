// Deep copy & Shallow copy


const employeeOriginal = {
    name: 'Manjula',
    age: 25,
    Profession: 'Software Engineer'
};

//Shallow copy!
const employeeShallow = employeeOriginal; 
console.log(`employeeShallow.name`, employeeShallow.name);
console.log(`employeeOriginal`, employeeOriginal.name);

employeeShallow.name = 'Shallow Name';
console.log(`employeeShallow.name`, employeeShallow.name);
console.log(`employeeOriginal`, employeeOriginal.name);


//Deep copy!
const employeeDeep = {
    name: employeeOriginal.name,
    age: employeeOriginal.age,
    Profession: employeeOriginal.Profession
}; 
console.log(`employeeDeep.name`, employeeDeep.name);
console.log(`employeeOriginal`, employeeOriginal.name);


employeeShallow.name = 'Deep name';
console.log(`employeeDeep.name`, employeeDeep.name);
console.log(`employeeOriginal`, employeeOriginal.name);


