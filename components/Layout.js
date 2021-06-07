import Head from 'next/head';
import Header from './Header';
import Footer from './Footer';
import styles from './Layout.module.css';

export default function Layout({ title, description, keywords, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
      </Head>
      {children}
    </div>
  );
}
Layout.defaultProps = {
  title: 'DJ Events || Find the hottiest parties',
  description: 'Find the latest DJ and other musical events',
  keyword: 'music, dj, edm, events',
};