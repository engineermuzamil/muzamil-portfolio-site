// import Introduction from '../../src/components/Introduction';
// import profileImage from '../../../src/assets/mypic.PNG';


// describe('Introduction Component', () => {
//   it('renders without crashing', () => {
//     cy.mount(<Introduction profileImage={profileImage} />);
//     cy.get('h1').should('contain', 'Muhammad Muzamil Hussain');
//     cy.get('h2').should('contain', 'Software Development Engineer in Test (SDET)');
//   });

//   it('displays the profile image when provided', () => {
//     cy.mount(<Introduction profileImage={profileImage} />);
//     cy.get('img[alt="Profile"]').should('have.attr', 'src', profileImage);
//   });

//   it('displays the default icon when no profile image is provided', () => {
//     cy.mount(<Introduction />);
//     cy.get('svg').should('exist'); // Assuming TestTube2 renders an SVG
//   });

//   it('contains the correct contact link', () => {
//     cy.mount(<Introduction />);
//     cy.get('a[href="mailto:muhammadmuzamilhussain5@gmail.com"]').should('exist');
//   });

//   it('renders the quote correctly', () => {
//     cy.mount(<Introduction />);
//     cy.get('blockquote').should('contain', 'Working throughout the night to bring the best ideas to light.');
//   });

//   it('renders the LinkedIn link', () => {
//     cy.mount(<Introduction />);
//     cy.get('a[href="https://www.linkedin.com/in/muhammadmuzamilhussain/"]').should('exist');
//   });

//   it('renders the GitHub link', () => {
//     cy.mount(<Introduction />);
//     cy.get('a[href="https://github.com/muzamilmemon1"]').should('exist');
//   });
// });