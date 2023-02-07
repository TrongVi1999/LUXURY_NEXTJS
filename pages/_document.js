import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        {/* <script src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit" async></script>
        <script type="text/javascript">
          function googleTranslateElementInit() {
            new google.translate.TranslateElement(
              {
                pageLanguage: 'en',
              },
              'google_translate_element',
            )
          }
        </script> */}
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
