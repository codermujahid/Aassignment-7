
/**
 * - Total Admnission fees
 */
 console.log(` 

  <==========-Total Admnission fees-======>
  `);
let total_admition_fees = 0;

for ( data of studentBaioData ) {
    
   console.log(`Name ${data.name} fees ${data.fees} `);
   total_admition_fees += data.fees
}
-
console.log(`
=---------------------------------------------------------------->>
  total_admition_fees : ${total_admition_fees}`);


/**
 * - Find All Female Students
 */
 console.log(` 

  <==========- Find All Female Students======>
  `);
let total_female_student = 0;

for ( data of totalFemaleStudents ) {
 
    if (data.gender == "Female") {
        
        console.log(`Name : ${data.name}, This student is ${data.gender} `);
        total_female_student += data.gender
        
    }
}


/**
 * - Find class wise student result
 */


 console.log(` <==========-Find class wise student result-======>

  `);
let total_student_class = 0;

for ( data of totalFemaleStudents ) {
 
    if (data.department == "Five") {
        
        console.log(`Name : ${data.name}, This student is Class ${data.department} `);
        total_student_class += data
        
    }
}

/** 
 * - Location wise student result
*/

 console.log(` <==========-location_wise_student-======>

  `);
let location_wise_student = 0;

for ( data of LocationWiseStudentResult ) {
 
    if (data.location == "koyra") {
        
        console.log(`Name : ${data.name}, This student is location ${data.location} `);
        location_wise_student += data
        
    }
}



/** 
 * - find student between 10 - 25 age
*/

 console.log(` <==========-find student between 10 - 25 age-======>

  `);
let find_student_between = 0;

for ( data of findStudentBetween10_25age ) {
 
    if (data.age >= 10 && data.age <= 25 ) {
        
        console.log(`Name : ${data.name}, This student is age ${data.age} years old. `);
        find_student_between += data.age
        
    }
}










