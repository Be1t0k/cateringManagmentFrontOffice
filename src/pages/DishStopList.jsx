import React, { useEffect, useState } from 'react'
import { useFetching } from '../hooks/useFetching';
import { useOutletContext, useParams } from 'react-router-dom';
import Dish from '../components/Dish/Dish';
import Get from '../API/Get';
import Loader from '../components/Loader/Loader';
import DishFilter from '../components/DishFilter/DishFilter';
import { useDishes, useStoppedDishes } from '../hooks/useDish';

const DishStopList = () => {

    const params = useParams();
    const [filter, setFilter] = useOutletContext();
    const [dishes, setDishes] = useState([]);
    const sortedAndSearchedDishes = useStoppedDishes(dishes, filter.sort, filter.query);

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
        <DishFilter
                filter={filter}
                setFilter={setFilter}
                fetchGames={dishes} />
            {
                isLoading
                    ? <Loader/>
                    :
                    <div className="content-flex-wrap">
                        {
                            sortedAndSearchedDishes.map(dish => <Dish id={dish.id} title={dish.title} key={dish.id} dish={dish}  />)
                        }
                    </div>
            }

        </div>
  )
}

export default DishStopList