import Row from "./Row";

const Table = () => {
  return (
    <table className="w-full">
      <tbody className="w-screen">
        <thead className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
          <tr className="border-b border-gray-300">
            <th className="px-6 py-3 text-left">No</th>
            <th className="px-6 py-3 text-left">First Name</th>
            <th className="px-6 py-3 text-left">Last Name</th>
            <th className="px-6 py-3 text-left">Email</th>
            <th className="px-6 py-3 text-left">Role</th>
          </tr>
        </thead>
        <Row />
      </tbody>
    </table>
  );
};

export default Table;
