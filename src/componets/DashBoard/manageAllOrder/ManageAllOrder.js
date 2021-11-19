import React, { useEffect, useState } from 'react';

const ManageAllOrder = () => {
    const [order, setOrder] = useState([]);
    useEffect(() => {
        fetch(`https://tranquil-ridge-16978.herokuapp.com/orders`)
            .then((res) => res.json())
            .then((data) => setOrder(data));
    }, [])

    return (
        <div>
            <h4>Manage All Order</h4>
            <div>
            <table className="table">
                <thead>
                    <tr>

                        <th scope="col">Product Id</th>
                        <th scope="col">Product name</th>
                       
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
                               
                               

                            </tr>
                        )
                    }

                </tbody>
            </table>
        </div>
        </div>
    );
};

export default ManageAllOrder;