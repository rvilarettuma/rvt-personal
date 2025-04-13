import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DiamondOutlinedIcon from '@mui/icons-material/DiamondOutlined';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

const style = {
    position: 'absolute',
    right: 8,
    top: 8
};

export default function SkillsModal(props) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>

            <Typography component="h5" variant="h5">Skills</Typography>
            <Button variant="text" startIcon={<DiamondOutlinedIcon />} onClick={handleOpen}>
                <Typography>{props.title}</Typography>
            </Button>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <DialogTitle>Skills</DialogTitle>
                <IconButton aria-label="close" onClick={handleClose} sx={style}>
                    <CloseIcon/>
                </IconButton>
                <DialogContent>
                    <Typography>{props.skills}</Typography>
                </DialogContent>
            </Dialog>
        </div>
    );
}