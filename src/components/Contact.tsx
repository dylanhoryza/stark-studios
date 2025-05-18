import { useState, FormEvent } from 'react';
import { TextField, Button, Typography, Box, Alert } from '@mui/material';
import ErrorIcon from '@mui/icons-material/Error';
import emailjs from '@emailjs/browser';
import ReCAPTCHA from 'react-google-recaptcha';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const [alertMessage, setAlertMessage] = useState(false);
  const [failMessage, setFailMessage] = useState(false);
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!recaptchaToken) {
      setFailMessage(true);
      setSuccessMessage('Please complete the reCAPTCHA before submitting.');
      return;
    }

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
        setRecaptchaToken(null);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        setAlertMessage(true);
        setSuccessMessage('An error occurred. Please try again.');
      });
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
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
      {alertMessage && (
        <Box sx={{ px: 2 }}>
          <Alert>{successMessage}</Alert>
        </Box>
      )}
      {failMessage && (
        <Box sx={{ px: 2 }}>
          <Alert
            severity='error'
            icon={<ErrorIcon />}
            sx={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            {successMessage}
          </Alert>
        </Box>
      )}
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
              },
            }}
          />

          {/* reCAPTCHA */}
          <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
            <ReCAPTCHA
              sitekey='6LfBPj8rAAAAABSK2ogNTdCCBbyQubj0yZgLBZ-u'
              onChange={(token) => setRecaptchaToken(token)}
              theme='light'
            />
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
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
          </Box>
        </form>
      </Box>
    </Box>
  );
}
