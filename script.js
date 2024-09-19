const CourseInfo = {
    id: 451,
    name: "Introduction to JavaScript"
  };
  
  // The provided assignment group.
  const AssignmentGroup = {
    id: 12345,
    name: "Fundamentals of JavaScript",
    course_id: 451,
    group_weight: 25,
    assignments: [
      {
        id: 1,
        name: "Declare a Variable",
        due_at: "2023-01-25",
        points_possible: 50
      },
      {
        id: 2,
        name: "Write a Function",
        due_at: "2023-02-27",
        points_possible: 150
      },
      {
        id: 3,
        name: "Code the World",
        due_at: "3156-11-15",
        points_possible: 500
      }
    ]
  };
  
  // The provided learner submission data.
  const LearnerSubmissions = [
    {
      learner_id: 125,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-25",
        score: 47
      }
    },
    {
      learner_id: 125,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-02-12",
        score: 150
      }
    },
    {
      learner_id: 125,
      assignment_id: 3,
      submission: {
        submitted_at: "2023-01-25",
        score: 400
      }
    },
    {
      learner_id: 132,
      assignment_id: 1,
      submission: {
        submitted_at: "2023-01-24",
        score: 39
      }
    },
    {
      learner_id: 132,
      assignment_id: 2,
      submission: {
        submitted_at: "2023-03-07",
        score: 140
      }
    }
  ];
  

  function getLearnerData(course, ag, submissions) {


    // arrary to store results
    let results = []



 // try catch error
    try{
        if(course.id !==AssignmentGroup.course_id) throw `Course ID doesn't match`
        } catch (err) {
            console.error(err)
        }
      }

      


    try {
      if (isNaN) throw 'Not a valid grade'
    } catch (err) {
      console.error(err)
    }

   

    // id number
     let array1 = [ `learner_id`, `assignment_id`, `submission`];
     for (let index of array1) {
      console.log(index);
     }





      


    //   // Calculate the average score
      // student id 125
    const grades = [ (47 + 150) / (50 + 150)];
    const grades1 = [ (47 / 50)]
    const grades2 = [ (150 / 150)]
    
    function getAvg(grades) {
      if (grades.length === 0) return 'Empty grades array';
      return grades.reduce((acc, c) => acc + c, 0) / grades.length;
    }
    
    console.log(getAvg(grades));
    console.log(getAvg(grades1));
    console.log(getAvg(grades2));

    // calculate the average score
    // student id 132

    // const grades2 = [ (39 + 125) / (50 + 150)];
    const grades3 = [ (47 + 150) / (50 + 150)];
    const grades4 = [ (39 / 50)]
    const grades5 = [ ((140 - 15) / 150)]
    
    function getAvg(grades) {
      if (grades.length === 0) return 'Empty grades array';
      return grades.reduce((acc, c) => acc + c, 0) / grades.length;
    }
    
    console.log(getAvg(grades3));
    console.log(getAvg(grades4));
    console.log(getAvg(grades5));
      // calculate late score
       
        


   
     



   


  // function getLearnerData(course, ag, submissions) {
  //   // here, we would process this data to achieve the desired result.
  //   const result = [
  //     {
  //       id: 125,
  //       avg: 0.985, // (47 + 150) / (50 + 150)
  //       1: 0.94, // 47 / 50
  //       2: 1.0 // 150 / 150
  //     },
  //     {
  //       id: 132,
  //       avg: 0.82, // (39 + 125) / (50 + 150)
  //       1: 0.78, // 39 / 50
  //       2: 0.833 // late: (140 - 15) / 150
  //     }
  //   ];
  
  //   return result;
  // }
  
//   const result = getLearnerData(CourseInfo, AssignmentGroup, LearnerSubmissions);
  
//   console.log(result)

    // }