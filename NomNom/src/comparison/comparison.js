import Table from "./table";
import React, { useState } from 'react';
import './comparison.css'

const DOG_FOOD = [{ name: 'Blue Buffalo ® Wilderness ™ Chicken', minProtein: 34, minFat: 15, calorie: 3599, protein: 99, fat: 44, carbs: 59 }, { name: 'Blue Buffalo ® Wilderness ™ Duck', minProtein: 34, minFat: 15, calorie: 3596, protein: 99, fat: 44, carbs: 79 }, { name: 'Blue Buffalo ® Wilderness ™ Salmon', minProtein: 34, minFat: 15, calorie: 3592, protein: 99, fat: 45, carbs: 79 }];
const NOM_FOOD = [{ name: 'Beef Mash', protein: 77, fat: 40, carbs: 111 }, { name: 'Chicken Cuisine', protein: 80, fat: 56, carbs: 71 }, { name: 'Turkey Far', protein: 78, fat: 41, carbs: 109 }, { name: 'Pork Potluck', protein: 76, fat: 48, carbs: 93 }];

function Comparison() {
  const [dogFoodIdx, setDogFoodIdx] = useState(0);
  const [nomFoodIdx, setNomFoodIdx] = useState(0);


  return (
    <div className="comparison">
      <h1>COMPARISON CALCULATOR</h1> <br/>
      <div>
        Percentages on commercial pet food labels are not reliable because they are based on weight, not calories, and the values are affected by many factors, including moisture, fiber and minerals. Use this calculator to get a more accurate picture of how another pet food brand compares with Nom Nom.<br/>

        <span style={{'font-weight': 'bold'}}>Dr. Caitlyn Getty</span><br/>
        <span style={{'font-style': 'italic'}}>Scientific Affairs Veterinarian</span><br/>
      </div>

      <div className='comparison-select'>

        <div className='comparison-select-options'>
          <p>Name of dog food brand</p>
          <select onChange={(e) => setDogFoodIdx(e.currentTarget.value)}>
            <option value={0}>{DOG_FOOD[0].name}</option>
            <option value={1}>{DOG_FOOD[1].name}</option>
            <option value={2}>{DOG_FOOD[2].name}</option>
          </select>
        </div>

        <div className='comparison-select-options'>
          <p>Compare with Nom Nom</p>
          <select onChange={(e) => setNomFoodIdx(e.currentTarget.value)}>
            <option value={0}>{NOM_FOOD[0].name}</option>
            <option value={1}>{NOM_FOOD[1].name}</option>
            <option value={2}>{NOM_FOOD[2].name}</option>
            <option value={3}>{NOM_FOOD[3].name}</option>
          </select>
        </div>

      </div>

      <Table dogFood={DOG_FOOD[dogFoodIdx]} nomFood={NOM_FOOD[nomFoodIdx]}/>
    </div>
  );
}

export default Comparison;