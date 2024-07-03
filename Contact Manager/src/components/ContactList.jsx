import React from 'react'

const ContactList = ({contacts}) => {
  const contactList = contacts.map((val, index)=>{
    return(
      <div className='py-3' >
      <ul>{index+1}.Name:{ val.name} && Email:{ val.email} </ul>
      </div>
    )
    
  })
  return (
    <div className='text-start font-medium my-3'>
      <h1>ContactList:</h1>
      <div>{contactList}</div>
    </div>
  )
}

export default ContactList
