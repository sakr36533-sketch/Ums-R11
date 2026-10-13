import axios from 'axios';
import  { useEffect } from 'react'; 
import { useForm } from 'react-hook-form';
import { useNavigate, useParams } from 'react-router-dom'; 
import { toast } from 'react-toastify';

interface UserTypes {
  firstName: string;
  lastName: string;
  email: string;
  age: number;
  phoneNumber: number;
  birthDate: string;
}

export default function UpdateUser() {
  let navigate = useNavigate();
  let { id } = useParams(); 

  let {
    register,
    handleSubmit,
    reset, 
    formState: { errors }
  } = useForm<UserTypes>();

  
  useEffect(() => {
    const getUserData = async () => {
      try {
        let response = await axios.get(`https://dummyjson.com/users/${id}`);
       
        reset(response.data); 
      } catch (error) {
        console.log('Error fetching user data', error);
        toast.error("Error loading user data!");
      }
    };

    getUserData();
  }, [id, reset]); 

 
  let onSubmit = async (data: UserTypes) => {
    try {
      
      let response = await axios.put(`https://dummyjson.com/users/${id}`, data);
      console.log('Updated Data:', response.data);
      toast.success("User successfully updated!");
      
      navigate('/dashbourd/users'); 

    } catch (error) {
      console.log('error updating', error);
      toast.error("Error Updating!");
    }
  };

  return (
    <>
      <div className='ms-3'>
        <h3 className='fw-bold'>Update User</h3>
      </div>
      <hr />

      <form action="" className='m-4 shadow-lg p-5 w-75 m-auto' onSubmit={handleSubmit(onSubmit)}>
        <div className="row">
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">First Name</label>
              <input type="text" className="form-control" placeholder="Enter your First Name"
                {...register('firstName', { required: 'Please enter First Name !!!!!!!!!' })}
              />
              {errors.firstName && <span className='text-danger'>{errors.firstName.message}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">Last Name</label>
              <input type="text" className="form-control" placeholder="Enter your Last Name"
                {...register('lastName', { required: 'Please enter Last Name !!!!!!!!!' })}
              />
              {errors.lastName && <span className='text-danger'>{errors.lastName.message}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" placeholder="Enter your Email"
                {...register('email', { required: 'Please enter email !!!!!!!!!' })}
              />
              {errors.email && <span className='text-danger'>{errors.email.message}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">Age</label>
              <input type="number" className="form-control" placeholder="Enter your Age"
                {...register('age', { required: 'Please enter age !!!!!!!!!' })}
              />
              {errors.age && <span className='text-danger'>{errors.age.message}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">Phone Number</label>
              <input type="number" className="form-control" placeholder="Enter your Phone Number"
                {...register('phoneNumber', { required: 'Please enter phoneNumber !!!!!!!!!' })}
              />
              {errors.phoneNumber && <span className='text-danger'>{errors.phoneNumber.message}</span>}
            </div>
          </div>
          <div className="col-md-6">
            <div className="mb-5">
              <label className="form-label">Birth Date</label>
              <input type="date" className="form-control" placeholder="Enter your birth Date"
                {...register('birthDate', { required: 'Please enter birthDate !!!!!!!!!' })}
              />
              {errors.birthDate && <span className='text-danger'>{errors.birthDate.message}</span>}
            </div>
          </div>
        </div>
        <div className='text-center'>
          <button className='btn btn-warning w-50 '>Update User</button>
        </div>
      </form>
    </>
  )
}