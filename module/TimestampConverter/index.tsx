import { Box, Grid, NoSsr } from '@mui/material'
import TimeCard from './components/TimeCard'

function TimestampConverter(): JSX.Element {
  return (
    <Box sx={{ minWidth: '1248px', margin: 'auto' }}>
      <Grid container spacing={2} sx={{ marginLeft: 0 }}>
        <Grid item xs={6}>
          <NoSsr>
            <TimeCard />
          </NoSsr>
        </Grid>
        <Grid item xs={6}>
          <NoSsr>
            <TimeCard />
          </NoSsr>
        </Grid>
      </Grid>
    </Box>
  )
}

export default TimestampConverter
