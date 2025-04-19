import type { AppProps } from 'next/app'
import { useMediaQuery } from '@mantine/hooks'

import '../styles/globals.scss'

function MyApp({ Component, pageProps }: AppProps) {
  const isSmallerScreen = useMediaQuery('(max-width: 1200px)', false)

  return isSmallerScreen ? (
    <main className='globalNotice'>
      <strong>
        This project was made when I was learning stuff and I didn't know how to do it responsively at the time.
      </strong>
      <strong>
        And now I do not have the time to do it, so in order to appreciate this project, you need to use a desktop browser.
      </strong>
    </main>
  ) : (
    <Component {...pageProps} />
  );
}

export default MyApp
