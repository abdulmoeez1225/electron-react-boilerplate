import { useLiveQuery } from 'dexie-react-hooks';
import { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';
import { db } from '../../db';

const TableData = () => {
  type StudentType = {
    name: string;
    class: string;
  };
  // const [studentsData, setStudentsData] = useState<StudentType[] | []>([]);
  const studentsData = useLiveQuery(() => db.students.toArray());
  console.log(studentsData);
  return (
    <Table striped bordered hover variant="dark" className="w-100">
      <thead>
        <tr>
          <th>#</th>
          <th>Full Name</th>
          <th>Class Name</th>
        </tr>
      </thead>
      <tbody>
        {studentsData &&
          studentsData.map((student, index) => (
            <tr key={Math.random() * 10000}>
              <td>{student.id}</td>
              <td>{student.name}</td>
              <td>{student.class}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default TableData;
