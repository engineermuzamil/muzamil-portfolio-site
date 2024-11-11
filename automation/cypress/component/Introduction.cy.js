// import React from 'react';
// import { mount } from 'cypress/react';
// import Introduction from '../../../src/App.jsx';
// import profileImage from '../../../src/assets/mypic.PNG';

// describe('Introduction Component', () => {
//   it('should render the profile heading and subtitle correctly', () => {
//     mount(<Introduction profileImage={profileImage} />);

//     // Check for the correct name and title in the component
//     cy.get('h1').should('contain', 'Muhammad Muzamil Hussain');
//     cy.get('h2').should('contain', 'Software Development Engineer in Test (SDET)');
//   });

//   it('should display the profile image when provided', () => {
//     mount(<Introduction profileImage={profileImage} />);

//     // Check if the profile image is displayed correctly
//     cy.get('img').should('have.attr', 'src').and('include', 'mypic.PNG');
//   });
// });
