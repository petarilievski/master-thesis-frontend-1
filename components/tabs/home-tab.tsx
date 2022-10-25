import Controls from "./subcomponents/home-tab/controls"
import {useState} from "react";
import Screen from './subcomponents/home-tab/screen'
import VRScene from "./subcomponents/vr";
interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {
    const [state, setState] = useState(false)
    const [tasterOne, setTasterOne] = useState(false)
    const [tasterTwo, setTasterTwo] = useState(false)
    const [buttonOne, setButtonOne] = useState(false)
    const [buttonTwo, setButtonTwo] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)

    const emitData = (state, tasterOne, tasterTwo, buttonOne, buttonTwo, sliderValue) => {
        setState(state)
        setTasterOne(tasterOne)
        setTasterTwo(tasterTwo)
        setButtonOne(buttonOne)
        setButtonTwo(buttonTwo)
        setSliderValue(sliderValue)
    }

    return (<>
        <div className={'flex flex-col justify-center items-center'}>
            {/*<VR*/}
            {/*    state={state}*/}
            {/*    tasterOne={tasterOne}*/}
            {/*    tasterTwo={tasterTwo}*/}
            {/*    buttonOne={buttonOne}*/}
            {/*    buttonTwo={buttonTwo}*/}
            {/*    sliderValue={sliderValue}*/}
            {/*/>*/}
            {/*<Screen />*/}
                <VRScene />
            <div className={'absolute bottom-0'}>
                <Controls emitData={emitData}/>
            </div>
        </div>
    </>)
}
export default HomeTab