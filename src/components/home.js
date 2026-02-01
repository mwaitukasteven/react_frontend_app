import react from 'react';

const Home = () => {
    return React.createElement('div', 
        {id: 'home', className: 'home-class'}, 
        React.createElement('h1', null, 'This is the Home Component!')
        );


}
export default Home;