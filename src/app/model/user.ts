export interface User {
  firstName: string;
  lastName: string;
  company: string;
  income: number;
  isWorking: boolean;
  dob: Date;
  image: string;
  votes: number;
  comments : Comment[];
}

export interface Comment{
  stars : number;
  author : string;
  body : string
}
