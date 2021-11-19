import React, { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';

const MyOrder = () => {
    const { user } = useAuth()
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/orders/${user.email}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, []);

    const handleDeleteConfirm = (id) => {
        const confirm = window.confirm("are u sure")
       if(confirm){
        fetch(
            `https://tranquil-ridge-16978.herokuapp.com/orders/${id}`,
            {
                method: "DELETE",
            }
        )
            .then((res) => res.json())
            .then((data) => {
                const rest = order.filter((SingleOrders) =>SingleOrders._id !== id);
                setOrder(rest);
               
            });
       }
        
    };
    return (
        <div>
            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Product Id</th>
                        <th scope="col">Product name</th>
                        <th scope="col">Order Status</th>
                        <th scope="col">Order delete</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        order?.map(SingleOrder => 
                            <tr
                            key={SingleOrder._id}
                            >
                                <td>{SingleOrder._id}</td>
                                <td>{SingleOrder.name}</td>
                                <td>Panding</td>
                                <td><button onClick={()=>handleDeleteConfirm(SingleOrder._id)}>X</button></td>

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
    );
};

export default MyOrder;