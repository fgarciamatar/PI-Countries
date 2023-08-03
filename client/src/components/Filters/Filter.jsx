import style from "./Filter.module.css";

const Filter = () => {
  return (
    <div className={style.container}>
      <div>
        <select name="Order">
            <label>Order by Continent</label>
          <option value="A">All</option>
          <option value="D">Descendente</option>
        </select>
        <select  name="Filter">
          <option value="allCharacters">All Characters</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">unknown</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
