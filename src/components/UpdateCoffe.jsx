/* eslint-disable no-unused-vars */
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";


const UpdateCoffe = () => {

    const coffe = useLoaderData();
        const { _id, name, quantity, supplier, taste, category, photo, details } = coffe;


        const handleUpdateCoffe = e => {
            e.preventDefault();
    
            const form = e.target;
    
            const name = form.name.value;
            const quantity = form.quantity.value;
            const supplier = form.supplier.value;
            const taste = form.taste.value;
            const category = form.category.value;
            const details = form.details.value;
            const photo = form.photo.value;
    
            const updatedCoffe = { name, quantity, supplier, taste, category, photo, details };
            console.log(updatedCoffe);
    
            // sent data to the server 
            fetch(`http://localhost:5000/coffe/${_id}`, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updatedCoffe)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.modefiedCount>0) {
                        Swal.fire({
                            title: 'Success!',
                            text: 'Coffe Updated Successfully !',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
    
    
        };

    return (
        <div className="bg-[#F4F3F0] p-24">
        <h2 className="text-3xl text-center font-extrabold">Update Coffee :{name}</h2>
        <form onSubmit={handleUpdateCoffe}>
            {/* name & quantity */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Coffee Name</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="name"
                        defaultValue={name} placeholder="Coffee Name" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control ml-4 md:w-1/2">
                    <label className="label">
                        <span className="label-text">Available Quantity</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Available Quantity" name="quantity" 
                        defaultValue={quantity}  className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Supplier & Taste */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Supplier</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="supplier" defaultValue={supplier} placeholder="Supplier" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control ml-4 md:w-1/2">
                    <label className="label">
                        <span className="label-text">Taste</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Taste" 
                        defaultValue={taste} name="taste" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            {/* Category & Details */}
            <div className="md:flex mb-8">
                <div className="form-control md:w-1/2">
                    <label className="label">
                        <span className="label-text">Category</span>
                    </label>
                    <label className="input-group">
                        <input type="text" name="category" 
                        defaultValue={category}  placeholder="Category" className="input input-bordered w-full" />
                    </label>
                </div>
                <div className="form-control ml-4 md:w-1/2">
                    <label className="label">
                        <span className="label-text">Details</span>
                    </label>
                    <label className="input-group">
                        <input type="text" placeholder="Details" 
                        defaultValue={details} name="details" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <div className="mb-8">
                <div className="form-control w-full">
                    <label className="label">
                        <span className="label-text">Photo URL</span>
                    </label>
                    <label className="input-group">
                        <input type="text" 
                        defaultValue={photo} placeholder="Photo URL" name="photo" className="input input-bordered w-full" />
                    </label>
                </div>
            </div>
            <input type="submit" value="Update Coffee" className="btn btn-block bg-[#D2B48C]" />
        </form>
    </div>
    );
};

export default UpdateCoffe;