import { shallow } from 'enzyme';
import { AuthorAndDate, OneNews } from '.';

const mockData =  { 
    direction: "column"
}

describe("",()=> {
    let wrapper;
    beforeAll(()=> {
        wrapper = shallow(<OneNews/>)
    })
    it('receive direaction props', ()=> { 
        const authorAndDate = wrapper.find(AuthorAndDate)
      
        expect(authorAndDate.props().direction).toEqual(mockData.direction) 

    })
})

