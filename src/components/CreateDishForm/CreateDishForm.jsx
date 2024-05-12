import React, {useState} from 'react';

const CreateDishForm = ({create}) => {
    const [dish, setDish] = useState({title: '', cost: ''})


    const addNewdish = (e) => {
        e.preventDefault()
        const newdish = {
            ...dish, id: Date.now()
        }
        create(newdish)
        setDish({title: '', cost: ''})
    }

    return (
        <form>
            {/*Управляемый компонент*/}
            <input
                value={dish.title}
                onChange={e => setDish({...dish, title: e.target.value})}
                type="text"
                placeholder="Название блюда"
            />
            <br />
            {/*Неуправляемый\Неконтролируемый компонент*/}
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Стоимость"
            />
            <br />
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Скидка"
            />
            <br />
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Калории"
            />
            <br />
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Категория"
            />
            <br />
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Особенность блюда"
            />
            <br />
            <input
                value={dish.cost}
                onChange={e => setDish({...dish, cost: e.target.value})}
                type="text"
                placeholder="Технологическая карта блюда"
            />
            <br />
            <select>
                
                <option value="асус">асус</option>
                <option value="сус">сус</option>
            </select>
            <button className='nav-link' onClick={addNewdish}>Создать пост</button>
        </form>
    );
};

export default CreateDishForm;