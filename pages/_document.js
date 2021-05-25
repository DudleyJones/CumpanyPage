import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
//   static async getInitialProps(ctx) {
//     const initialProps = await Document.getInitialProps(ctx)
//     return { ...initialProps }
//   }

  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <NextScript />
          <script src="https://code.jquery.com/jquery-3.4.1.slim.min.js"></script>
          <script src="../js/script.js"></script>
        </body>
      </Html>
    );
  };
};

export default MyDocument;