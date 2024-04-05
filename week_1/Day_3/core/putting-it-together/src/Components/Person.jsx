import React,{useState} from 'react';

const PersonCard = (props) => {
    const { person }=props
    const [age, setAge] = useState(person.age)
    const increaseAge  = () => {
        console.log('Ilyes')
        setAge(age+1)
    }
    return(
        <>
            <h1>{person.lastname},{person.firstname}</h1>
            <h3>Age:{age}</h3>
            <h3>Hair Color: {person.haircolor}</h3>
            <button onClick={()=> increaseAge()}>Birthday Button for {person.firstname} {person.lastname}</button>
       </>
    );
}
export default PersonCard;