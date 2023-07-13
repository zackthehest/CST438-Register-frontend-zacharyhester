import * as React from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';


class Student extends React.Component 
{
  constructor(props) 
  {
    super(props);
    this.state={name: '', email:'', statusCode: 0};
  }

  handleSubmit = () => {

    fetch('http://localhost:8080/student',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: this.state.name,
        email: this.state.email,
        statusCode: this.state.statusCode,   
      })
    })
      .catch(err => console.error(err))
  }

  handleChange = (event) =>  {
     this.setState({[event.target.name]: event.target.value});
  }
  
  render() {
    const { name, email, statusCode } = this.state;
    return (
      <div>
        <h3>Add Student Name and Email</h3>
        <TextField autoFocus style = {{width:200}} 
             label="Student Name" name="name" 
             onChange={this.handleChange}  value={name} /> 
        <br/> <br/>
        <TextField style = {{width:200}} label="Student Email" name="email" 
             onChange={this.handleChange}  value={email} /> 
        <br/> <br/>
        <Button variant="outlined" color="primary" style={{margin: 10}}
             onClick={this.handleSubmit} >Submit</Button>
        <h3>{email}</h3>
      </div>
      ); 
  }
}
export default Student;
