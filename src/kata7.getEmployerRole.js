const getEmployerRole = (employeeName, employees) => {
    let correctPerson = employees.find( (person) => person.name === employeeName);
    return correctPerson.role; 
};

module.exports = getEmployerRole;
