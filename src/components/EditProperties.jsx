import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAxiosSecure from '../hooks/useAxiosSecure';


const EditProperties = () => {
    const { id } = useParams();
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
     const [condition, setCondition] = useState("new")

     useEffect(() => {
        axiosSecure.get(`/products/${id}`)
        
        .then(res => setProduct(res.data)
    );
     }, [id, axiosSecure]);


     const [formData, setFormData] = useState({
            propertyName: "",
            propertyPrice: "",
            category: "",
            image: "",
            seller_name: "",
            seller_contact: "",
            email: "",
            seller_image: "",
            location: "",
            shortDescription: "",
            date: ""
        });

     useEffect(() => {
        if(product) {
            setFormData({
                propertyName: product.propertyName || "",
                propertyPrice: product.propertyPrice || "",
                category: product.category || "",
                image: product.image || "",
                seller_name: product.user_name || "",
                seller_contact: product.seller_contact || "",
                email: product.user_email || "",
                seller_image: product.seller_image || "",
                location: product.location || "",
                date: product.date || "",
                shortDescription: product.shortDescription || "",
            });
             setCondition(product.condition || "new");
        }
     }, [product]);

     const handleChange = (e) => {
      console.log("DATA SENDING:", {
        ...formData,
         condition
        });
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
     };

     const handleUpdate = async (e) => {
  e.preventDefault();

  try {
    await axiosSecure.patch(`/products/${id}`, {
      ...formData,
      condition
    });

    alert("Product updated successfully!");
    navigate("/myproperty");
  } catch (error) {
    console.log(error);
  }
};

  return (
     <div>
      <form onSubmit={handleUpdate}>
        <div className='flex justify-between max-w-[1280px] mx-auto px-4 md:px-30 gap-5 md:gap-20 items-start mt-15'>
            <div className='flex-1'>
              <fieldset className="fieldset">
              <legend className="fieldset-legend">Property Name</legend>
              <input type="text" name='propertyName' value={formData.propertyName || ""} onChange={handleChange} className="input w-full" placeholder="e.g. Hill Cottage, Duplex House" />
              </fieldset>
              <fieldset className="fieldset">
              <legend className="fieldset-legend">Min Price You want to Sale ($)</legend>
              <input type="text" value={formData.propertyPrice} name='propertyPrice' onChange={handleChange} className="input w-full" placeholder="e.g. 18.5" />
              </fieldset>
            </div>
            <div className='flex-1'>
                  <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend w-full">Category</legend>
                  <select name="category" value={formData.category} onChange={handleChange}  className="select w-full">
                  <option value="" disabled>Pick a Catagory</option>
                  <option>Commercial</option>
                  <option>Rent</option>
                  <option>Sale</option>
                  <option>Land</option>
                  </select>
                  </fieldset>
                  
                   <fieldset className="fieldset">
                    <legend className="fieldset-legend">Posted Date</legend>
                    <input type="date"  onChange={handleChange} name="date" defaultValue={new Date().toISOString().split("T")[0]} className="input w-full" />
                    </fieldset>
             </div>  
        </div>
        {/* Your Product Image URL */}
          <div className=' max-w-[1280px] mx-auto px-4 md:px-30 '>
             <fieldset className="fieldset">
              <legend className="fieldset-legend">Your Product Image URL</legend>
              <input type="text" onChange={handleChange} value={formData.seller_image} name='image' className="input w-full" placeholder="https://..." />
              </fieldset>
          </div>
          {/* saler part   */}
          <div className='flex justify-between items-center max-w-[1280px] mx-auto px-4 md:px-30 gap-5 md:gap-20'>
             <div className='flex-1'>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Saler Name</legend>
                  <input type="text" onChange={handleChange} value={formData.seller_name} name='seller_name' className="input w-full" placeholder="e.g. Artisan Roasters" />  
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Contact</legend>
                  <input type="text" onChange={handleChange} value={formData.seller_contact} name='seller_contact' className="input w-full" placeholder="e.g. +1-555-1234" />
                </fieldset>
             </div>
             <div className='flex-1'>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Email</legend>
                  <input type="text" onChange={handleChange} name='email' value={formData.email} className="input w-full" placeholder="leli31955@nrlord.com" />
                </fieldset>
                <fieldset className="fieldset">
                  <legend className="fieldset-legend">Seller Image URL</legend>
                  <input type="text" value={formData.seller_image} onChange={handleChange} name='seller_image' className="input w-full" placeholder="https://..." />
                </fieldset>
             </div>
          </div>
          {/* location */}
          <div className='max-w-[1280px] mx-auto px-4 md:px-30 gap-5 md:gap-20'>
               <fieldset className="fieldset">
               <legend className="fieldset-legend">Location</legend>
               <input type="text" value={formData.location} onChange={handleChange} name='location' className="input w-full" placeholder="City, Country" />
               </fieldset>
          </div>
          {/* Simple Description about your Product */}
          <div className='max-w-[1280px] mx-auto px-4 md:px-30'>
             <fieldset className="fieldset">
               <legend className="fieldset-legend">Simple Description about your Properties</legend>
               <input type="text" onChange={handleChange} value={formData.description} name='shortDescription' className="input w-full h-30" placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough..... " />
              </fieldset>
          </div>

          {/* Button */}
          <div className='max-w-[1280px] mx-auto px-4 md:px-30 mt-5'>
            <button className='btn w-full  bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white font-semibold text-lg'>
              update Properties
            </button>
          </div>
      </form>
        

    </div>
  )
}

export default EditProperties