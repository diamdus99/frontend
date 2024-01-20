import React from 'react';
import { Helmet } from 'react-helmet';

const PageTitle = ({ title, description }) => {
  return (
    <Helmet>
      <title>
        {' '}
        {title
          ? ` ${title} | Diamdus : Point of Sale and E-Commerce Website all in one`
          : 'Diamdus : Point of Sale and E-Commerce Website all in one'}
      </title>
      <meta
        name="description"
        content={
          description
            ? ` ${description} `
            : 'Diamdus : Point of Sale and E-Commerce Website all in one'
        }
      />
    </Helmet>
  );
};

export default PageTitle;
