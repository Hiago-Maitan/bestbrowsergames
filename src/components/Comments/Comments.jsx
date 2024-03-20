import { useState } from 'react';
import Navbar from '../Navbar/index';
import Input from "../Form/Input.jsx";
import Button from "../Button/Button.jsx";
import Footer from '../Footer/index.jsx';


const Comments = () => {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleAddComment = () => {
        setComments([...comments, { text: newComment, rating: 0 }]);
        setNewComment('');
    };

    return (
        <div>
            {/* Navbar */}
            <Navbar />
            {/* Main */}
            <main>
                <div className='container-comments'>
                    <section className="search">
                        <form>
                            <Input type={"text"} placeholder={"Procure um game"} />
                            <Button title={"Procurar"} type={"button"} />
                        </form>
                    </section>
                    <div className='ImgComments'>
                        <img src="/valorantt.png" alt="" />
                    </div>

                    <h4 className='Description-comments'>
                        Valorant é um jogo eletrônico multijogador gratuito para jogar de tiro em primeira pessoa desenvolvido e publicado pela Riot Games.
                    </h4>

                    <div className='catalog-comments'>
                        <a href="#">Acessar site oficial</a>
                    </div>
                    <div className='comentario'>
                        <textarea className='comments'
                            name="description"
                            id="description"
                            cols="50"
                            rows="10"
                            placeholder="Escreva um comentário (max: 255 caracteres)"
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                        />
                        <Button title={"Comentar"} type={"button"} onClick={handleAddComment} className="button-comments" />
                    </div>
                    <div className='User-comments'>
                        <div className='User-name'>
                        <h6>Leticia</h6>
                        <h6>Avaliação por Estrelas</h6>
                        </div>
                       
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Cum, aliquid non ratione ut ducimus labore perspiciatis deserunt earum, magni ipsam quas beatae alias illo tenetur asperiores reiciendis ab debitis autem. Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                </div>
                
            </main>
            <Footer />
        </div>
    );
};

export default Comments;