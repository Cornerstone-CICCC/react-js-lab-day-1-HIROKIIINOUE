import { useState } from 'react'
import './App.css'
import UserForm from './components/UserForm'
import UserList from './components/UserList'
import type { User } from './types/user.type'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [users, setUsers] = useState<User[]>([])
  const [isUpdate, setIsUpdate] = useState<boolean>(false)
  const [user, setUser] = useState<User>({
    id: uuidv4(),
    fullname: "",
    age: 0,
    education: "Grade school",
    gender: "Male",
    skills: [],
    bio: "",
  })
  const [selectedUserId, setSelectedUserId] = useState<string>("")

  return (

    <>
      <UserForm setUsers={setUsers} user={user} setUser={setUser} selectedUserId={selectedUserId} users={users} setSelectedUserId={setSelectedUserId} setIsUpdate={setIsUpdate} />
      <UserList users={users} setUsers={setUsers} setUser={setUser} setSelectedUserId={setSelectedUserId} selectedUserId={selectedUserId} isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
    </>
  )
}

export default App
