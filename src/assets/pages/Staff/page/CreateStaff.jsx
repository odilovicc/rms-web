import React, { useState } from "react"; 
import { FileUpload } from "primereact/fileupload"; 
import { Dropdown } from "primereact/dropdown"; 
import TopNav from "../../../components/TopNav/TopNav"; 
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import validator from "validator"; 
import bcrypt from "bcryptjs"; 
 
export default function CreateStaff() { 
  const [profilePhoto, setProfilePhoto] = useState(null); 
  const [firstName, setFirstName] = useState(""); 
  const [lastName, setLastName] = useState(""); 
  const [role, setRole] = useState(""); 
  const [username, setUsername] = useState(""); 
  const [password, setPassword] = useState(""); 
  const [language, setLanguage] = useState(""); 
 
  const handleFormSubmit = (e) => { 
    e.preventDefault(); 
    if (validateInputs()) { 
      const formData = { 
        profilePhoto, 
        firstName, 
        lastName, 
        role, 
        username, 
        password: encryptPassword(password), 
        language, 
      }; 
      console.log(formData); 
    } 
  }; 
 
  const roleOptions = [ 
    { label: "Owner", value: "owner" }, 
    { label: "Supervisor", value: "supervisor" }, 
  ]; 
 
  const languageOptions = [ 
    { label: "Uzbek", value: "uzbek" }, 
    { label: "Russian", value: "russian" }, 
  ]; 
 
  const validateInputs = () => { 
    if ( 
      validator.isEmpty(firstName) || 
      validator.isEmpty(lastName) || 
      validator.isEmpty(role) || 
      validator.isEmpty(username) || 
      validator.isEmpty(password) || 
      validator.isEmpty(language) 
    ) { 
      alert("Please fill all the fields"); 
      return false; 
    }
    return true; 
  }; 
 
  const encryptPassword = (password) => { 
    const salt = bcrypt.genSaltSync(10); 
    return bcrypt.hashSync(password, salt); 
  }; 
 
  return ( 
    <div> 
      <TopNav title="Profile" /> 
      <div className="container mx-auto p-5"> 
        <form onSubmit={handleFormSubmit} className="flex flex-col"> 
          <div> 
            <label htmlFor="profilePhoto" className="block mb-2"> 
              Profile Photo: 
            </label> 
            <FileUpload 
              name="profilePhoto" 
              mode="basic" 
              customUpload 
              uploadHandler={(e) => setProfilePhoto(e.files[0])} 
            /> 
          </div> 
          <div className="bg-white rounded-xl p-5 my-5 flex flex-col gap-5"> 
            <div className="flex items-center"> 
              <label htmlFor="firstName" className="w-1/2"> 
                First Name: 
              </label> 
              <InputText 
                type="text" 
                id="firstName" 
                value={firstName} 
                onChange={(e) => setFirstName(e.target.value)} 
                className="w-full px-4 py-2 border " 
              /> 
            </div> 
            <div className="flex items-center"> 
              <label htmlFor="lastName" className="w-1/2"> 
                Last Name: 
              </label> 
              <InputText 
                id="lastName" 
                value={lastName} 
                onChange={(e) => setLastName(e.target.value)} 
                className="w-full px-4 py-2 border " 
              /> 
            </div> 
            <div className="flex items-center"> 
              <label htmlFor="role" className="w-1/2"> 
                Role: 
              </label> 
              <Dropdown 
                id="role" 
                options={roleOptions} 
                value={role} 
                onChange={(e) => setRole(e.value)} 
                placeholder="Select a role" 
                className="w-full" 
              /> 
            </div> 
            <div className="flex items-center"> 
              <label htmlFor="username" className="w-1/2"> 
                Username: 
              </label> 
              <InputText 
                id="username" 
                value={username} 
                onChange={(e) => setUsername(e.target.value)} 
                className="w-full px-4 py-2 border " 
              /> 
            </div> 
            <div className="flex items-center"> 
              <label htmlFor="password" className="w-1/2 mb-2"> 
                Password: 
              </label> 
              <InputText 
                id="password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                className="w-full px-4 py-2 border " 
              /> 
            </div> 
            <div className="flex items-center"> 
              <label htmlFor="language" className="w-1/2 mb-2"> 
                Language: 
              </label> 
              <Dropdown 
                id="language" 
                options={languageOptions} 
                value={language} 
                onChange={(e) => setLanguage(e.value)} 
                placeholder="Select a language" 
                className="w-full px-4 py-2 border " 
              /> 
            </div> 
          </div> 
          <Button 
            type="submit" 
            label="Save"
            severity="success"
            icon="pi pi-check"
            className="bg-blue-500 text-white px-4 py-2 " 
          /> 
        </form> 
      </div> 
    </div> 
  ); 
}