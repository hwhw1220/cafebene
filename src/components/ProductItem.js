import React from 'react';
import styled from 'styled-components';

const ProductItemBlock = styled.div`
    width:50%;
    display:flex; align-items:center; 
    margin-bottom:30px; 
    img { width:130px }
    div { padding:0 10px;
        p:nth-child(1) { font-size:20px }
        p:nth-child(2) { font-size:18px; margin:10px 0}
    }
`;


const ProductItem = ({name, depart, about, photo}) => {
    return (
        <ProductItemBlock>
            <img src={photo} alt={name} />
            <div>
                <p>{name}</p>
                <p>{depart}</p>
                <p>{about}</p>
            </div>
        </ProductItemBlock>
    );
};

export default ProductItem;