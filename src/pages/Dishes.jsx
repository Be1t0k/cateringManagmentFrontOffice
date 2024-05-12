import React, { useEffect, useState } from 'react'
import Dish from '../components/Dish/Dish';
import { useOutletContext, useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import Get from '../API/Get';
import Loader from '../components/Loader/Loader';
import { useDishes } from '../hooks/useDish';
import DishFilter from '../components/DishFilter/DishFilter';
import axios from 'axios';
import Modal from '../components/Modal/Modal';
import CreateDishForm from '../components/CreateDishForm/CreateDishForm';

function Dishes() {

    const params = useParams();
    const [dishes, setDishes] = useState([]);
    const [filter, setFilter] = useOutletContext();
    const sortedAndSearchedDishes = useDishes(dishes, filter.sort, filter.query);
    const [modal, setModal] = useState(false);

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getDishes()
        setDishes(response.data);
    })

    useEffect(() => {
        fetchPriceById(params?.id);
    }, [])

    const removeDish = (dish) => {
        setDishes(dishes.filter(p => p.id !== dish.id))
        axios.post(`http://localhost:8081/api/v1/dish/${dish.id}`)
    }

    const createPost = (newPost) => {
        setDishes([...dishes, newPost])
        setModal(false)
    }

    return (
        <div className="main-content-holder">
            <Modal visible={modal} setVisible={setModal}>
                <CreateDishForm create={createPost} />
            </Modal>
            <DishFilter
                filter={filter}
                setFilter={setFilter}
                fetchGames={dishes} />

            <button style={{width: '250px'}} onClick={() => setModal(true)} className='nav-link'>
                <p>Добавить новое блюдо</p>
            </button>
            {
                isLoading
                    ? <Loader />
                    :
                    <div className="content-flex-wrap">
                        {
                            sortedAndSearchedDishes.map(dish => <Dish id={dish.id} title={dish.title} key={dish.id} remove={removeDish} dish={dish} />)
                        }
                    </div>
            }

        </div>
    )
}

export default Dishes