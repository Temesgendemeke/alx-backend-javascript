import {uploadPhoto, createUser} from './utils'

export default async function handleProfileSignup(){
    try{
        const data = await uploadPhoto()
        const user = await createUser()
        console.log(data.body, user.firstName, user.lastName)
    }
    catch{
        console.log('Signup system offline')
    }
}