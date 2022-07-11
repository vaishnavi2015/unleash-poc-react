import React from 'react'
import './accordionCustom.css'
import { styled } from '@mui/material/styles';
import MuiAccordion from '@mui/material/Accordion';
import MuiAccordionSummary from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import AddIcon from '@material-ui/icons/Add';
import { Minimize } from '@material-ui/icons'

const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`,
    '&:not(:last-child)': {
      borderBottom: 0,
    },
    '&:before': {
      display: 'none'
    },
  }));

//   const BiggerListItemIcon = withStyles({
//     root: {
//       "& .MuiSvgIcon-root": { color: "2em" }
//     }
//   })(AddIcon);

  const AccordionSummary = styled((props) => (
    <MuiAccordionSummary
      expandIcon={props.expanded ? <Minimize/> : <AddIcon sx={{ fontSize: '0.1rem'}} />}
      {...props}
    />
  ))(({ theme }) => ({
    backgroundColor:
      theme.palette.mode === 'dark'
        ? 'rgba(255, 255, 255, .05)'
        : 'white',
    flexDirection: 'row',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      // transform: 'rotate(90deg)',
      marginTop: '15px',
    },
    '& .MuiAccordionSummary-content': {
      marginLeft: theme.spacing(1),
    },
    height: '60px',
    // textAlign: 'center'
  }
  ));

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    padding: theme.spacing(2),
    borderTop: '1px solid rgba(0, 0, 0, .125)',
  }));

export default function AccordionCustom({accordions}) {
  const [expanded, setExpanded] = React.useState('')
  console.log('AccordionCustom=>', accordions)
  const handleChange =
    (panel) => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    }
  return (
    <div>
        {
            accordions.map(
                accordion =>
                    <Accordion expanded={expanded === accordion.name} onChange={handleChange(accordion.name)} color ='white'>
                    <AccordionSummary aria-controls={accordion.name+"-content"} id={accordion.name+"-header"} sx = {{backgroundColor:accordion.tabColor, color: accordion.textColor, fontWeight: 600, iconColor: accordion.iconColor,'& .MuiSvgIcon-root':{color: accordion.iconColor}
        }} expanded={expanded===accordion.name}>
                    <Typography>{accordion.displayText}</Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                    <Typography>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                        malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
                        sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
                        sit amet blandit leo lobortis eget.
                    </Typography>
                    </AccordionDetails>
                </Accordion>
            )
        }
      {/* <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary aria-controls={'panel1d-content'} id="panel1d-header" sx = {{backgroundColor:'white'}} expanded={expanded==='panel1'}>
          <Typography>Current Account</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
        <AccordionSummary aria-controls="panel2d-content" id="panel2d-header" sx = {{backgroundColor:'white'}} expanded={expanded==='panel2'}>
          <Typography>Credit Card</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
        <AccordionSummary aria-controls="panel3d-content" id="panel3d-header" sx = {{backgroundColor:'white'}} expanded={expanded==='panel3'}>
          <Typography>Other Services</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex,
            sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion> */}
    </div>
  )
}
