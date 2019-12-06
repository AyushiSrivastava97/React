import React from 'react'

function ShoeList() {
    const brands = [
        {
        id: 1,
        name: 'Reebok',
        price: 2520,
        size: 'S,M,L'
    },
    {
        id: 2,
        name: 'Puma',
        price: 1500,
        size: 'S,M,L'
    },
    {
        id: 3,
        name: 'Nike',
        price: 3000,
        size: 'S,M,L'

    }



    ]
const brandList = brands.map(brand => (
        <brands brand={brand}/>
    ))
    return  <div> { brandList }</div>

}

export default ShoeList