import axios from 'axios'
import  { useEffect, useState } from 'react'
import { MdDelete, MdEdit } from 'react-icons/md'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';



interface User {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: number;
  birthDate: string;
}

export default function Users() {

  const [show, setShow] = useState(false);
  const [userId, setUserId] = useState< number | null >(null);
  let [userData,setUserData]=useState< User |null>(null)

let navigate=useNavigate();

let moveToAddUser=()=>{
  navigate('/dashbourd/add_user')
}
let moveToUpdateUser = (id: number) => {
  navigate(`/dashbourd/update_user/${id}`);
}

  const handleClose = () => setShow(false);
  const handleShow = (user:User) => {
    setUserId(user.id)
    setShow(true);
    setUserData(user)

  }
  let [users, setUsers] = useState<User[]>([])

 let deleteUser = async () => {
    try {
      let response = await axios.delete(`https://dummyjson.com/users/${userId}`)
      console.log(response)
      handleClose()
      toast.success('succuflly deleting')
      getData()

    } catch (error) {
      console.log('error');
      toast.dark('not deleting')

    }
  }


  let getData = async () => {
    try {
      let response = await axios.get('https://dummyjson.com/users')
      setUsers(response?.data?.users || null);

    } catch (error) {
      console.log('error');

    }
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <div>
      <div className="d-flex justify-content-between mx-3">
        <h3 className='fw-bold'>Users List</h3>
        <button onClick={moveToAddUser} className='btn btn-warning text-white'>Add New User</button>
      </div>
      <hr />
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col"></th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Phone</th>
            <th scope="col">Birth Date</th>

            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} >
              <th scope="row" >{user.id} </th>
              <td><img src={user.image} alt="" className='w-25' /></td>
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.birthDate}</td>
              <td>
                <MdEdit size={30} className='text-warning mx-2 ' onClick={() => moveToUpdateUser(user.id)} />
                <MdDelete size={30} className='text-danger  mx-2' onClick={()=>handleShow(user)} />


              </td>
            </tr>
          ))}


        </tbody>
      </table>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Confirm deleting {userData?.firstName}?????????</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="danger" onClick={deleteUser}>
            Delete
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}
