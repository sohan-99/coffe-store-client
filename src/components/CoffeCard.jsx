/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */

import { Link } from "react-router-dom";
import Swal from "sweetalert2";


const CoffeCard = ({ coffee,coffees,setCoffees }) => {
    const { _id, name, quantity, supplier, taste, category, photo, details } = coffee;

    const handleDelete = _id => {
        console.log(_id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffe/${_id}`, {
                    method: 'DELETE',


                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your Coffe has been deleted.',
                                'success'
                            )
                            const remaining = coffees.filter(cof => cof._id !== _id);
                            
                            setCoffees(remaining
                                )
                        }
                    })
            }
        })
    }
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img src={photo} /></figure>
            <div className="flex  mt-12 space-x-6">
                <div>
                    <h2 className="card-title">Name :{name}</h2>
                    <p className="card-title">Quantity : {quantity}</p>
                    <p className="card-title">Supplier : {supplier}</p>
                </div>
                <div className="">
                    <div className="btn-group btn-group-vertical space-y-4">
                        <button className="btn btn-active">VIEW</button>
                        <Link to={`updateCoffe/${_id}`}>
                            <button className="btn btn-neutral">EDIT</button>
                        </Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn bg-red-600">XXX</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeCard;