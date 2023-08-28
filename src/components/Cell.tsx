
interface CellProps { 
  email: string;
  firstName: string;
  lastName: string;
  id: number;
  role: string;
}
const Cell = ({ email, firstName, lastName, id, role }: CellProps) => { 
  return (
    <>
      <td className="border px-4 py-2">{id}</td>
      <td className="border px-4 py-2">{firstName}</td>
      <td className="border px-4 py-2">{lastName}</td>
      <td className="border px-4 py-2">{email}</td>
      <td className="border px-4 py-2">{role}</td>
    </>
  );
}

export default Cell;