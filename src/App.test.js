import Header from './components/Header';
import { shallow } from 'enzyme';

import App from "./App"

describe("App",()=> {
    let appwrapper
    appwrapper = shallow(<App/>)
    beforeAll(()=> {
    })

    it("Header should have props text with text ", ()=> {
        const text  = "Hacker news"
         const header  = appwrapper.find(Header)
        expect(header.props().text).toEqual(text ) 
    })
})