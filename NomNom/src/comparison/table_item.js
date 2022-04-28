function TableItem({className, food, isNom}) {
  const alignment = isNom ? 'left' : 'right';

  return (
    <div className={`table-item ${className}`}>

      <div className='nom-food-header'>
        {isNom ? nomFoodName(food.name, alignment) : ''}
      </div>

      <img src={require(`../images/${food.img_name}`)} className='table-item-food-image' style={{ 'float': alignment }} alt={food.name}/>

      <div style={{ textAlign: alignment, 'clear': alignment}}>
        <p>Protein</p><h3>{food.protein}</h3>
        <p>Fat</p>  <h3>{food.fat}</h3>
        <p>Carbohydrate </p> <h3>{food.carbs}</h3>
      </div>

    </div>
  );

}

const nomFoodName = (name, alignment) => {
  return (
    <div style={{ textAlign: alignment }}>
      <h3>NOM NOM</h3>
      <h4>{name}</h4>
    </div>
  )
}

export default TableItem;
