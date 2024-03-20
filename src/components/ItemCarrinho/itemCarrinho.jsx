import React, { useState } from 'react';

import Button from '../Button/Button';
import Input from '../Form/Input';

const ItemCarrinho = ({ precoValorant, setSubTotais, subTotais }) => {
    const [quantidade, setQuantidade] = useState(0);

    const incrementarQuantidade = () => {
        setQuantidade(prevQuantidade => prevQuantidade + 1);
        setSubTotais(prevSubTotais => [...prevSubTotais, precoValorant]);
    };

    const decrementarQuantidade = () => {
        if (quantidade > 1) {
            setQuantidade(prevQuantidade => prevQuantidade - 1);
            setSubTotais(prevSubTotais => prevSubTotais.slice(0, -1));
        }
    };

    const precoFormatado = precoValorant.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const subTotal = (quantidade * precoValorant).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    return (
        <div className='carrinhoDescricao'>
            <div>
                <h2>Descrição</h2><br />
                <div className='itemDescricao'>
                    <img src="/giftCard.png" alt="" id='cardImg' />
                    <div className='item-Descricao'>
                        <h5>Valorant R$ 100</h5><br />
                        <h5>Gift Card</h5>
                    </div>
                </div>
            </div>
            <div id="cart">
                <h2>Qntd</h2><br />
                <div className='qntd'>
                    <Button title={"-"} onclick={decrementarQuantidade} />
                    <Input
                        type={"text"}
                        className="quantity"
                        value={quantidade}
                        readOnly
                    />
                    <Button title={"+"} onclick={incrementarQuantidade} />
                </div>
            </div>
            <div>
                <h2>Preço</h2><br />
                <h5>{precoFormatado}</h5>
            </div>
            <div className='subtotal'>
                <h2>SubTotal</h2><br />
                <h5>{subTotal}<Button className="remove-item" type={"button"} title={"X"} /></h5>
              
            </div>
        </div>
    );
};
export default ItemCarrinho;