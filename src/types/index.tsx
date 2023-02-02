 interface Course{
 name: string;
 exerciseCount: number;
}

 interface Course1 extends Course{
 name: "Fundamentals";
 description: string;
}

 interface Course2 extends Course{
  name: "Using props to pass data";
  groupProjectCount: number;
}

 interface Course3 extends Course{
  name: "Deeper type usage";
  description: string;
  exerciseSubmissionLink: string;
}

export type Courses = Course1 | Course2 | Course3

