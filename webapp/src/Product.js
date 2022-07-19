import react from 'react';
import './Product.css';

function Product(){
  return (
    <div className='product'>
      <div className='product_info'>
        <p>제품1</p>
        <p className='product_price'>
          <small>가격</small>
          <strong>10,000</strong>
          <small>원</small>
        </p>
        <div className='product_rating'>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
          <p>⭐</p>
        </div>
      </div>

      <img src="https://post-phinf.pstatic.net/MjAxNzExMTVfOTcg/MDAxNTEwNzMxMjAxNzMw.55ihPnB6d-Y-MuT3cCIgqAiwNlLR5GOIUfUDHwsw68Eg.S-bPeRceHEq_rjEnOiS1RvjphGgnCjuWp6FQFdcL10cg.JPEG/McLaren-720S-2018-1024-03.jpg?type=w1200" alt=""/>
      <button>장바구니에 담기</button>
    </div>
  )
}

export default Product;