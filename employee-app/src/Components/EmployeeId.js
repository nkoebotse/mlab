import { Link } from "react-router-dom";
import { useState } from "react";
import { response } from "express";
const EmployeeId = () => {
const[EmployeeId,setEmployeeId]=useState([]
)

function getEmployeeId()
{
  fetch("http://localhost:4000/employee")
  .then(respone=>{if(response.ok){
    return response.json()
  }
throw new Error()}).then(data=>{setEmployeeId(data)})
.catch(error=>{alert("unable to get data")})
}
    return ( 
        <div className="container my-4">
            <h2 className="text-center mb-4">employee</h2>


        <div className="row mb-3">
            <div className="col">
                <link className="btn btn-primary me-1"to="EmployeeId"role="button">create </link>
                <button type="button"className="btn btn-outline-primary">Refresh</button>
            </div>
            <div className="col">

            </div>
        </div>


        <table className="table">
  <thead>
    <tr>
      <th >#ID</th>
      <th >Employee position</th>
      <th >Name and Surname</th>
      <th > Email address</th>
      <th >Phone Number</th>
      <th >Image</th>
      <th>Action</th>
    </tr>
  </thead>
  <tbody>
    
    {
      EmployeeId.map((EmployeeId,index)=>{
        return(<tr key={index}>
          <th >{EmployeeId.#ID}</th>
          <th >{EmployeeId.position}</th>
          <th >{EmployeeId.Name&Surname}</th>
          <th > {EmployeeId.Email}</th>
          <th > {EmployeeId.PhoneNumber}</th>
          <th ><img src={"http://localhost:4000/images/"+EmployeeId.imageFilename} alt="" /></th>
          <th>Action</th>
        </tr>

        )
      })
    }
  </tbody>
</table>

        </div>
     );
}
 
export default EmployeeId;