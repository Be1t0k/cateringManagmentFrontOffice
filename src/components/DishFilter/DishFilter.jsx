import React from 'react';
import MyInput from '../../UI/MyInput/MyInput';
import MyButton from '../../UI/MyButton/MyButton';
import MySelect from '../../UI/MySelect/MySelect';


const DishFilter = ({ filter, setFilter, fetchGames }) => {

    return (
        <div className='game_filter'>
            {/* <div>
            <MyButton onClick={fetchGames}>GetGames</MyButton>
            </div> */}
            {/* <MyInput
                value={filter.query}
                onChange={e => setFilter({ ...filter, query: e.target.value })}
                placeholder="Введите название" /> */}
            {/* <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({ ...filter, sort: selectedSort })}
                defaultValue={'По умолчанию'} options={[
                    { value: 'title', title: 'По названию' },
                    { value: 'description', title: 'По описанию' }
                ]}>
                По умолчанию
            </MySelect> */}
        </div>
    )
}

export default DishFilter