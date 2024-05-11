import React, { useEffect, useState } from 'react'
import Get from '../API/Get';
import { useParams } from 'react-router-dom';
import { useFetching } from '../hooks/useFetching';

const DishPage = () => {

  const params = useParams();
  const [dish, setDish] = useState([]);
  const [compositions, setCompositions] = useState([]);

  const [fetchPriceById, isLoading] = useFetching(async (id) => {
    const response = await Get.getDishById(params?.id)
    setDish(response.data);
    setCompositions(response.data.compositions);
  })

  useEffect(() => {
    fetchPriceById(params?.id);
  }, [])

  return (
    <div className="">
      <div className="">
        <p>{`Название блюда - ${dish.title}`}</p>
        <br />
        <img src="http://localhost:3000/static/media/person_two.348b2fcc3bf8c629eea7.jpg" alt="" />
        <br />
        {
          compositions.map(element =>
          <div>
            <p key={element.id}>{`Состав ${element.count} ${element.ingredient.measure.type}`}</p>
            <p key={element.id}>{`Ингредиент ${element.ingredient.title}`}</p>
          </div>  
          )
        }
        <br />
        <p>{`Калорийность ${dish.calorie}`}</p>
        <br />
      </div>
      <div className="grid-c8-content">
        <p className="text text-silver-v1">{`Технологический процесс ${dish.technologicalMap}`}</p>
      </div>
    </div>
  )
}

export default DishPage