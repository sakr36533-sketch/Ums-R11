import  { useContext } from 'react'
import style from './Login.module.css'
import { useForm } from 'react-hook-form'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { AuthContext } from '../Context/AuthContext'


interface LoginTypes{
    username:string;
    password:string;
}
interface AuthContextType{
    saveUserData:()=>void
}
export default function Login() {
let {saveUserData}=useContext(AuthContext) as AuthContextType

    let navigate = useNavigate()

    let {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<LoginTypes>()

 

    let onSubmit = async (data: LoginTypes) => {
    try {
        let response = await axios.post('https://dummyjson.com/auth/login', data);
        
        
        localStorage.setItem('userToken', response?.data?.accessToken);
        
        
        saveUserData(); 

        toast.success("Wow Successfully Login!");
        navigate('/dashbourd');

    } catch (error) {
        console.log('error');
        toast.error("Error Login!");
    }
}




    // let navigate = useNavigate()
    // let { register,
    //      handleSubmit,
    //       formState: { errors } } = useForm<LoginTypes>();

    // let onSubmit = async (data:LoginTypes) => {
    //     try {
    //         let response = await axios.post('https://dummyjson.com/auth/login', data)
    //         console.log(response)
    //         toast.success("Wow Sucssuflly Login!");
    //         navigate('/dashbourd')
    //     } catch (error) {
    //         console.log('error');
    //         toast.error("Error Login!");

    //     }

    // }

    return (
        <>
            <div className={`container-fluid ${style.bg_container}`}>
                <div className="row vh-100 justify-content-center align-items-center">
                    <div className="col-md-4 bg-white p-4 rounded">
                        <div className="title text-center   ">
                            <h3 className="text-bold mb-5   ">User Management System</h3>
                            <h4 className='text-uppercase fs-4 fw-semibold'>Sign In</h4>
                            <small className='text-muted'>Enter your credentials to access your account</small>
                        </div>
                        <form className='mt-5' onSubmit={handleSubmit(onSubmit)} >
                            <div className="mb-3">
                                <label className="form-label">User Name</label>
                                <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Enter your User Name'
                                    {...register('username', { required: 'Please enter user name !!!!!!!!!' })}
                                />
                                {errors.username && <span className='text-danger'>{errors.username.message}</span>}

                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder='Enter your password'
                                    {...register('password', { required: 'Please enter password !!!!!!!!!' })}
                                />
                                {errors.password && <span className='text-danger'>{errors.password.message}</span>}

                            </div>
                            <div className='my-4'>
                                <button type="submit" className="btn btn-warning w-100">Submit</button>
                            </div>

                        </form>

                    </div>
                </div>
            </div>
        </>
    )
}
