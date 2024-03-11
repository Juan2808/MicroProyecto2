import {collection, addDoc, getDocs} from 'firebase/firestore'; 
import {db} from '../firebase';  


export async function createUser({name,lastname,email,username,password,favgame}){
    const usersCollection = collection(db,'movies');
    const data ={name,lastname,email,username,password,favgame}; 
    await addDoc(usersCollection,data); 
    
}

export async function getUser(){
    const usersCollection = collection(db,'movies');
    const usersSnapshot = await getDocs(usersCollection); 
    const users = usersSnapshot.docs.map((doc) => doc.data()); 
    
    return users  


}