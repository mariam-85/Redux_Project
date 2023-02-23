import React from 'react'
import style from './index.module.css'

export default function ProductItem({ id, title, price, delete_product }) {
  return (
    <div className={style.products_card} onClick={() => delete_product(id)}>
        <p>Title: { title }</p>
        <p>Price: { price }</p>
    </div>
  )
}
