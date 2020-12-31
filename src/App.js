import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

function App() {
  const classes = useStyles();
  let loadOptions=[]


  axios.get('https://restcountries.eu/rest/v2').then((response)=>{
    response.data.map((each)=>{
      
      return each.languages.map((each2)=>{
       return loadOptions.push(each2.name)
      })
    })
      })

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' ,display:'flex',alignItems:'center',justifyContent:'center'}} >
        <div className={classes.root}>
        <Autocomplete
        multiple
        id="tags-outlined"
        options={loadOptions}
        defaultValue={loadOptions[1]}
        filterSelectedOptions
        renderInput={(params) => (
          <TextField
            {...params}
            variant="outlined"
            label="SelectOneorMoreLanguage"
            placeholder="Languages"
          />
        )}
      />
       </div>
        
        </Typography>
        

      </Container>
    </React.Fragment>
  );
}

export default App;
