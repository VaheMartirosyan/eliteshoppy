import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import DeleteIcon from '@material-ui/icons/Delete';


function getModalStyle() {
  const top = 50
  const left = 50

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function SimpleModal({deletItem}) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const id = deletItem.id;
  const style = {
    marginLeft:'9px'
  } 
  return (
    <div>
      <button type="button" onClick={handleOpen}>
      <DeleteIcon
                    style={{color:"red",
                     cursor:'pointer',fontSize:'x-large'}}
                    />
      </button>
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={open}
        onClose={handleClose}
      >
        <div style={modalStyle} className={classes.paper}>
          <h2 id="simple-modal-title">you really want to delete this item </h2>

          <button onClick={handleClose} >close</button>
          <button style={style} onClick={()=>deletItem.del(id)} >delete</button>
        </div>
      </Modal>
    </div>
  );
}