import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Display(props) {

  const {data} = props
  console.log('props: '+ props)
  console.log('data: '+ data)
  console.log(props.data)

  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          Ava
        </Typography>
        <Typography color="text.secondary" variant="body2">
          Contact Number: 98765432
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Email: ava@example.com
        </Typography>
        <Typography sx={{ mb: 1.5 }} variant="body2" color="text.secondary">
          Date of Birth: 2022-10-10
        </Typography>
        <Typography variant="body2">
          Description: Lorem Ipsum 1234567890
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}
