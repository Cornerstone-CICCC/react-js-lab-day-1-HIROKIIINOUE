import React, { useState } from 'react'
import type { User } from '../types/user.type'


type Props = {
  user: User
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setUser: React.Dispatch<React.SetStateAction<User>>
  setSelectedUserId: React.Dispatch<React.SetStateAction<string>>
  selectedUserId: string
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>
  isUpdate: boolean
}

const UserProfile = (props: Props) => {
  const { user, setUsers, setSelectedUserId, selectedUserId, isUpdate, setIsUpdate } = props
  const [isDetail, setIsDetail] = useState<boolean>(false)

  const handleDelete = (id: string) => {
    if (!confirm("Are you sure to delete ?")) return;
    setUsers(prev => prev.filter(user => user.id !== id))
  }

  const handleUpdateUserSelect = () => {
    if (selectedUserId === "") {
      setSelectedUserId(user.id)
      setIsUpdate(prev => !prev)
      return
    } else {
      setSelectedUserId("")
      setIsUpdate(prev => !prev)
    }
  }



  return (
    <li>
      {isDetail ? (
        <ul style={{ listStyle: 'none' }}>
          <li>fullname - {user.fullname}</li>
          <li>age - {user.age}</li>
          <li>education - {user.education}</li>
          <li>gender - {user.gender}</li>
          <li>skills - {user.skills.join(", ")}</li>
          <li>BIO - {user.bio}</li>
        </ul>
      ) : (
        <p>{user.id} - {user.fullname}</p>
      )}
      {isUpdate && <></>}
      <button onClick={() => setIsDetail(prev => !prev)}>{isDetail ? "Hide" : "View"}</button>
      <button onClick={handleUpdateUserSelect}>{isUpdate ? "Stop Edditng" : "Edit"}</button>
      <button onClick={() => handleDelete(user.id)}>Delete</button>
    </li>
  )
}

export default UserProfile