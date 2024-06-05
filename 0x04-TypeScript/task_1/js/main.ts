interface Teacher{
    firstName: String,
    lastName: String,
    fullTimeEmployee?: boolean;
    yearsOfExperience: any,
    location: String,
    contract: Boolean
}

interface Directors extends Teacher{
    numberOfReports: number
}
interface printTeacherFunction{
    (firstName: String,lastName: String):String
}
function printTeacher(firstName:String,lastName:string): String
{
    return `${firstName[0]}. ${lastName}`
}


class StudentClass{
    constructor(public firstName:String, public lastName:String){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    public workOnHomework():String{
        return "Currently working"
    }

    public displayName():String{
        return this.firstName
    }
}

