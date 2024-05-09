import React from 'react'
import MyButton from '../MyButton/MyButton';
import { getPagesArray } from '../../utils/pages';

const MyPaginate = ({ totalPages, page, changePage }) => {
  let PagesArray = getPagesArray(totalPages);
  return (
    <div className='page_wrapper'>
      {
        PagesArray.map(p =>
          <MyButton
            onClick={() => changePage(p)}
            key={p}
            className={page == p ? 'page_wrapper__page page__current' : 'page_wrapper__page'}
          >{p+1}
          </MyButton>
        )
      }
    </div>
  )
}

export default MyPaginate