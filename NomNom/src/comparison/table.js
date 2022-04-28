import TableItem from "./table_item";
import './table.css'

function Table({dogFood, nomFood}) {

  return (
    <div className="table">
      {dogFood.name} contains {dogFood.minProtein}% min protein, {dogFood.minFat}% min fat and has a calorie density of { dogFood.calorie}kcal/kg. <br/>


      <div className='table-row'> 

        <div className='table-item dog-food'>
          <TableItem food={dogFood} isNom={false}/>
        </div>

        <div className='table-item'>
          <TableItem food={nomFood} isNom={true}/>
        </div>

      </div>

    </div>
  );
}

export default Table;
