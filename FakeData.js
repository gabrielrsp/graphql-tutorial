const UserList = [
 {
  id: 1,
  name: "John",
  age: 30,
  nationality: "CANADA",
  friends: [
    {
      id: 2,
      name: "Mary",
      age: 10,
      nationality: "USA"
     }, 
     {
      id: 3,
      name: "Felix",
      age: 45,
      nationality: "BRAZIL"
     }, 
  ]
 }, 
 {
  id: 2,
  name: "Mary",
  age: 10,
  nationality: "USA"
 }, 
 {
  id: 3,
  name: "Felix",
  age: 45,
  nationality: "BRAZIL"
 }, 
 {
  id: 4,
  name: "Mike",
  age: 32,
  nationality: "FRANCE",
  friends: [
    {
      id: 3,
      name: "Felix",
      age: 45,
      nationality: "BRAZIL"
     }, 
  ]
 }, 
 {
  id: 5,
  name: "Enzo",
  age: 18,
  nationality: "ITALY"
 }, 
]

const MovieList = [
  {
    id: 1,
    name: "Avengers Endgame", 
    yearOfPublication: 2019,
    isInTheaters: true
  },
  {
    id: 2,
    name: "Interstellar", 
    yearOfPublication: 2014,
    isInTheaters: false
  },
  {
    id: 3,
    name: "SuperBad", 
    yearOfPublication: 2007,
    isInTheaters: false
  },
  {
    id: 4,
    name: "Gabriel Movie", 
    yearOfPublication: 2032,
    isInTheaters: false
  },
]

module.exports = { UserList, MovieList }