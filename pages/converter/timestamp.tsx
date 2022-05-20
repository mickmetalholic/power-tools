import Head from 'next/head'
import TimestampConverter from '@/module/TimestampConverter'

function Timestamp(): JSX.Element {
  return (
    <>
      <Head>
        <title>Timestamp Converter</title>
      </Head>
      <TimestampConverter />
    </>
  )
}

export default Timestamp
