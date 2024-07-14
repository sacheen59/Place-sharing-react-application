import React from "react";
import { Modal, Box, Fade, Typography, Backdrop, Button } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
};

function ErrorModal(props) {
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={!!props.error}
      onClose={props.onClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={!!props.error}>
        <Box sx={style}>
          <Typography id="transition-modal-title" variant="h6" component="h2">
            An Error Occurred
          </Typography>
          <Typography id="transition-modal-description" sx={{ mt: 2 }}>
            {props.error}
          </Typography>
          <Button
            variant="contained"
            color="error"
            sx={{ marginTop: 4 }}
            onClick={props.onClose}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default ErrorModal;
