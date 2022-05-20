import type { NextPage } from 'next'
import Link from 'next/link'
import { Card, CardActionArea, CardContent, Grid, Theme, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import { UTIL_LIST } from '@/common/constants'

const Home: NextPage = () => {
  const theme = useTheme() as Theme;

  return (
    <Grid container spacing={2}>
      {UTIL_LIST.map(({ path, title }, index) => (
        <Grid item xs={3} key={index}>
          <Card
            key={index}
            variant="elevation"
            elevation={2}
            sx={{
              backgroundColor: theme.palette.background.paper,
            }}
          >
            <Link href={path}>
              <CardActionArea>
                <CardContent>
                  <Typography sx={{ fontSize: 18 }} color="text.primary" gutterBottom variant="h5">
                    {title}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Link>
          </Card>
        </Grid>
      ))}
    </Grid>
  )
}

export default Home
