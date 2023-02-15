import React from 'react'

export const AddForm = () => {
  return (
    <>
      {/* //onSubmit={onSubmit} */}
     <form className="add-form"> 
      <div className="form-control">
        <label>TITLE: </label>
        <input
          type="text"
          placeholder="Add Name"
        //   value={name}
        //   onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="form-control">
        <label>DESCRIPTION: </label>
        <textarea><input
          type="text"
          placeholder="Add Email"
        //   value={email}
        //   onChange={(e) => setEmail(e.target.value)}
        /></textarea>
        </div>
        </form>
    </>
  )
}


