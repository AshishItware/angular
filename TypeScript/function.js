var Result;
(function (Result) {
    Result[Result["Pass"] = 0] = "Pass";
    Result[Result["Fail"] = -1] = "Fail";
    Result[Result["Promotated"] = 0] = "Promotated";
})(Result || (Result = {}));
function Student() {
    var sId = 101;
    var sName = "Ashish";
    var isActive = true;
    var arMarks = [45, 50, 66];
    var total = 0; // Implicit Typecasting
    for (var _i = 0, arMarks_1 = arMarks; _i < arMarks_1.length; _i++) {
        var item = arMarks_1[_i];
        total += item;
    }
    var avg = total / arMarks.length;
    var courses = ["C#", "Java", "Angular", "ReactJS"];
    for (var curse in courses) {
        console.log(curse);
    }
    var dateOfBirth = [20, "March", 2023];
    var stdResult;
    this.stdResult = function () {
        if (avg >= 35) {
            return Result.Pass;
        }
        else {
            return Result.Fail;
        }
    };
}
var std = new Student();
console.log(std.stdResult());
console.log(Result[std.stdResult]);
