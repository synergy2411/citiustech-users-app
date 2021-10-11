import { User } from "./user";

export const USER_DATA : User[] = [{
  firstName : "bill",
  lastName : "gates",
  company : "Microsoft",
  income : 50000,
  isWorking : true,
  dob : new Date("Dec 23, 1965"),
  image : "./assets/images/bill.jpg",
  votes : 120,
  comments : [
    {stars : 4, author : "xyz", body : "Great Man"},
    {stars : 3, author : "pqr", body : "......"},
  ]
}, {
  firstName : "steve",
  lastName : "jobs",
  company : "Apple",
  income : 0,
  isWorking : false,
  dob : new Date("Jan 2, 1963"),
  image : "./assets/images/steve.jpg",
  votes : 180,
  comments : []
}, {
  firstName : "Tim b.",
  lastName : "lee",
  company : "World Wide Web",
  income : 30000,
  isWorking : true,
  dob : new Date("Aug 2, 1965"),
  image : "./assets/images/tim.jpg",
  votes : 150,
  comments : []
}
]
