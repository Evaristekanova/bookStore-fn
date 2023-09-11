/* eslint-disable @typescript-eslint/no-explicit-any */
import Cell from "./Cell";

const Row = ({ users }: any) => { 
  let count = 0;
  return (
    <>
      {users.map((user: any) => (
        <tr key={user.id} className="border-b border-gray-300 hover:bg-gray-100">
          <Cell
            id={++count}
            firstName={user.firstName}
            lastName={user.lastName}
            email={user.email}
            role={user.role}
          />
        </tr>
      ))}
    </>
  );
}

export default Row;
