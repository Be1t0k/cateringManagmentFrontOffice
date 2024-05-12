import React, { useEffect, useState } from 'react';
import AddInputs from '../DynamicalAddInputs/AddInputs';
import MySelect from '../../UI/MySelect/MySelect';
import Get from '../../API/Get';
import { useFetching } from '../../hooks/useFetching';
import axios from 'axios';

const CreateDishForm = ({ create }) => {
    const [dish, setDish] = useState({ title: '', cost: '', discount: 0, calorie: 0, dishCategory: '', dishStatus: '', technologicalMap: '' })

    const [ingredients, setIngredients] = useState([]);

    const addNewdish = async (e) => {
        e.preventDefault()
        const newdish = {
            ...dish, id: Date.now()
        }
        create(newdish);
        // console.log(newdish);
        // console.log(inputs);

  const myArray = inputs.map(function(obj) {
    return {count: parseInt(obj.count), ingredient: parseInt(obj.ingredient)};
});

        const addingDish = {
                "dish":{
                "title": dish.title,
                "cost": Number(dish.cost),
                "discount": Number(dish.discount),
                "calorie": Number(dish.calorie),
                "technologicalMap": dish.technologicalMap,
                "dishCategory": dish.dishCategory,
                "dishStatus": dish.dishStatus
                },
                "compositions": [
                ...myArray
                ]
        }
        console.log(addingDish);
        try {
            const response = await axios.post('http://localhost:8081/api/v1/dish',
            addingDish,
                {
                    headers: { 'Content-Type': 'application/json' }
                }
            );
            console.log(response?.data);
            console.log(JSON.stringify(response));
        } catch (err) {
            if (!err?.response) {
                console.log(err.response);
            }
        }

        // setDish({ title: '', cost: '', discount: 0, calorie: 0, dishCategory: '', dishStatus: '', technologicalMap: '' });
        // setInputs([{ count: "", ingredient: "" }]);
    }

    const [fetchPriceById, isLoading] = useFetching(async () => {
        const response = await Get.getIngredients()
        setIngredients(response.data);
    })

    useEffect(() => {
        fetchPriceById();
    }, [])


    const [inputs, setInputs] = useState([{ count: 0, ingredient: 0 }]);

    const handleAddInput = () => {
        setInputs([...inputs, { count: 0, ingredient: 0 }]);
    };

    const handleChange = (event, index) => {
        let { name, value } = event.target;
        let onChangeValue = [...inputs];
        onChangeValue[index][name] = Number(value);
        setInputs(onChangeValue);
    };

    const handleDeleteInput = (index) => {
        const newArray = [...inputs];
        newArray.splice(index, 1);
        setInputs(newArray);
    };

    return (
        <form>
            <h1 className='btn-login-center'>Добавление нового блюда</h1>

            {/*Управляемый компонент*/}
            <label htmlFor="title">title:</label>
            <input
                id='title'
                value={dish.title}
                onChange={e => setDish({ ...dish, title: e.target.value })}
                type="text"
                placeholder="Название блюда"
            />

            {/*Неуправляемый\Неконтролируемый компонент*/}
            <label htmlFor="cost">cost:</label>
            <input
                id='cost'
                value={dish.cost}
                onChange={e => setDish({ ...dish, cost: e.target.value })}
                type="text"
                placeholder="Стоимость"
            />

            <label htmlFor="discount">discount:</label>
            <input
                id='discount'
                value={dish.discount}
                onChange={e => setDish({ ...dish, discount: e.target.value })}
                type="text"
                placeholder="Скидка"
            />

            <label htmlFor="calorie">calorie:</label>
            <input
                id='calorie'
                value={dish.calorie}
                onChange={e => setDish({ ...dish, calorie: e.target.value })}
                type="text"
                placeholder="Калории"
            />

            <label htmlFor="dishCategory">dishCategory:</label>
            <MySelect
                id='dishCategory'
                value={dish.dishCategory}
                onChange={value => setDish({ ...dish, dishCategory: value })}
                defaultValue="Категория блюда"
                options={[
                    { value: 'FIRST_COURSE', title: 'Первое блюдо' },
                    { value: 'MAIN_COURSE', title: 'Второе блюдо' },
                    { value: 'SWEET', title: 'Сладости' },
                    { value: 'BEVERAGES', title: 'Напитки' },
                    { value: 'OTHER', title: 'Другое' }
                ]}
            />

            <label htmlFor="dishStatus">dishStatus:</label>
            <MySelect
                id='dishStatus'
                value={dish.dishStatus}
                onChange={value => setDish({ ...dish, dishStatus: value })}
                defaultValue="Особенность блюда"
                options={[
                    { value: 'REGULAR', title: 'Стандарт. меню' },
                    { value: 'SPECIAL', title: 'Измененное' }
                ]}
            />
            <br />
            <p style={{color: 'var(--clr-primary)'}}>Доступные ингредиенты</p>
            <br />
            {ingredients.map(
                elem => <p key={elem.id}>{elem.title}</p>
            )}
            <label htmlFor="map">Технологическая карта блюда:</label>
            <textarea
                id="map"
                cols="40"
                rows="5"
                value={dish.technologicalMap}
                onChange={e => setDish({ ...dish, technologicalMap: e.target.value })}
                type="text"
                placeholder="Технологическая карта блюда">
            </textarea>
            <AddInputs ingredients={ingredients} inputs={inputs} handleAddInput={handleAddInput} handleChange={handleChange} handleDeleteInput={handleDeleteInput}/>
            <button className='nav-link btn-login-center' onClick={addNewdish}>Создать пост</button>
        </form>
    );
};

export default CreateDishForm;