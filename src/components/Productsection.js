import React from 'react';
import doctors from './doctors.json';
import styled from 'styled-components';
import ProductItem from './ProductItem';

const ProductsectionBlock = styled.div`
    border-top:107px solid green;
    .tabs { display:flex; justify-content:center }
    .content { display:flex; flex-wrap:wrap }
`;
const List = styled.div`
    padding:10px 20px; background:#ddd; border-radius:10px;
    margin:50px 20px; cursor:pointer;
`;

const tabTit = [
    { id:0, title:"상품메뉴1", part:doctors.part1 },
    { id:1, title:"상품메뉴2", part:doctors.part2 },
    { id:2, title:"상품메뉴3", part:doctors.part3 }
]

const Productsection = ({activeTab, onSelect}) => {

    return (
        <ProductsectionBlock>
            <div className="row">
                <div className="tabs">
                    { tabTit.map( (data) => <List key={data.id} style={{ background: activeTab===data.id && '#333', color: activeTab===data.id && '#fff' }} onClick={ ()=>onSelect(data.id) }>{data.title}</List> ) }
                </div>
                <div className="content">
                    {
                        tabTit[activeTab].part.map( (data, index) => <ProductItem key={index} name={data.name} depart={data.depart} about={data.about} photo={data.photo} /> )
                    }
                </div>
            </div>
        </ProductsectionBlock>
    );
};

export default Productsection;