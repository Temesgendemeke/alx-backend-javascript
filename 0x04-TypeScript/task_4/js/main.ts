interface DirectorInterface{
    workFromHome():string,
    getCoffeeBreak():string,
    workDirectorTasks(): string
}
interface TeacherInterface{
    workFromHome(): String,
    getCoffeeBreak():String,
    workTeacherTasks():String
}

class Director{

    public workFromHome(){
        return 'Working from home'
    }

    public getToWork(){
        return 'Getting a coffee break'
    }

    public workDirectorTasks(){
        return 'Getting to director tasks'
    }

}

class Teacher{
    public workFromHome(){
        return 'Cannot work from home'
    }

    public getToWork(){
        return 'Cannot have a break'
    }

    public workDirectorTasks(){
        return 'Getting to work'
    }
}

function createEmployee(salary: string | number){
      if (typeof salary == 'number' && salary >= 500)
      {
        return salary >= 500?'Director':'Teacher';
      }else if (typeof salary == 'string' && salary[0] == '$')
      {
        return Number(salary.substring(1)) >= 500?'Director':'Teacher';
      }
}

function isDirector(employee:String){

}

function executeWork(employee:String){
   
}
