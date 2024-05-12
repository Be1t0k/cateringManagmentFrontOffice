import React, { useEffect, useState } from 'react'
import Dish from '../components/Dish/Dish';
import { useOutletContext, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { iconsImgs } from '../utils/images';
import Get from '../API/Get';
import Loader from '../components/Loader/Loader';
import { useDishes } from '../hooks/useDish';
import DishFilter from '../components/DishFilter/DishFilter';
import Order from '../components/Order/Order';

const Orders = () => {

    const params = useParams();
    const [orders, setOrders] = useState([]);
    const [filter, setFilter] = useOutletContext();
    const sortedAndSearchedDishes = useDishes(orders, filter.sort, filter.query);

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getOrders()
        setOrders(response.data);
    })

    useEffect(() => {
        fetchPriceById(params?.id);
    }, [])


    return (
        <div className="main-content-holder">
            <DishFilter
                filter={filter}
                setFilter={setFilter}
                fetchGames={orders} />
            {
                isLoading
                    ? <Loader />
                    :
                    <div className="content-flex-wrap">
                        {
                            orders.map(order => <Order order={order} key={order.id} />)
                        }
                    </div>
            }

        </div>
    )
}

export default Orders