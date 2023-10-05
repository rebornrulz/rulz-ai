import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

import i18nextConfig from '../next-i18next.config';

type Props = DocumentProps & {
  // add custom document props
};

export default function Document(props: Props) {
  const currentLocale =
    props.__NEXT_DATA__.locale ?? i18nextConfig.i18n.defaultLocale;
  return (
    <Html lang={currentLocale} dir="ltr">
      <Head>
        <script
          data-project-id="zbg1X0OKdOMMBN6usHo9ABdkK5whBbMcuShOTsLv"
          data-is-production-environment="false"
          src="https://snippet.meticulous.ai/v1/meticulous.js"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-title" content="RULZ-AI" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
