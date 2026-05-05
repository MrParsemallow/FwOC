import { Link } from "react-router";

export default function BusinessCard({ name, company }) {
  return (
    <div className="max-w-md border-2 border-neutral-700 bg-neutral-950 p-5 rounded-xl transition-all hover:border-neutral-500">
      <h2 className="text-stone-100 font-bold text-xl mb-1">
        {name}
      </h2>
      <p className="text-stone-400 text-sm uppercase tracking-wide font-medium">
        {company}
      </p>
    </div>
  );
}


// inline style
// export default function BusinessCard(props) {
//   return (
//     <div style={{ border: "1px solid", borderRadius: "8px" }}>
//       <h2>Name: {props.name}</h2>
//       <p>Job: {props.job}</p>
//     </div>
//   );
// }


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
