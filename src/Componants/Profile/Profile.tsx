import axios from 'axios';
import  { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


interface UserProfile {
  id: number;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  birthDate: string;
  gender: string;
  university: string;
}

export default function Profile() {
  const [profileData, setProfileData] = useState<UserProfile | null>(null);


  const getProfileData = async () => {
    try {
     
      
      let response = await axios.get('https://dummyjson.com/users/1');
      setProfileData(response.data);
    } catch (error) {
      console.log('Error fetching profile', error);
      toast.error('Error loading profile data!');
    }
  };

  useEffect(() => {
    getProfileData();
  }, []);

  return (
    <>
      <div className='ms-3'>
        <h3 className='fw-bold'>My Profile</h3>
      </div>
      <hr />

      
      {!profileData ? (
        <div className="text-center mt-5">
          <div className="spinner-border text-warning" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      ) : (
        
        <div className="card shadow-lg mx-auto mt-4 p-4" style={{ maxWidth: '600px', borderRadius: '15px' }}>
          <div className="text-center">
            <img 
              src={profileData.image} 
              alt="Profile" 
              className="rounded-circle border border-3 border-warning mb-3" 
              style={{ width: '150px', height: '150px', objectFit: 'cover' }} 
            />
            <h3 className="fw-bold">{profileData.firstName} {profileData.lastName}</h3>
            <p className="text-muted mb-4">{profileData.email}</p>
          </div>

          <ul className="list-group list-group-flush fs-5">
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <span className="fw-bold">Phone Number</span>
              <span className="text-muted">{profileData.phone}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <span className="fw-bold">Birth Date</span>
              <span className="text-muted">{profileData.birthDate}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <span className="fw-bold">Gender</span>
              <span className="text-muted">{profileData.gender}</span>
            </li>
            <li className="list-group-item d-flex justify-content-between align-items-center p-3">
              <span className="fw-bold">University</span>
              <span className="text-muted">{profileData.university}</span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
}