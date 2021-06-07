import React from 'react'; 
import PersonListItem from './PersonListItem'; 
import { connect } from 'react-redux'; 
import { setPageNum, setRowsPerPage, sortByIdAsc, sortByIdDesc, sortByScoreAsc, sortByScoreDesc, sortByNameAsc, 
         sortByNameDesc, sortByAgeAsc, sortByAgeDesc, sortByGenderAsc, sortByGenderDesc,
         sortByStateAsc, sortByStateDesc, sortByStatusAsc, sortByStatusDesc}  from '../actions/filters';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TablePagination from '@material-ui/core/TablePagination';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import TableHeader from './PersonListHeader'; 

export class PersonList extends React.Component {
   constructor(props) {
      super(props); 
      this.state = {
         //  persons: props.persons,        
          order: 'asc',     
          orderBy: 'id'
      }
   }

   handleRequestSort = (event, property) => {
      const isAsc = this.props.filters.sortField === property && this.props.filters.sortDir === 'asc';
      let temp = property + (isAsc ? 'desc' : 'asc');  

      if (temp == 'idasc') this.props.sortByIdAsc(); 
      else if (temp == 'iddesc') this.props.sortByIdDesc(); 
      else if (temp == 'nameasc') this.props.sortByNameAsc(); 
      else if (temp == 'namedesc') this.props.sortByNameDesc(); 
      else if (temp == 'ageasc') this.props.sortByAgeAsc(); 
      else if (temp == 'agedesc') this.props.sortByAgeDesc(); 
      else if (temp == 'scoreasc') this.props.sortByScoreAsc(); 
      else if (temp == 'scoredesc') this.props.sortByScoreDesc(); 
      else if (temp == 'genderasc') this.props.sortByGenderAsc(); 
      else if (temp == 'genderdesc') this.props.sortByGenderDesc(); 
      else if (temp == 'stateasc') this.props.sortByStateAsc(); 
      else if (temp == 'statedesc') this.props.sortByStateDesc(); 
      else if (temp == 'statusasc') this.props.sortByStatusAsc(); 
      else if (temp == 'statusdesc') this.props.sortByStatusDesc(); 
   };

   handleChangePage = (event, newPage) => {
      this.props.setPageNum(newPage); 
   };

   handleChangeRowsPerPage = (event) => {
      this.props.setRowsPerPage(parseInt(event.target.value, 10)); 
   };

   render() {
      // console.log('aa'); 
      // console.log(this.props);  
      return (
         <div className="list_root">
         <Container maxWidth="lg" className="list_container">
            <Paper className="list_paper">
            <Typography className="list_tableIntro" variant="h6" id="tableTitle" component="div">
               Contestants
            </Typography>
            <TableContainer>
                  <Table
                     className="list_table"
                     aria-labelledby="tableTitle"
                     // size={dense ? 'small' : 'medium'}
                     size='small'
                     aria-label="enhanced table"
                  >
                  <TableHeader
                     //classes={classes}
                     order={this.props.filters.sortDir}
                     orderBy={this.props.filters.sortField}
                     onRequestSort={this.handleRequestSort}
                  />
                  <TableBody>

               {this.props.persons.slice(this.props.filters.pagenum * this.props.filters.rowsperpage, 
                           this.props.filters.pagenum * this.props.filters.rowsperpage + this.props.filters.rowsperpage)
                     .map((person) => {
                  <span>{person.id}</span>
                  return <PersonListItem key={person.id} {...person} />  // ...person includes all key/value properties;  referenced as props.score, etc
               })}    
               {/* {emptyRows > 0 && (
                     <TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
                        <TableCell colSpan={5} />
                     </TableRow>
               )}   */}
               </TableBody>
               </Table>
            </TableContainer>
            <TablePagination
                  rowsPerPageOptions={[20, 50, 100, 200]}
                  component="div"
                  count={this.props.persons.length}
                  rowsPerPage={this.props.filters.rowsperpage}
                  page={this.props.filters.pagenum}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
            />
            </Paper>
            </Container>
         </div>
      );
            }
}
 
 const mapStateToProps = (state) => ({
      filters: state.filters
 });

 const mapDispatchToProps = (dispatch) => ({    // implicitly returns object;  same as => { return {... } }
   setPageNum: (num) => dispatch(setPageNum(num)),   // dispatches action 'setTextFilter' w/ param of 'text' 
   setRowsPerPage: (num) => dispatch(setRowsPerPage(num)), 
   sortByIdAsc: () => dispatch(sortByIdAsc()),
   sortByIdDesc: () => dispatch(sortByIdDesc()),
   sortByScoreAsc: () => dispatch(sortByScoreAsc()),
   sortByScoreDesc: () => dispatch(sortByScoreDesc()),
   sortByNameAsc: () => dispatch(sortByNameAsc()),
   sortByNameDesc: () => dispatch(sortByNameDesc()),
   sortByAgeAsc: () => dispatch(sortByAgeAsc()),
   sortByAgeDesc: () => dispatch(sortByAgeDesc()), 
   sortByGenderAsc: () => dispatch(sortByGenderAsc()),
   sortByGenderDesc: () => dispatch(sortByGenderDesc()),
   sortByStateAsc: () => dispatch(sortByStateAsc()),
   sortByStateDesc: () => dispatch(sortByStateDesc()),
   sortByStatusAsc: () => dispatch(sortByStatusAsc()),
   sortByStatusDesc: () => dispatch(sortByStatusDesc())
 });
 
 export default connect(mapStateToProps, mapDispatchToProps)(PersonList);  // mapStateToProps to get us current data from state

