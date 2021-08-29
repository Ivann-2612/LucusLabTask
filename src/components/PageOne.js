import { useState,useEffect } from "react"
import MaterialTable from '@material-table/core'

const PageOne = () => {
    
    const [columns, setColumns] = useState([
                                    { title: 'Title', field: 'title',width:120 },
                                    { title: 'Body', field: 'body',width:120 },
                                    { title: 'id', field: 'id',width:150 },
    ]);
  
    const [data, setData] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(res => setData(res))
    },[])
  
    return (
      <MaterialTable style={{marginLeft:'260px',marginTop:'80px'}}
      title="Posts"
      options={{
        search: true,
        rowStyle: {
          fontSize: 14,
          icon: 3
        }
      }}       
        columns={columns}
        data={data}
        editable={{
        
          onRowUpdate: (newData, oldData) =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataUpdate = [...data];
                const index = oldData.tableData.id;
                dataUpdate[index] = newData;
                setData([...dataUpdate]);
                resolve();
              }, 1000)
            }),
          onRowDelete: oldData =>
            new Promise((resolve, reject) => {
              setTimeout(() => {
                const dataDelete = [...data];
                const index = oldData.tableData.id;
                dataDelete.splice(index, 1);
                setData([...dataDelete]);
                resolve()
              }, 1000)
            }),
        }}
      />
    )
  }
  export default PageOne