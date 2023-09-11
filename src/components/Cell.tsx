interface CellProps {
  email: string;
  firstName: string;
  lastName: string;
  id: number | string;
  role: string;
  className?: string;
}
const Cell = (cellData: CellProps) => {
  return (
    <>
      <td className="py-3 px-4">{cellData.id}</td>
      <td className="py-3 px-4">{cellData.firstName}</td>
      <td className="py-3 px-4">{cellData.lastName}</td>
      <td className="py-3 px-4">{cellData.email}</td>
      <td className="py-3 px-4">{cellData.role}</td>
    </>
  );
};

export default Cell;
