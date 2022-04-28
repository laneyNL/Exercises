function TableItem({food, isNom}) {
  const textAlign = isNom ? 'left' : 'right';

  return (
    <div className="table-item">
      <div className='table-item-food-image'>Insert Image Here</div>
      <div style={{'text-align': textAlign}}>
        <p>Protein</p><h3>{food.protein}</h3>
        <p>Fat</p>  <h3>{food.fat}</h3>
        <p>Carbohydrate </p> <h3>{food.carbs}</h3>
      </div>
    </div>
  );

}

export default TableItem;
