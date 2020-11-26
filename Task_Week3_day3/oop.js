class Student {
  
    constructor(name, age, date_birth, gender, hoobbies, ID) {
      this.name =  name,
      this.age = age,
      this.date_birth = date_birth,
      this.gender = gender,
      this.hoobbies = hoobbies,
      this.id = "01"
      
    } 
    set setName(name) {
      this.name = name;
    }
    set setAge(age) {
      this.age = age;
    }
    set setBirth(date_birth) {
      this.date_birth = date_birth;
    }
    set setGender(gender) {
      if (gender === "male" || gender === "female"){
      this.gender = gender;
      }
    }
    set setHoobbies(hoobbies) {
        return this.hoobbies.push(hoobbies);
        
        }
    set setId(id) {
      this.id = id;
    }   
    get getData() {
      return `student : 
      name : ${this.name} 
      age : ${this.age} 
      date_birth : ${this.date_birth} 
      gender : ${this.gender} 
      hoobbies : ${this.hoobbies} 
      id : ${this.id}`;
  }
}
const data = new Student(
  'iqbal',
  24,
 '13091996',
   "male",
   ["music", "art"],
   "01"
);  

    
    console.log(data.getData)