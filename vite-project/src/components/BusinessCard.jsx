

// Default export: Allows importing this component under any name without curly braces.
export default function BusinessCard(props) { 
  // 'props' is an object containing all attributes passed to the component.
  return (
    <> {/* empty fragment; removed when rendered */}
      <h2>Name: {props.name}</h2>
      <p>Job: {props.job}</p>
    </>
  );
}


// // Named export: Must be imported using curly braces: import { BusinessCard } from "./..."
// const BusinessCard = ({ name, job }) => {
//   // Destructuring: We "extract" name and job directly from the props object.
//   return (
//     <div> {/*  using a div adds an extra element in the dom, necessary for styling */}
//       <h2>Name: {name}</h2>
//       <p>Job: {job}</p>
//     </div>
//   );
// }

// export { BusinessCard };