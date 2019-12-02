import React from 'react'
import Radio from '@material-ui/core/Radio';
import './Checkboxes.css'

export default () => {
    return(
        <form>
            <div className={'control'}>
                <div className="control-group">
                    <label className="control control-radio">
                        Lower Price
                        <input type="radio" name="radio" value={'lowerprice'} onClick={(e) => console.log(e.target.value)}/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Track your item
                        <input type="radio" name="radio" value={'trackitem'} onClick={(e) => console.log(e.target.value)}/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Bigger Choice
                        <input type="radio" name="radio" value={'biggerchoice'} onClick={(e) => console.log(e.target.value)}/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        More colors to choose
                        <input type="radio" name="radio" value={'morecolors'} onClick={(e) => console.log(e.target.value)}/>
                        <div className="control_indicator"></div>
                    </label>
                    <label className="control control-radio">
                        Money back guaranteed                    <input type="radio" name="radio" value={'moneyback'} onClick={(e) => console.log(e.target.value)}/>
                        <div className="control_indicator"></div>
                    </label>
                </div>
                <button className={'btn btn-success'}>Send</button>
            </div>
        </form>
    )
}







// import React from 'react';
// import { withStyles } from '@material-ui/core/styles';
// import { green } from '@material-ui/core/colors';
// import Radio from '@material-ui/core/Radio';
// import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
// import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
//
// const GreenRadio = withStyles({
//     root: {
//         color: green[400],
//         '&$checked': {
//             color: green[600],
//         },
//     },
//     checked: {},
// })(props => <Radio color="default" {...props} />);
//
// export default function Checkboxes() {
//     const [selectedValue, setSelectedValue] = React.useState('a')
//
//     const handleChange = event => {
//         setSelectedValue(event.target.value)
//         if(event.target.value === 'c') {
//             console.log('c')
//         }
//     };
//
//     return (
//         <div>
//             <GreenRadio
//                 checked={selectedValue === 'c'}
//                 onChange={handleChange}
//                 value="c"
//                 name="radio-button-demo"
//                 inputProps={{ 'aria-label': 'C' }}
//             />
//             <GreenRadio
//                 checked={selectedValue === 'd'}
//                 onChange={handleChange}
//                 value="d"
//                 name="radio-button-demo"
//                 inputProps={{ 'aria-label': 'D' }}
//             />
//
//         </div>
//     );
// }