const StarRating = ({ rating }) => {

  const roundedRating = Math.round(rating);
  // Cria um array de estrelas preenchidas com base na pontuação
  const filledStars = Array.from({ length: roundedRating }, (_, index) => index + 1);
  // Cria um array de estrelas vazias com base na pontuação
  const emptyStars = Array.from({ length: 5 - roundedRating }, (_, index) => index + 1);

  return (
    <div>
      {/* Renderiza as estrelas preenchidas */}
      {filledStars.map((star, index) => (
        <span key={index}>★</span>
      ))}
      {/* Renderiza as estrelas vazias */}
      {emptyStars.map((star, index) => (
        <span key={index}>☆</span>
      ))}
    </div>
  );
};

export default StarRating;