import type { NextPage } from 'next'
import Link from 'next/link'
import { Card, CardActionArea, CardContent, Grid, Theme, Typography } from '@mui/material'
import { useTheme } from '@emotion/react'
import { UTIL_LIST } from '@/common/constants'

const Home: NextPage = () => {
  const theme = useTheme() as Theme;

  return (
    <Grid container spacing={2}>
      {UTIL_LIST.map(({ path, title, desc, category, Icon }, index) => (
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
                  <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {category}
                  </Typography>
                  <Grid
                    container
                    spacing={2}
                    style={{
                      marginTop: '0px',
                    }}
                  >
                    <Grid
                      item
                      xs={2}
                      style={{
                        height: '40px',
                        paddingTop: 0,
                        position: 'relative',
                      }}
                    >
                      <Icon
                        fontSize="large"
                        style={{
                          position: 'absolute',
                          top: 0,
                          bottom: 0,
                          margin: 'auto',
                        }}
                      />
                    </Grid>
                    <Grid
                      item
                      xs={10}
                      style={{
                        height: '40px',
                        paddingTop: 0,
                        paddingLeft: '10px',
                      }}
                    >
                      <Typography
                        color="text.primary"
                        gutterBottom
                        variant="h5"
                        style={{
                          margin: 0,
                          paddingTop: 0,
                          lineHeight: '40px',
                        }}
                      >
                        {title}
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography
                    color="text.primary"
                    gutterBottom
                    variant="body2"
                    sx={{
                      height: '60px',
                      marginTop: '20px'
                    }}
                  >
                    {desc}
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
