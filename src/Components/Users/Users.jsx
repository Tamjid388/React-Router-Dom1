import { Link, useLoaderData } from "react-router-dom";



export default function Users() {
    const userList = [
      { id: 1, name: 'John Doe', email: 'john@example.com' },
      { id: 2, name: 'Jane Smith', email: 'jane@example.com' },
      { id: 3, name: 'Alice Johnson', email: 'alice@example.com' },
    ];
    const  users=useLoaderData()
  
    return (
      <div className="max-w-4xl mx-auto p-4">
       
        <h2 className="text-3xl font-bold mb-4">User List {users.length}</h2>
        <div className="bg-white shadow-md rounded-lg">
          <ul className="divide-y divide-gray-200">
            {users.map(user => (
              <li key={user.id} className="py-2 px-4 hover:bg-gray-100 transition duration-200">
                <h3 className="font-semibold  text-2xl">{user.name}</h3>
                <p className="text-gray-600">{user.email}</p>
                <p className="text-blue-600">{user.phone}</p>
                <Link to={`/user/${user.id}`}>Show Details</Link>

              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
  