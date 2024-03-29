import {useContext} from "react";
import { cardContext } from "./context";
//Refactor this to use the useContext hook
export function Card(){
  const value = useContext(cardContext);
  console.log("value", value);
  return (
    <div className="card" style={{ backgroundColor: value.color }}>
      <h3>{value.text}</h3>
    </div>
  );

}

// export const Card = () => {
//   return (
//     <cardContext.Consumer>
//       {(value) => {
//         return (
//           <div className="card" style={{ backgroundColor: value.color }}>
//             <h3>{value.text}</h3>
//           </div>
//         );
//       }}
//     </cardContext.Consumer>
//   );
// };
