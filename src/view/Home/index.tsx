import React, { useState, useEffect } from 'react';

import { Container } from './style';

import api from '../../services/api';

interface IProduct{
    id: number;
    photo: string;
    name: string;
    description: string;
    price: number;

}

const Home: React.FC = () => {
  const [data, setData] = useState<IProduct[]>([]);
  useEffect(() => {
    api.get('').then(
        response => {
            setData(response.data)
        }
    )
  }, [])

  const handleCart = ( index:number ) => {
    const productStore = JSON.stringify(data[index])
    localStorage.setItem(`@Produto-${index}`, productStore)
  }
  
  
  return (
    <Container>
        <section>
            <div className="logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Xiaomi_logo_%282021-%29.svg/2048px-Xiaomi_logo_%282021-%29.svg.png" alt="logo" width="80px" />
            </div>

            { data.map( (prod, index) => (
                <div className="product-content" key={prod.id}>
                    <h4>{prod.name}</h4>
                    <img src={prod.photo} alt="xiaomi" width="200" height="auto" />
                    <span>{prod.description}</span>
                    <h6>R$ {prod.price}</h6>
                    <button color="primary" onClick={ () => handleCart(index)}> Adicionar ao carrinho </button>
                </div>
            )) }

            
            
        </section>

        
    </Container>

    
  );
}

export default Home;