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
               <option value="launches">Launches</option>
               <option value="events">Events</option>
            </select>
         </div>
      </form>
   );
}

export default Filter;
