import React from "react";

function SearchPlay() {
    return (
    <div>
           <section id='search'>
             <h2> Αναζητηση Παραστασεων </h2>
              <input type="date" className="in-date" name="start-date" value="Από.."/>
              <input type="date" className="in-date" name="end-date" value="Έως.."/>
              <input type="text" name="search" size="70" placeholder="Παράσταση, Καλλιτέχνης, Αίθουσα.."/>
              <input type="submit" className="btn" value="Αναζήτηση"/>
             </section>
    </div>
    );
} export default SearchPlay;