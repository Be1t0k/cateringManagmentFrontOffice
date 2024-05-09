import React, { useEffect, useState } from 'react'
import Dish from '../components/Dish/Dish';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';
import { iconsImgs } from '../utils/images';
import Get from '../API/Get';

function Dishes() {

    const params = useParams();
    const [dishes, setDishes] = useState([]);

    // const dishes = [
    //     { id: 1, title: 'Home', route: 'Home', image: iconsImgs.home },
    //     { id: 2, title: 'Блюда', route: 'Dishes', image: iconsImgs.budget },
    //     { id: 3, title: 'Стоп-лист', route: 'StopList', image: iconsImgs.plane },
    //     { id: 4, title: 'Скидки', route: 'Sales', image: iconsImgs.wallet },
    //     { id: 5, title: 'Заказы', route: 'Orders', image: iconsImgs.bills },
    //     { id: 6, title: 'Сотрудники', route: 'Staff', image: iconsImgs.user },
    //     { id: 7, title: 'Расписание работ', route: 'Schedule', image: iconsImgs.user },
    //     { id: 8, title: 'Settings', route: 'Settings', image: iconsImgs.gears }
    // ]

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getDishes()
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
                    ? <h1 style={{ textAlign: 'center' }}>Подождите, цены загружаются!</h1>
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

export default Dishes