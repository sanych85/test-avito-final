import { shallow } from 'enzyme';
import Footer from './Footer';


describe('Test Footer', () => {
    let footerWrapper;
    beforeAll(() => {
      footerWrapper = shallow(<Footer href="https://github.com/sanych85" />) ;
    });
    it('existense link in Footer', () => {
      expect(footerWrapper.find('a')).toHaveLength(1);
    }) ; 
  
    it(' existense text in span in Footer ', () => {
      const text = 'Copyright 2021 Aleksandr Shatokhin'  ;
      expect(footerWrapper.find('span').text()).toBe(text)   ;
    });
  });