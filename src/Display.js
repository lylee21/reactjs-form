import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

export default function Display(props) {
  const { data } = props;
  console.log("props: " + props);
  console.log("data: " + data);
  console.log(props.data);

  return (
    <>
      {data.map((e, i) => {
        return (
          <Card sx={{ minWidth: 275 }} key={i}>
            <CardContent>
              <Typography variant="h5" component="div">
                {e.name}
              </Typography>
              <Typography color="text.secondary" variant="body2">
                Contact Number: {e.contactNum}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Email: {e.email}
              </Typography>
              <Typography
                sx={{ mb: 1.5 }}
                variant="body2"
                color="text.secondary"
              >
                Date of Birth: {e.dateOfBirth}
              </Typography>
              <Typography variant="body2">
                Description: {e.about}
              </Typography>
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
