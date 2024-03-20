
import React, { useState, useEffect } from 'react';
import Navbar from '../Navbar/index';
import Button from '../Button/Button';
import Input from '../Form/Input';
import Footer from '../Footer';
import ItemCarrinho from '../ItemCarrinho/itemCarrinho'


const Carrinho = () => {
    const [quantidade, setQuantidade] = useState(0);
    const [opcaoFrete, setOpcaoFrete] = useState("");
    const [subTotais, setSubTotais] = useState([]);
    const [total, setTotal] = useState(0);

    useEffect(() => {
        const subtotal = calcularTotal();
        setTotal(subtotal);
    }, [subTotais]);

  

    const precoValorant = 100;
    const precoFormatado = precoValorant.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    const subTotal = (quantidade * precoValorant).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    
    const calcularTotal = () => {
        const total = subTotais.reduce((acc, curr) => acc + curr, 0);
        return total.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    };

    const handleOpcaoFreteChange = (e) => {
        setOpcaoFrete(e.target.value);
    };
    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <div>
                    <h2><img src="/carrinho.png" alt="" id='compraImg' />   Carrinho de Compras</h2>
                </div>
                <section>
                    <ItemCarrinho precoValorant={100} setSubTotais={setSubTotais} subTotais={subTotais} />
                    <ItemCarrinho precoValorant={100} setSubTotais={setSubTotais} subTotais={subTotais} />
                </section>
                <div className='container-frete-subtotal'>
                    <section className="search">
                        <form>
                            <Input type={"text"} placeholder={"CEP (xx.xxx-xxx)"} />
                            <Button title={"Calcular Frete"} type={"button"} />
                        </form>
                        <div className='frete'>
                            <ul className='opçoes'>
                                <li>Envio</li>
                                <li>Frete</li>
                                <li>Prazo</li>
                            </ul>
                            <div className='opcao1'>
                                <div >
                                    <Input
                                        type="radio"
                                        id="PAC"
                                        name="frete"
                                        value="PAC"
                                        checked={opcaoFrete === "PAC"}
                                        onChange={handleOpcaoFreteChange}
                                    />
                                    <label htmlFor="PAC"> PAC</label>
                                </div>
                                <h5>Gratis</h5>
                                <h5>0 Dias</h5>
                            </div>
                            <div className='opcao2'>
                                <div>
                                    <Input
                                        type="radio"
                                        id="SEDEX"
                                        name="frete"
                                        value="SEDEX"
                                        checked={opcaoFrete === "SEDEX"}
                                        onChange={handleOpcaoFreteChange}
                                    />
                                    <label htmlFor="SEDEX"> SEDEX</label>
                                </div>
                                <h5>Gratis</h5>
                                <h5>0 Dias</h5>
                            </div>
                        </div>
                    </section>
                
                <section className=' container-Subtotal'>
                    <div className='sub'>
                        <h5>SubTotal</h5>
                        <h5>{calcularTotal()}</h5>
                    </div>
                    <div className='fret'>
                        <h5>Frete</h5>
                        <h5>Gratis</h5>
                    </div>
                    <div className='total'>
                        <h5>Total</h5>
                        <h5>{calcularTotal()}</h5>
                    </div>

                </section>
                </div>
                <div className='container-button'>
                <Button type={"button"} title={"Escolher mais Produtos"} width={160} />
              <Button type={"submit"} title={"Finalizar Compra"} width={160} />
                </div>
            </main>
            {/* Footer */}
            <Footer />
        </div>
    );
};

export default Carrinho;