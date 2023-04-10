import * as React from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import {useState, useEffect} from 'react'
import apis from '../../api';
const cols=[
    {field: 'id', headerName:'id', type:'number', width:'60' },
    {field: 'source', headerName:'Source', width:'150'},
    {field: 'site', headerName:'Site', width:'180'},
    {field: 'species', headerName:'Species', width:'150'},
    {field: 'vernacular', headerName:'Vernacular', width:'150'},
    {field: 'nutrition', headerName:'Nutrition', width:'100'},
    {field: 'traitname', headerName:'Trait', width:'100'},
    {field: 'sexorpari', headerName:'Sexorpari', width:'180'},
    {field: 'survivaloption', headerName:'Survival Option', width:'150'},
    {field: 'landmark', headerName:'Landmark', width:'100'},
    {field: 'measurement', headerName:'Measurement', type:'number', width:'150'}
]

export default function TableView() {
  const [rows, setRows]=useState([])
  useEffect(() => {
    apis.GetView().then(res => {
        setRows(res.data.rows);
    });
  }, [])
  return (
    <div style={{ height:700, width: '100%' }}>
      <DataGrid 
        rows={rows} 
        columns={cols} 
        slots={{ toolbar: GridToolbar }}/>
    </div>
  );
}

