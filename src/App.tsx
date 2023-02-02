import './App.css';
import { Courses } from './types';
import Welcome from './Welcome';

function App() {
  
  const courseParts:Courses[] = [
  {
    name: "Fundamentals",
    exerciseCount: 10,
    description: "This is an awesome course part"
  },
  {
    name: "Using props to pass data",
    exerciseCount: 7,
    groupProjectCount: 3
  },
  {
    name: "Deeper type usage",
    exerciseCount: 14,
    description: "Confusing description",
    exerciseSubmissionLink: "https://fake-exercise-submit.made-up-url.dev"
  }
];
  
const assertNever = (value: never): never => {
  throw new Error(
    `Unhandled discriminated union member: ${JSON.stringify(value)}`
  );
};
courseParts.forEach(course => {
  
   switch(course.name){
 
     case "Fundamentals":
      console.log(course.exerciseCount)
     break;

     case "Using props to pass data":
      console.log(course.groupProjectCount)
     break;
    
     case 'Deeper type usage':
      console.log(course.description)
      break;
      
     default:
      return assertNever(course)

   }
      
})

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello React Typescript </h1>

        <Welcome name="Chiranjeev"/>
      </header>
    </div>
  );
}

export default App;
