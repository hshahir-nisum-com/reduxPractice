
import './App.css';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'
import Box from '@material-ui/core/Box'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import { useDispatch } from 'react-redux';
import {add,dlt,editable ,updatedText} from './redux/actions/actions';
import {connect} from 'react-redux';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import {useState} from 'react';
import EditIcon from '@material-ui/icons/Edit';
import CheckCircleOutlineOutlinedIcon from '@material-ui/icons/CheckCircleOutlineOutlined';

function App(props) {

  const [text,setText] = useState('');
  const [temp, setTemp] = useState('');

  const  dispatch = useDispatch();
  
  const handleInut =  (e) =>{
    setTemp(e.target.value)
    setText(e.target.value)
 }
  const handleUpdate = (e) =>{
    setTemp(e.target.value)
    
  }
  
console.log(props.listItems.todos)

  return (
    <div className="App">
      <CssBaseline />
      <Container fixed>
    
      <Box component="div" display="block" mt={20} >
        {/* main text box which apper on top */}
      <TextField id="standard-basic" label="Enter Your Item" value={text} style = {{width: '30vw'}}
        onChange = {handleInut}
      />
      {/* main submit button */}
      <Button variant="contained" color="primary" component="div"  style = {{width: '5vw'}}  
              onClick={() => {
                console.log("click",text)
                dispatch(add(text));
                setText('')
              }}>
          Submit
        </Button>


        <List component="nav" aria-label="main mailbox folders">
          {/* here we use map to iterate on array */}
        {
          
            props.listItems.todos.map((val)=>{  
              return (
                <ListItem button key={val.id}> 

                  {/* here is text field which is disabeled and editable on click text icon */}

                <TextField  disabled={!val.edit}  style = {{width: '80vw'}} value={!val.edit? val.text : temp} onChange= {handleUpdate} />
               
                { val.edit && (<Button>
                  <CheckCircleOutlineOutlinedIcon
                  onClick={() => {
                  console.log("click final check")
                  dispatch(updatedText(val.id, temp));
                }
                }>
                </CheckCircleOutlineOutlinedIcon>
                </Button> )
                } 
                
                
                <Button>
                <EditIcon
                
                onClick={() => {
                console.log("click",val.id)
                dispatch(editable(val.id));
                }}
                > </EditIcon>
                </Button>


                <IconButton aria-label="delete"
                onClick={() => {
                console.log("click",val.id)
                dispatch(dlt(val.id));
                }}> 
               <DeleteIcon style = {{width: '5vw'}}/>
              </IconButton>

              </ListItem>
              )
            }
            )
        }
      </List>
      <Divider />
      
        </Box>

      </Container>
    </div>
  );
}


const mapStatetoProps = state =>{
  return {
    listItems: state
  };
}
const mapDispatchToProps = dispatch =>{
  return {
    text: () => dispatch(add()) ,
    deleted : () => dispatch(dlt()),
    shoudEdit : () => dispatch(editable()),
    updated : () => dispatch(updatedText()),
  };
}

export default connect(mapStatetoProps, mapDispatchToProps)(App);

