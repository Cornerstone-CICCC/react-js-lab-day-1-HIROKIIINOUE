import React from 'react'
import type { User } from '../types/user.type'
import UserProfile from './UserProfile'

type Props = {
  users: User[]
  setUsers: React.Dispatch<React.SetStateAction<User[]>>
  setUser: React.Dispatch<React.SetStateAction<User>>
  setSelectedUserId: React.Dispatch<React.SetStateAction<string>>
  selectedUserId: string
  setIsUpdate: React.Dispatch<React.SetStateAction<boolean>>
  isUpdate: boolean
}

const UserList = (props: Props) => {
  const { users, setUsers, setUser, setSelectedUserId, selectedUserId, setIsUpdate, isUpdate } = props

  return (
    <>
      <ul style={{ listStyle: 'none' }}>
        {users.map(user => (
          <UserProfile key={user.id} user={user} setUsers={setUsers} setUser={setUser} setSelectedUserId={setSelectedUserId} selectedUserId={selectedUserId} isUpdate={isUpdate} setIsUpdate={setIsUpdate} />
        ))}
      </ul>
    </>
  )
}

export default UserList