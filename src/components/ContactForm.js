import './ContactForm.css';
import { useState } from 'react';
const ContactForm=()=>{
    const [enteredName, setEnteredName] = useState('');
    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredMessage, setEnteredMessage] = useState('');
    const updateEmail= (e) => {
      setEnteredEmail(e.target.value);
    }
    const updateName = (e) => {
      setEnteredName(e.target.value)
    }
    const updateMessage=(e)=>{
    setEnteredMessage(e.target.value)
    }
    const submitHandler=async(e)=>{
        e.preventDefault();
        const contactInfo = {
            Email:enteredEmail,
            Name:enteredName,
            message: enteredMessage
        };
        const response = await fetch('https://my-portfolio-40d85-default-rtdb.asia-southeast1.firebasedatabase.app/details.json',{
            method: 'POST',
            body: JSON.stringify(contactInfo),
            headers: {
                'Contact-Type': 'application/json'
            }            
        })
        const data = await response.json();
        console.log(data);
        setEnteredName('');
        setEnteredEmail('');
        setEnteredMessage('');
    
    }

    
return <div className="form">
    <form onSubmit={submitHandler}>
    <label htmlFor="name">Name</label>
    <input type="text"
     id='name'
     value={enteredName} 
    onChange={updateName}/>
    <label htmlFor="email">Email</label>
    <input type='email' 
    id='email'
    value={enteredEmail} 
    onChange={updateEmail}/>
    <label htmlFor="message">Message</label>
    <input type="text" 
    id='message' 
    placeholder='Type Your Message Here'
    value={enteredMessage} 
    onChange={updateMessage}/>
    <button type='submit'>Submit</button>
</form>
</div>
}
export default ContactForm;