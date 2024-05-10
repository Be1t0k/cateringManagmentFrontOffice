import React, { useEffect, useState } from 'react'
import Dish from '../components/Dish/Dish';
import { useOutletContext, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { iconsImgs } from '../utils/images';
import Get from '../API/Get';
import Loader from '../components/Loader/Loader';
import { useDishes } from '../hooks/useDish';
import DishFilter from '../components/DishFilter/DishFilter';

function Dishes() {

    const params = useParams();
    const [dishes, setDishes] = useState([]);
    const [filter, setFilter] = useOutletContext();
    // const [filter, setFilter] = useState({ sort: '', query: '' });
    const sortedAndSearchedDishes = useDishes(dishes, filter.sort, filter.query);

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getDishes()
        setDishes(response.data);
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
                            sortedAndSearchedDishes.map(dish => <Dish id={dish.id} title={dish.title} key={dish.id} />)
                        }
                    </div>
            }

        </div>
    )
}

export default Dishes