import { useState } from "react";
const root = ReactDOM.createRoot(document.getElementById("root"));

function Movie() {
   const [title, setTitle] = useState("Schindler's List");
   const [rating, setRating] = useState("R");
   const [releaseYear, setReleaseYear] = useState(1993);

   function changeMovie() {
      setTitle("Hidden Figures");
      setRating("PG-13");
      setReleaseYear(2016);
   }

   return (
      <>
         <h1>Favorite Movie</h1>
         <p>
            {title}, {rating}, {releaseYear}
         </p>
         <button onClick={changeMovie}>
            Change Movie
         </button>
      </>
   );
}

root.render(<Movie>);