import React from 'react';

function Filter(props) {
   const filterHandler = (e) => {
      props.setFilter(e.target.value);
   };

   return (
      <form>
         <div className="select">
            <select name="todos" className="filter-todo" onChange={filterHandler}>
               <option value="all">All</option>
               <option value="future">Future</option>
               <option value="past">Past</option>
            </select>
         </div>
      </form>
   );
}

export default Filter;
