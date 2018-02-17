import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
// import 'jest-localstorage-mock';
require('jest-localstorage-mock');
Enzyme.configure({adapter: new Adapter()});



beforeEach(()=>{
	localStorage.clear();
});