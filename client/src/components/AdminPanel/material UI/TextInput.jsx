import React from 'react';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

export default function({item}){
    const classes = useStyles();

   return(
    <TextField
        required
        id="filled-required"
        label="product name"
        defaultValue={item.goods_name}
        className={classes.textField}
        margin="normal"
        variant="filled"
       />
   )
}