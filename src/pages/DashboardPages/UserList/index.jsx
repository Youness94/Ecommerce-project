import React from 'react';
import "./index.css"
import { DataGrid } from '@material-ui/data-grid';
import background from '../../img/background.png'


const UserList = () => {
      const columns = [
            { field: 'id', headerName: 'ID', width: 90 },
            { field: 'user', headerName: 'User', width: 180, renderCell:(params)=>{
                  return(
                        <div>
                              <img src={params.row.avatar} alt="" />
                              {params.row.username}
                        </div>
                  )
            } },
            {
              field: 'age',
              headerName: 'Age',
              type: 'number',
              width: 90,
            },
            {
              field: 'status',
              headerName: 'Status',
              width: 120,
              
            },
            {
                  field: 'transaction',
                  headerName: 'Transaction Volume',
                  width: 160,
                  
                },
            { field: 'email', headerName: 'Email', width: 200 },
          ];
          
          const rows = [
            { id: 1,  username: 'Jon', avatar:{background}, age: 35, email:'jon@gmail.com', status:"active",transaction:"$120.00", },
            { id: 2, username: 'Cersei', avatar:{background},age: 42, email:'Cersei@gmail.com', status:"active",transaction:"$120.00",},
            { id: 3, username: 'Jaime', age: 45, email:'Jaime@gmail.com', status:"active",transaction:"$120.00" ,},
            { id: 4,  username: 'Arya', age: 16, email:'Arya@gmail.com', status:"active",transaction:"$120.00", },
            { id: 5,  username: 'Daenerys', age: null, email:'Daenerys@gmail.com', status:"active",transaction:"$120.00",},
            { id: 6, username:'Melisandre',  age: 150 , email:'Melisandre@gmail.com', status:"active",transaction:"$120.00",},
            { id: 7, username: 'Ferrara', age: 44, email:'Ferrara@gmail.com', status:"active",transaction:"$120.00" ,},
            { id: 8, username: 'Rossini', age: 36, email:'Rossini@gmail.com', status:"active",transaction:"$120.00" ,},
            { id: 9,  username: 'Harvey', age: 65, email:'Harvey@gmail.com', status:"active",transaction:"$120.00" },
          ];
          
      return (
            <div className="user_list">
                 <DataGrid rows={rows} columns={columns} pageSize={5} checkboxSelection />  
            </div>
      );
};

export default UserList;