import React from 'react';
import * as styles from './faq.module.css';

import Layout from '../components/Layout/Layout';
import Banner from '../components/Banner';
import Container from '../components/Container';

const FaqPage = (props) => {
  return (
    <Layout>
      <div className={styles.root}>
        <Banner
          maxWidth={'650px'}
          name={`Frequently Asked Questions`}
          bgImage={'/faqCover.png'}
          color={'var(--standard-white)'}
          height={'350px'}
        />
        <Container>
          <div className={styles.section}>
            <span>Your Orders</span>
            <div className={styles.subSection}>
              <h3>Deliveries</h3>
              <p>
                To review the status of your order please visit the "My Orders"
                section of your Sunspel Account. You should receive an email
                notification when your package is dispatched. Please check your
                email inbox and your junk filter.
              </p>
              <p>This is WIP</p>
              <p>This is WIP</p>
            </div>
            <div className={styles.subSection}>
              <h3>Returns & Exchanges</h3>
              <p>This is WIP</p>
              <p>This is WIP</p>
            </div>
          </div>

          <div className={styles.section}>
            <span>Payment</span>
            <div className={styles.subSection}>
              <h3>Shipping Rates</h3>
              <p>
                To review the status of your order please visit the "My Orders"
                This is WIP
              </p>
              <p>This is WIP</p>
            </div>
            <div className={styles.subSection}>
              <h3>Currency</h3>
              <p>This is WIP</p>
              <p>This is WIP</p>
              <p>This is WIP</p>
            </div>
            <div className={styles.subSection}>
              <h3>Suspect Fraud?</h3>
              <p>
                Given our high levels of security, it’s very unlikely fraudulent
                use of your card will take place on our website. But if a
                fraudulent transaction does take place, first contact your
                credit or debit card company so they can protect your card and
                reimburse you. Then let us know at customerservice@example.com
                and we will work with your card company to minimise any further
                inconvenience to you.
              </p>
            </div>
          </div>
        </Container>
      </div>
    </Layout>
  );
};

export default FaqPage;
