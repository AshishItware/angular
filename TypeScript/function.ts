enum Result {
    Pass,
    Fail = -1,
    Promotated = 0 
}

function Student(){
    let sId:number = 101;
    let sName:string = "Ashish";
    let isActive:boolean = true;

    let arMarks:Array<number> = [45,50,66];
    let total = 0;    // Implicit Typecasting
    for(var item of arMarks){
        total += item;    

    }

    let avg = total/arMarks.length;
    let courses:string [] = ["C#", "Java", "Angular" ,"ReactJS"];
    for(var curse of courses){
     console.log(curse);   
    }

    let dateOfBirth:[number,string,number] = [20, "March", 2023];
    let stdResult:Result;
    this.stdResult = function(){
        if(avg >= 35){
            return Result.Pass;
        }
        else{
            return Result.Fail;
        }

    }
}
var std = new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult])