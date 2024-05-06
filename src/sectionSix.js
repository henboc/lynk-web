// components/SectionOne.js

import React, { useState } from 'react';
const SectionSix = () => {
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: '',
      });
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.id]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
    
        
        createWaitlistUser(formData);
    
       
      };
    
      const createWaitlistUser = async (data) => {
        setIsLoading(true)
        try {
          const response = await fetch(`http://93.127.162.78:8080/api/v1/create-waitlist-user`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
          });
    
          if (response.status === 200) {
            console.log(response.status);
             setSuccessMessage('You have been added to the Waitlist');
             setErrorMessage('');
             setFormData({
                firstName: '',
                lastName: '',
                email: '',
                phoneNumber: '',
              });
             setTimeout(() => {
                setSuccessMessage('');
              }, 5000);
            console.log('WaitlistUser created successfully');
            setIsLoading(false)
          } else {
            const result = await response.json();
            setErrorMessage(result.message);
            setSuccessMessage('');
            setTimeout(() => {
                setErrorMessage('');
              }, 10000);
            console.error('Failed to create WaitlistUser');
            setIsLoading(false)
          }
        } catch (error) {
          console.error('An error occurred:', error);
          setIsLoading(false)
        }
      };
    
  return (
    <section className="section-six">
        <div className="container  wow fadeInUp" data-wow-delay="0.7s">
            <p className='sixP1'>Be part of what's Next</p>
            <p className='sixP2'>Sign up for our Waitlist</p>
            <p className='sixP3'>And Be <span className="sixP2Half">Notified</span></p>
            <div className="row justify-content-center">
                <div className="col-md-6">
                {successMessage && <div style={{ color: 'white', paddingBottom:30 }}>{successMessage}</div>}
                {errorMessage && <div style={{ color: 'red',paddingBottom:30 }}>{errorMessage}</div>}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                    <input type="text" className="form-control curve" id="firstName" placeholder='First Name' style={{ border: '1px solid #fff', backgroundColor: 'transparent', color: '#ffffff' }} value={formData.firstName}
                    onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="text" className="form-control curve" id="lastName" placeholder='Last Name' style={{ border: '1px solid #fff', backgroundColor: 'transparent', color: '#ffffff' }} value={formData.lasttName}
                    onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="email" className="form-control curve" id="email" placeholder='Email' style={{ border: '1px solid #fff', backgroundColor: 'transparent', color: '#ffffff' }} value={formData.email}
                    onChange={handleChange}/>
                    </div>
                    <div className="mb-3">
                    <input type="tel" className="form-control curve" id="phoneNumber" placeholder='Phone Number' style={{ border: '1px solid #fff', backgroundColor: 'transparent', color: '#ffffff' }} value={formData.phoneNumber}
                    onChange={handleChange}/>
                    </div>
                    <button type="submit" className="btn btn-primary curve sec6Sub">{isLoading ? 'Submitting...' : 'Submit'}</button>
                </form>
                </div>
            </div>
        </div>
    </section>
  );
};

export default SectionSix;
