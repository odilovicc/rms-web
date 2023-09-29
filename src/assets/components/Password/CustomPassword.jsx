import React from 'react'
import {Password} from 'primereact/password'
import "./customPass.css"
export default function CustomPassword() {
  return (
    <div>
        <Password pt={{
            input: {
                className: 'customPass'
            }
        }}/>
    </div>
  )
}
