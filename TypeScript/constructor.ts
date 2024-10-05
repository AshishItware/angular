class Employee{
     empId:number;
     empName:string;
     empSal:number;
     
   //  Default/Parameterless
   //  constructor(){
   //  this.empId = 101;
   //  this.empName = "Ashish";
   //  this.empSal = 300000;
   //}

   //Parameterized constructor
   constructor(id:number, name:string, salary:number){
      this.empId = id;
      this.empName = name;
      this.empSal = salary;
   }

     Display(){
        console.log(`EmpID: ${this.empId}\nEmpName: ${this.empName} \n Salary: ${this.empSal}`)
     }
}
var emp:Employee = new Employee(101,"Ashish",300000);