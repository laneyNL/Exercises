function TableItem({className, food, isNom}) {
  const alignment = isNom ? 'left' : 'right';

  return (
    <div className={`table-item ${className}`}>

      {isNom ? nomFoodName(food.name, alignment) : ''}


      <div className='table-item-food-image' style={{ 'float': alignment }}>Insert Image Here</div>
      <div style={{ 'text-align': alignment, 'clear': alignment}}>
        <p>Protein</p><h3>{food.protein}</h3>
        <p>Fat</p>  <h3>{food.fat}</h3>
        <p>Carbohydrate </p> <h3>{food.carbs}</h3>
      </div>

    </div>
  );

}

const nomFoodName = (name, alignment) => {
  return (
    <div style={{ 'text-align': alignment }}>
      <h3>NOM NOM</h3>
      <h4>{name}</h4>
    </div>
  )
}

export default TableItem;
