import Box from '@mui/material/Box';
import  Stack  from "@mui/material/Stack"
import  Typography  from "@mui/material/Typography"
import "./styles.css"
import { Container } from '@mui/material';

const SobrePretaLab = () => {
    return (
        <Container display='flex' justifyContent='center' alignItems='center' flexDirection='column'  width='100vw' gap={2} marginBottom='100px'>
            <Box >
                <Stack  alignItems='center' gap={1} marginTop='60px' >
                    <Typography variant="h4">Ciclo Formativo Preta Lab</Typography>
                </Stack>
            </Box>
            <Box display='flex' justifyContent='flex-start' gap={2} marginTop='60px' flexDirection='column'>
               
                <Stack>
                    <Typography variant='h6'>
                        Preta lab é um coletivo que tem como objetivo aproximar mulheres pretas da tecnologia.
                        No ciclo formativo 9 patrocinado pelo Santander, pudemos aprender sobre HTML, CSS, javascript, React e testes com a tecnologia Jest.
                    </Typography>
                    <Typography variant='h6'>
                    Saio do curso com as esperanças renovadas e mais segura com minha volta ao mercado, nessa aréa tão competitiva.
                        Agradeço ao excelente time  que nos proporcionou esse curso.
                        Saiba como participar e apoiar clicando no link abaixo:
                    </Typography>
                </Stack>
               
            </Box>
            <Box display='flex' justifyContent='center'>
            <Stack width='20vw' >
                   <a href="https://www.pretalab.com/" target='_blank'> <img src="/logopreta.jpg" alt="" /> </a>
                </Stack>

            </Box>
          
        </Container>
        
    )
}

export default SobrePretaLab