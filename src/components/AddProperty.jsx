import axios from 'axios';
import React from 'react'
import Swal from 'sweetalert2';
import useAuth from '../hooks/useAuth';
import useAxiosSecure from '../hooks/useAxiosSecure';
// import useAxios from '../hooks/useAxios';

const AddProperty = () => {
  // const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth()
  const handleAddProperty = e =>{
    e.preventDefault();
    const propertyName = e.target.propertyName.value;
    const image = e.target.image.value;
    const propertyPrice = e.target.propertyPrice.value;
    const location = e.target.location.value;
    const seller_image = e.target.seller_image.value;
    const date = e.target.date.value;
    const description = e.target.description.value;
    const seller_contact = e.target.seller_contact.value;
    const category = e.target.category.value;
    console.log(propertyName, image, propertyPrice, location, seller_image, date, category);

    const newProperties = {propertyName, image, propertyPrice, location, seller_image, date, description, seller_contact, category, 
      email: user.email,
      user_name: user.displayName
    };
    
    axiosSecure.post('/products', newProperties)
    .then(data => {
      console.log(data.data);
      if(data.data.insertedId){
        Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Properties has been created",
        showConfirmButton: false,
        timer: 1500
      });
      }
    })

  }

  return (
    <div>
      <form onSubmit={handleAddProperty}>
        <div className='flex justify-between max-w-[1000px] mx-auto p-10 px-20 gap-5 items-start'>
            <div className='flex-1'>
              <fieldset className="fieldset">
              <legend className="fieldset-legend">Property Name</legend>
              <input type="text" name='propertyName' className="input w-full" placeholder="e.g. Hill Cottage, Duplex House" />
              </fieldset>
              <fieldset className="fieldset">
              <legend className="fieldset-legend">Min Price You want to Sale ($)</legend>
              <input type="text" name='propertyPrice' className="input w-full" placeholder="e.g. 18.5" />
              </fieldset>
            </div>
            <div className='flex-1'>
                  <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend w-full">Category</legend>
                  <select name="category" defaultValue="" className="select w-full">
                  <option value="" disabled>Pick a Catagory</option>
                  <option>Commercial</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                  </select>
                  </fieldset>
                  
                   <fieldset className="fieldset">
                    <legend className="fieldset-legend">Posted Date</legend>
                    <input type="date" name="date" defaultValue={new Date().toISOString().split("T")[0]} className="input w-full" />
                    </fieldset>
             </div>  
        </div>
        {/* Your Product Image URL */}
          <div className=' max-w-[1000px] mx-auto px-20 '>
             <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Product Image URL</legend>
              <input type="text" name='image' className="input w-full" placeholder="https://..." />
              </fieldset>
          </div>
          {/* saler part   */}
          <div className='flex justify-between items-center max-w-[1000px] mx-auto px-20 gap-5'>
             <div className='flex-1'>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Saler Name</legend>
                  <input type="text" name='seller_name' className="input w-full" placeholder="e.g. Artisan Roasters" />  
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Contact</legend>
                  <input type="text" name='seller_contact' className="input w-full" placeholder="e.g. +1-555-1234" />
                </fieldset>
             </div>
             <div className='flex-1'>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Email</legend>
                  <input type="text" name='email' className="input w-full" placeholder="leli31955@nrlord.com" />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Image URL</legend>
                  <input type="text" name='seller_image' className="input w-full" placeholder="https://..." />
                </fieldset>
             </div>
          </div>
          {/* location */}
          <div className='max-w-[1000px] mx-auto px-20'>
               <fieldset className="fieldset">
               <legend className="fieldset-legend">Location</legend>
               <input type="text" name='location' className="input w-full" placeholder="City, Country" />
               </fieldset>
          </div>
          {/* Simple Description about your Product */}
          <div className='max-w-[1000px] mx-auto px-20'>
             <fieldset className="fieldset">
               <legend className="fieldset-legend">Simple Description about your Properties</legend>
               <input type="text" name='description' className="input w-full h-30" placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... " />
              </fieldset>
          </div>

          {/* Button */}
          <div className='max-w-[1000px] mx-auto px-20 mt-5'>
            <button className='btn w-full  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg'>
              Create a Properties
            </button>
          </div>
      </form>
        

    </div>
  )
}

export default AddProperty