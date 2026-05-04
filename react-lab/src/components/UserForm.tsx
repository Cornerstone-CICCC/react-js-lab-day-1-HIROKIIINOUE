import React, { type ChangeEvent, type SubmitEvent } from 'react'
import type { User } from '../types/user.type'
import { v4 as uuidv4 } from 'uuid';

type Props = {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  user: User
  setUser: React.Dispatch<React.SetStateAction<User>>
  selectedUserId: string
  users: User[]
  setSelectedUserId: React.Dispatch<React.SetStateAction<string>>
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>
}

const UserForm = (props: Props) => {
  const { setUsers, user, setUser, selectedUserId, users, setSelectedUserId, setIsUpdate } = props;



  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    if (e.target.type === "checkbox") {
      setUser(prev => ({
        ...prev,
        [name]: prev.skills.includes(value) ? prev.skills.filter(skill => skill !== value) : [...prev.skills, value]
      }))
      return
    }

    setUser(prev => ({
      ...prev,
      [name]: e.target.type === "age" ? Number(value) : value
    }))
  }

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (selectedUserId) {
      const newUsers = users.map(element => {
        if (element.id === selectedUserId) {
          return {
            ...user,
            id: selectedUserId
          }
        }
        return element
      })
      setUsers(newUsers)
      setSelectedUserId("")
      setUser({
        id: uuidv4(),
        fullname: "",
        age: 0,
        education: "Grade school",
        gender: "Male",
        skills: [],
        bio: "",
      })
      setIsUpdate(false)
      return
    }

    setUser({
      id: uuidv4(),
      fullname: "",
      age: 0,
      education: "Grade school",
      gender: "Male",
      skills: [],
      bio: "",
    })
    setUsers(prev => ([...prev, user]))
  }

  const handleClear = () => {
    setUser({
      id: uuidv4(),
      fullname: "",
      age: 0,
      education: "Grade school",
      gender: "Male",
      skills: [],
      bio: "",
    })
    setSelectedUserId("")

  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        Fullname:
        <input type="text" name="fullname" onChange={handleChange} value={user.fullname} />
      </div>
      <div>
        Age:
        <input type="number" name="age" onChange={handleChange} value={user.age} />
      </div>
      <label>
        Education:
        <select name="education" onChange={handleChange}>
          <option value="Grade school" >Grade school</option>
          <option value="high school">high school</option>
          <option value="college">college</option>
        </select>
      </label>
      <div>
        Gender:
        <label>
          <input
            type="radio"
            name="gender"
            value="Male"
            onChange={handleChange}
          />
          Male
        </label>
        <br />
        <label>
          <input
            type="radio"
            name="gender"
            value="Female"
            onChange={handleChange}
          />
          Female
        </label>
        <label>
          <input type="radio" name='gender' value="other" onChange={handleChange} />
          Other
        </label>
      </div>
      <div>
        <label>
          TypeScript
          <input type="checkbox" name='skills' value="TypeScript" checked={user.skills.includes("TypeScript")} onChange={handleChange} />
        </label>
        <label>
          React
          <input type="checkbox" name='skills' value={"React"} checked={user.skills.includes("React")} onChange={handleChange} />
        </label>
        <label>
          Node
          <input type="checkbox" name='skills' value={"Node"} checked={user.skills.includes("Node")} onChange={handleChange} />
        </label>
        <label>
          NoSQL
          <input type="checkbox" name='skills' value={"NoSQL"} checked={user.skills.includes("NoSQL")} onChange={handleChange} />
        </label>
      </div>
      <div>
        BIO:
        <input type="textarea" name='bio' value={user.bio} onChange={handleChange} />
      </div>
      <div>
        {selectedUserId === "" ? (
          <button type='submit' disabled={user.fullname === "" || user.age === 0 || user.gender === "" || user.skills.length === 0}>Save User</button>
        ) : (
          <button type='submit' disabled={user.fullname === "" || user.age === 0 || user.gender === "" || user.skills.length === 0}><span style={{ color: "red" }}>Update</span>: {selectedUserId}</button>
        )}
      </div>
      <div>
        <button type='button' onClick={handleClear}>Clear</button>
      </div>
    </form>
  )
}

export default UserForm