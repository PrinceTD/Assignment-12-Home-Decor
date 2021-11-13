import React, { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

const OrderProduct = () => {
    const { user } = useAuth();
    const [order, setOrder] = useState([])

    useEffect(() => {
        const url =
            fetch(``)
    }, [])
    return (
        <div>

        </div>
    );
};

export default OrderProduct;