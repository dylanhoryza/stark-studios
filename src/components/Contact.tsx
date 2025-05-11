import { useState, FormEvent } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import emailjs from '@emailjs/browser';
// import { validateEmail } from '../utils/helpers.js'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState(false);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_h1b3wmg';
    const templateID = 'template_b9bt2pa';
    const myPublicKey = 'ueDzNgKv-cIkc0o_j';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Trent',
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, myPublicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
        setAlertMessage(true);
        setSuccessMessage('Your message has been submitted!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setAlertMessage(true);
        setSuccessMessage('An error occurred. Please try again.');
      });
  };

  const handleInputChange = (e: React.ChangeEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    if (name === 'name') setName(value);
    else if (name === 'email') setEmail(value);
    else setMessage(value);
  };

  return (
    <Box>
      <Typography
        variant='h5'
        sx={{
          color: 'white',
          fontWeight: 'bold',
          textAlign: 'center',
        }}
      >
        We'd love to hear from you!
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: 'white',
          marginTop: 2,
          textAlign: 'center',
          mb: 4,
        }}
      >
        Contact us below for more information about booking, prices, and
        availability
      </Typography>
      {alertMessage && <Alert>{successMessage}</Alert>}
      <Box
        sx={{
          maxWidth: 1200,
          mx: 'auto',
          px: 2,
        }}
      >
        <form onSubmit={sendEmail}>
          <TextField
            fullWidth
            label='Name'
            variant='outlined'
            name='name'
            value={name}
            onChange={handleInputChange}
            margin='normal'
            slotProps={{
              input: { style: { color: '#008080' } },
            }}
            sx={{
              color: '#008080',
              backgroundColor: '#E7D4AB',
              borderRadius: '10px',
              '.MuiInputLabel-root': {
                color: '#008080',
                borderRadius: '10px',
              },
            }}
          />
          <TextField
            fullWidth
            label='Email'
            variant='outlined'
            type='email'
            name='email'
            value={email}
            onChange={handleInputChange}
            margin='normal'
            slotProps={{
              input: { style: { color: '#008080' } },
            }}
            sx={{
              color: '#008080',
              backgroundColor: '#E7D4AB',
              borderRadius: '10px',
              '.MuiInputLabel-root': {
                color: '#008080',
                borderRadius: '10px',
              },
            }}
          />
          <TextField
            fullWidth
            label='Message'
            variant='outlined'
            multiline
            rows={8}
            name='message'
            margin='normal'
            value={message}
            onChange={handleInputChange}
            slotProps={{
              input: { style: { color: '#008080' } },
            }}
            sx={{
              color: '#008080',
              backgroundColor: '#E7D4AB',
              borderRadius: '10px',
              '.MuiInputLabel-root': {
                color: '#008080',
                borderRadius: '10px',
              },
            }}
          />
          <Button
            variant='outlined'
            size='large'
            type='submit'
            sx={{
              marginTop: 2,
              color: '#008080',
              borderColor: '#008080',
              backgroundColor: '#E7D4AB',
              minWidth: 150,
              fontWeight: 'bold',
            }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
}
