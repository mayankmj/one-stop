import { useState } from 'react'; 
import {Box, Button, TextField , styled ,Typography} from '@mui/material';
import {API} from '../../service/api'

const Component = styled(Box)`
    width: 400px;
    margin: auto;
    box-shadow: 5px 2px 5px 2px rgb(0 0 0/ 0.6)
`;

const Image = styled('img')({
    width : 100,
    margin : 'auto',
    display: 'flex',
    padding: '50px 0 0'
});

const Wrapper = styled(Box)`
    padding: 25px 35px;
    display: flex;  {/* move element in one line*/}
    flex: 1;
    flex-direction: column; {/* arrange element in column wise*/}
    & > div , & > button, & >p{
        margin-top: 20px;
    }
`

const LoginButton = styled(Button)`
    text-transform: none;
    {/*background*/}
    {/*color */}
    height: 48px;
    border-radius: 2px;
`

const SignupButton = styled(Button)`
    padding: 10px;
    text-transform: none;
    background: #fff;
    color: #2874f8;
    height: 48px;
    border-radius: 2px;
    box-shadow: 0 2px 4px 0 rgb(0 0 0 / 20%);
`;

const Error = styled(Typography)`
   font-size: 10px,
   color: #ff6161;
   line-height: 0;
   margin-top: 10px;
   font-weight: 600;  
`
const Text = styled(Typography)`
   color: #878787;
   font-size: 12px;
`
const signupInitialValues = {
    name:'',
    username:'',
    password:''
}
const Login = () =>{

    const imageURL = 'https://www.sesta.it/wp-content/uploads/2021/03/logo-blog-sesta-trasparente.png';

    const [account,toggleAccount] = useState('login');
    const [signup, setSignup] = useState(signupInitialValues);
    const [error ,setError] = useState('');

    const toggleSignup =() =>{
        account === 'login' ? toggleAccount('signup') : toggleAccount('login')
    }

    const onInputChange = (e) => {
        setSignup({...signup,[e.target.name] : e.target.value}) // e.target.name is key and e.target.value is value 
    }

    const signupUser =async() =>{
        let response=await API.userSignup(signup);
        if (response.isSuccess) {
            setSignup(signupInitialValues);
            toggleAccount('login')
        }
        else{
            setError('something went wrong');
        }
    };
    return(
        <Component>
        <Box>
            <Image src={imageURL} alt = "Lo"/>
            {
                account === 'login' ?
            <Wrapper>
               <TextField variant="standard" label="Enter username"/>
               <TextField variant = "standard" label="Enter passwprd" />
               <LoginButton variant= "contained" >Login</LoginButton>
               <Text style={{textAlign: 'center'}}> OR </Text>
               <SignupButton onClick={() => toggleSignup()}>Create an account</SignupButton> {/*here we are using by default text type button */}
             </Wrapper>
             :
            <Wrapper>
               <TextField variant="standard" onChange={(e) => onInputChange(e)} name ='name' label="Enter Name"/>
               <TextField variant = "standard" onChange={(e) => onInputChange(e)} name='username' label="Enter username" />
               <TextField variant = "standard" onChange={(e) => onInputChange(e)} name='password' label="Enter passwprd" />

               {error &&  <Error> {error}</Error>}
               <SignupButton onClick={() =>signupUser()}>Signup</SignupButton>
               <Text style={{textAlign: 'center'}}> OR </Text>
               <LoginButton variant="contained" onClick={ () => toggleSignup()}>Already have an account</LoginButton> {/*here we are using by default text type button */}
               </Wrapper>
            }
            </Box>
        </Component>
    )
}

export default Login;