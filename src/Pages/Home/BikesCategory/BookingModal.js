import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { AuthContext } from '../../../context/AuthProvider';

import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const BookingModal = ({ bikeInfo, setBikeInfo }) => {
    const { user } = useContext(AuthContext)
    const { name, resalePrice, img } = bikeInfo;
    // console.log(bikeInfo)
    // console.log(user)

    const [selectedDate, setSelectedDate] = useState(new Date())


    const handleBooking = event => {
        event.preventDefault();

        const form = event.target;
        const slot = form.slot.value;
        const buyerName = form.name.value;
        const date = form.date.value;
        const email = form.email.value;
        const address = form.address.value;
        const meetLocation = form.meetLocation.value;
        const phone = form.phone.value;


        const booking = {
            buyerName: buyerName,
            bikeName: name,
            date,
            email,
            meetLocation,
            address,
            phone,
            resalePrice,
            img
        }
        console.log(booking);



        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)

               if(data.acknowledged){
                setBikeInfo(null)
                toast.success('Booking Confirm!!')
                // refetch()
               }
               else{
                toast.error(data.message)
               }
            })


    }

    return (
        <>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>

                    <h3 className="text-lg font-bold">{name}</h3>
                    <h3 className="text-lg font-bold">Price: ${resalePrice}</h3>

                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-3 mt-10'>
                        <input name='name' type="text" defaultValue={user?.displayName} readOnly disabled placeholder="Your Name" className="input input-bordered w-full" />
                        <input name='date' type="text"  readOnly disabled defaultValue={format(selectedDate, 'PP')} placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} readOnly disabled placeholder="Email Address" className="input input-bordered w-full" />
                        <input name='address' required type="text" placeholder="Address" className="input input-bordered w-full" />
                        <input name='meetLocation' required type="text" placeholder="Meet Location" className="input input-bordered w-full" />
                        <input name='phone' required type="text" placeholder="Phone Number" className="input input-bordered w-full" />
                        <br />
                        <input className='w-full btn-primary py-2 rounded-md' type="submit" value="submit" />
                    </form>

                </div>
            </div>
        </>
    );
};

export default BookingModal;