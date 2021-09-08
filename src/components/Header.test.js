import Header from './Header';
import { shallow } from 'enzyme';

describe('Test Header', () => {
  let headerWrapper;
  beforeAll(() => {
    headerWrapper = shallow(<Header href='./' text = 'Hacker news' />) ;
  });
  it('existense link in Header', () => {
    expect(headerWrapper.find('a')).toHaveLength(1);
  }) ; 

  it(' existense prop text in Header and it value', () => {
    const text = 'Hacker news'  ;
    expect(headerWrapper.find('a h1').text()).toBe(text)   ;
  });

  it('existense 2 icon in header', ()=> {
      expect(headerWrapper.find('.icon')).toHaveLength(2) 
  })
});
