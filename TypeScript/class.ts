class Student{
    sId:number = 101;
    sName:string = "Ashish";
    isActive:boolean = true;
    total:number = 0;
    avg:number = 0;
    arMarks:Array<number> = [35, 56,78];   // first way to define array
    arCourse:string [] = ["Typescript", "Javascript", "Angular", "ReactJS"]; // second way to define array
    

    DisplayStudentDetails(){
        let studentDetails:string = `StudentID: ${this.sId}\n StudentName: ${this.sName}\n ActiveorNot: ${this.isActive}`;
        console.log(studentDetails);
    }
    DisplayResult(){
        for(var item of this.arMarks){
            this.total = this.total+item;
        }
        console.log("Total is: " + this.total);
        console.log("Average is:" + this.total/this.arMarks.length);
    }
     
}
    var std:Student = new Student();
    std.DisplayStudentDetails();
    std.DisplayResult();  