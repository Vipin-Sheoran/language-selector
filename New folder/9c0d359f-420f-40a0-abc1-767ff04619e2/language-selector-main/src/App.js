import React,{useState,useEffect} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';
import axios from 'axios'

function App() {
  const [option, setOption] = useState('')
  let loadOptions=[]

useEffect(() => {
  axios.get('https://restcountries.eu/rest/v2').then((response)=>{
    response.data.map((each)=>{
      return each.languages.map((each2)=>{
        loadOptions.push(each2.name)
      })
    })
      })
  
}, [])
console.log(loadOptions)
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="sm">
        <Typography component="div" style={{ backgroundColor: 'white', height: '100vh' ,display:'flex',alignItems:'center',justifyContent:'center'}} >
        
        <Autocomplete 
  id="combo-box-demo"

  options={loadOptions}
  // getOptionLabel={(option) => option.name}
  style={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Combo box" variant="outlined" />}
/>
        </Typography>
        

      </Container>
    </React.Fragment>
  );
}

export default App;
