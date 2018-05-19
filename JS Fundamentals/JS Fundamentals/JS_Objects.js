let students = [
    {name: 'Remy', cohort: 'Jan'},
    {name: 'Genevieve', cohort: 'March'},
    {name: 'Chuck', cohort: 'Jan'},
    {name: 'Osmund', cohort: 'June'},
    {name: 'Nikki', cohort: 'June'},
    {name: 'Boris', cohort: 'June'}
];

for (var i = 0; i <students.length; i++){
    console.log("Name: " + students[i]['name'] + ", Cohort: " + students[i]['cohort'])
}



let users = {
    employees: [
        {'first_name':  'Miguel', 'last_name' : 'Jones'},
        {'first_name' : 'Ernie', 'last_name' : 'Bertson'},
        {'first_name' : 'Nora', 'last_name' : 'Lu'},
        {'first_name' : 'Sally', 'last_name' : 'Barkyoumb'}
    ],
    managers: [
       {'first_name' : 'Lillian', 'last_name' : 'Chambers'},
       {'first_name' : 'Gordon', 'last_name' : 'Poe'}
    ]
 };

for (var key in users) {
    console.log(key);
    counter = 1
    for (var i = 0; i < users[key].length; i++) {
        lengthy = users[key][i]['first_name'].length + users[key][i]['last_name'].length
        console.log(counter + " - " + users[key][i]['first_name'] + ", " + users[key][i]['last_name'] + " - " +lengthy)
    } 
}
 