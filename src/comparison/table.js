import TableItem from "./table_item";
import './table.css'

function Table({dogFood, nomFood}) {

  return (
    <div className="table">
      {dogFood.name} contains {dogFood.minProtein}% min protein, {dogFood.minFat}% min fat and has a calorie density of { dogFood.calorie}kcal/kg. <br/>


      <div className='table-row'> 

        <TableItem className='table-item dog-food' food={dogFood} isNom={false}/>

        <TableItem className='table-item' food={nomFood} isNom={true}/>

      </div>

    </div>
  );
}

export default Table;
