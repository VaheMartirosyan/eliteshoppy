import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [age, setAge] = React.useState('');

  const handleChange = event => {
    setAge(event.target.value);
  };
console.log(props.prodcts)
  return (
    <div>
   
     
      <FormControl variant="filled" className={classes.formControl}>
        <InputLabel id="demo-simple-select-filled-label"> Category</InputLabel>
        <Select
          labelId="demo-simple-select-filled-label"
          id="demo-simple-select-filled"
          value={age}
          onChange={handleChange}
        >
          <MenuItem defaultValue="olla">
            <em>None</em>
          </MenuItem>
           {
               props.prodcts.map((item,i)=>{
                   return  <MenuItem key={i} value={item}>{item}</MenuItem>
               })
           }
         
        </Select>
      </FormControl>
    </div>
  );
}