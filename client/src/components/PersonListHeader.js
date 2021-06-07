import React from 'react'; 
import PropTypes from 'prop-types';

import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

const headCells = [
   { id: 'id', numeric: true, disablePadding: true, label: 'Entry Num', align: 'center' },
   { id: 'name', numeric: false, disablePadding: false, label: 'Name', align: 'left' },
   { id: 'age', numeric: true, disablePadding: false, label: 'Age', align: 'center' },
   { id: 'gender', numeric: false, disablePadding: false, label: 'Gender', align: 'center' },
   { id: 'state', numeric: false, disablePadding: false, label: 'State', align: 'center' },
   { id: 'status', numeric: false, disablePadding: false, label: 'Status', align: 'left' },
   { id: 'score', numeric: true, disablePadding: false, label: 'Final Score', align: 'right' },
];

export default function EnhancedTableHead(props) {
   const { classes, order, orderBy, onRequestSort } = props;
   const createSortHandler = (property) => (event) => {
     onRequestSort(event, property);
   };
 
   return (
     <TableHead>
       <TableRow>
         {headCells.map((headCell) => (
           <TableCell
             key={headCell.id}
//             align={headCell.numeric ? 'center' : 'left'}
             align={headCell.align}
             padding={headCell.disablePadding ? 'none' : 'default'}
             sortDirection={orderBy === headCell.id ? order : false}
           >
             <TableSortLabel
               active={orderBy === headCell.id}
               direction={orderBy === headCell.id ? order : 'asc'}
               onClick={createSortHandler(headCell.id)}
             >
               {headCell.label}

             </TableSortLabel>
           </TableCell>
         ))}
       </TableRow>
     </TableHead>
   );
 }
 
 EnhancedTableHead.propTypes = {
   classes: PropTypes.object.isRequired,
   onRequestSort: PropTypes.func.isRequired,
   order: PropTypes.oneOf(['asc', 'desc']).isRequired,
   orderBy: PropTypes.string.isRequired,
};
