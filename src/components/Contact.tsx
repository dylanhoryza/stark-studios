import { useState, FormEvent } from 'react';
import { TextField, Button, Snackbar, Typography, Box } from '@mui/material';
import emailjs from '@emailjs/browser';
// import { validateEmail } from '../utils/helpers.js'

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const serviceID = 'service_h1b3wmg';
    const templateID = 'template_b9bt2pa';
    const myPublicKey = 'ueDzNgKv-cIkc0o_j';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'Dylan',
      message: message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, myPublicKey)
      .then((response) => {
        console.log('Email sent successfully', response);
        setName('');
        setEmail('');
        setMessage('');
        setSuccessMessage('Your message has been submitted!');
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setErrorMessage('An error occurred. Please try again.');
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
        variant='h4'
        sx={{
          color: 'white',
        }}
      >
        We'd love to hear from you!
      </Typography>
      <Typography
        variant='h6'
        sx={{
          color: 'white',
          marginTop: 2,
        }}
      >
        Contact us below for more information about booking, prices, and
        availability
      </Typography>
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
            input: { style: { color: 'white' } },
            htmlInput: {
              disableUnderline: true,
              style: { borderColor: 'white', color: 'white' },
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
            input: { style: { color: 'white' } },
            htmlInput: {
              disableUnderline: true,
              style: { borderColor: 'white', color: 'white' },
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
          value={message}
          onChange={handleInputChange}
          slotProps={{
            input: { style: { color: 'white' } },
          }}
        />
        <Button
          variant='contained'
          color='primary'
          size='large'
          type='submit'
          className='contact-submit-btn'
          sx={{
            marginTop: 2,
          }}
        >
          Submit
        </Button>
      </form>
      {errorMessage && (
        <Snackbar open={!!errorMessage} autoHideDuration={6000}>
          <div>{errorMessage}</div>
        </Snackbar>
      )}
      {successMessage && (
        <Snackbar open={!!successMessage} autoHideDuration={6000}>
          <div>{successMessage}</div>
        </Snackbar>
      )}
    </Box>
  );
}
