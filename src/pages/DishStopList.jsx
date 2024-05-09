import React, { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching';
import { useParams } from 'react-router-dom';
import Dish from '../components/Dish/Dish';
import Get from '../API/Get';
import Loader from '../components/Loader/Loader';

const DishStopList = () => {

    const params = useParams();
    const [dishes, setDishes] = useState([]);

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getStopListDishes()
        setDishes(response.data);
        // setPrices(response.data.linkDTO);
    })

    useEffect(() => {
        fetchPriceById(params?.id);
    }, [])

  return (
    <div className="main-content-holder">
            {
                isLoading
                    ? <Loader/>
                    :
                    <div className="content-flex-wrap">
                        {
                            dishes.map(dish => <Dish id={dish.id} title={dish.title} />)
                        }
                    </div>
            }

        </div>
  )
}

export default DishStopList