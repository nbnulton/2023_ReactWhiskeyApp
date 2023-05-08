import { useState } from 'react'
import Button from './Button'
import Modal from './Modal'
import { server_calls } from '../api/server';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useGetData } from '../custom-hooks/FetchData';

const columns: GridColDef[] = [
    { field: 'id', headerName: "ID", width: 90, hideable: true },
    { field: 'whiskey_name', headerName: "Whiskey Name", flex: 1 },
    { field: 'whiskey_image_id', headerName: "Whiskey Image ID", flex: 1 },
]



function DataTable() {
    const [ open, setOpen ] = useState(false);
    const { whiskeyData, getData } = useGetData();
    const [ selectionModel, setSelectionModel ] =useState<string[]>([])


    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    const deleteData = () => {
        server_calls.delete(selectionModel[0]);
        getData();
        console.log(`Selection model: ${selectionModel}`)
        setTimeout( () => { window.location.reload() }, 500)
    }



    return (
        <>
            <Modal 
                id={selectionModel}
                open={open}
                onClose={handleClose}
            />
            <div className="flex flex-row">
                <div>
                    <button
                        className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white"
                        onClick={() => handleOpen()}
                    >
                        Create New Whiskey
                    </button>
                </div>
                <Button onClick={handleOpen} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Update Whiskey</Button>
                <Button onClick={deleteData} className="p-3 bg-slate-300 m-3 rounded hover:bg-slate-800 hover:text-white">Delete Whiskey</Button>
            </div>
            <div className={ open ? "hidden" : "container mx-10 my-5 flex flex-col"}
                style={{ height: 400, width: '100%' }}
                >
                    <h2 className="p-3 bg-slate-300 my-2 rounded">My Whiskeys</h2>
                    <DataGrid rows={whiskeyData} columns={columns} 
                    // rowsPerPageOptions={[5]}
                    checkboxSelection={true} 
                    // onSelectionModelChange={ (item:any) => {
                    onRowSelectionModelChange={ (item:any) => {
                        setSelectionModel(item)
                    }}
                    />
            </div>
        </>
    )
}

export default DataTable

