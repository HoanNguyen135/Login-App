import {render} from '@testing-library/react-native'
import {SettingScreen} from '../screens/SettingScreen/index'

describe('Testing app',()=>{
    it('render the component correctly',()=>{
        render(<SettingScreen/>)
    })
})