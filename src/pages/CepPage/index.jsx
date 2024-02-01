import { useState } from "react"
import axios from "axios"
import  Box  from "@mui/material/Box"
import  Stack  from "@mui/material/Stack"
import  Typography  from "@mui/material/Typography"
import  Link  from "@mui/material/Link"
import  TextField  from "@mui/material/TextField"
import  Button  from "@mui/material/Button"
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F7B0FF',
      // light: will be calculated from palette.primary.main,
      // dark: will be calculated from palette.primary.main,
      // contrastText: will be calculated to contrast with palette.primary.main
    },
  },
});
const CepPage = () => {

 
  const [cep, setCep] = useState('')
  const [dadosCep, setDadosCep] = useState(null)
  
  const obterDadosCep = async () => {
    try {
      const resposta = await axios.get(`https://brasilapi.com.br/api/cep/v2/${cep}`);
      setDadosCep(resposta.data);
      console.log(resposta)
    } catch (erro) {
      console.error('Todos os serviços de cep retornaram erro', erro);
    }
    setCep('')
  };

   return(
    <ThemeProvider theme={theme}>
      <Box display='flex' justifyContent='center' alignItems='center' flexDirection='column' marginTop='15px' width='100vw' gap={2} marginBottom='100px'>
        <Stack  alignItems='center' gap={1}>
            <Typography variant="h4">Consulte seu CEP</Typography>
            <Link href='https://brasilapi.com.br' target='_blank' underline="always"> via Brasil API</Link>
        </Stack>

        <Stack alignItems='center' gap={1} direction="row">
            <TextField id="idCep" placeholder="00000000" required inputProps={{maxLength: 8}} value={cep} onChange={(event) => setCep(event.target.value)}></TextField>
            <Button variant="contained" onClick={obterDadosCep} > Buscar </Button>
        </Stack>

      {dadosCep && 
            <Stack width='50vh' gap={2} marginTop={1}>
              <TextField label="Rua" fullWidth readOnly value={dadosCep.street}/>
              <TextField label="Cidade" fullWidth readOnly value={dadosCep.city}/>
              <TextField label="Estado" fullWidth readOnly value={dadosCep.state}/>
              <TextField label="Latitude" fullWidth readOnly value={dadosCep.location.coordinates.latitude}/>
              <TextField label="Longitude" fullWidth readOnly value={dadosCep.location.coordinates.longitude}/>
            </Stack>
      }
      </Box>
    </ThemeProvider>
   

   )
}

export default CepPage