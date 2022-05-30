import { Box, Grid } from '@mui/material'
import { useClient } from '@/common/hooks/useClient'
import TimeCard from './components/TimeCard'

function TimestampConverter(): JSX.Element {
  const isClient = useClient()

  return (
    <Box sx={{ minWidth: '1248px', margin: 'auto' }}>
      <Grid container spacing={2} sx={{ marginLeft: 0 }}>
        <Grid item xs={6}>
          {isClient && <TimeCard />}
        </Grid>
        <Grid item xs={6}>
          {isClient && <TimeCard />}
        </Grid>
      </Grid>
    </Box>
  )
}

export default TimestampConverter
