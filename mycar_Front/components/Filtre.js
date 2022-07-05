import React from 'react'
import {Text} from 'react-native'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
  
const icon = <CheckBoxOutlineBlankIcon fontSize="small" />;
const checkedIcon = <CheckBoxIcon fontSize="small" />;
  
const Filtre = () => {

  const options = ['3 Portes', '5 Portes', 'Manuelle', 
  'Automatique', 'Essence', 'Diesel', 'Citadine']
  
  return (
    <div style={{ marginLeft: '5%', marginTop: '60px' }}>
      <h3>Filtres</h3>
      <Autocomplete
        multiple
        id="checkboxes-tags-demo"
        options={options}
        renderOption={(option, { selected }) => (
          <React.Fragment>
            <Checkbox
              icon={icon}
              checkedIcon={checkedIcon}
              style={{ marginRight: 8 }}
              checked={selected}
            />
            {option}
          </React.Fragment>
        )}
        style={{ width: 350 }}
        renderInput={(params) => (
          <TextField {...params} variant="outlined"
            label=""
            placeholder="Filtres séléctionnés" />
        )}
      />



    </div>
  );
}
  
export default Filtre; 

