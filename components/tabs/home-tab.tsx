import {useState} from "react";
import CircleSlider from "./subcomponents/circle-slider";

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

    return (
        <>
            <div className={'flex flex-col justify-center items-center'}>
                <button onClick={() => setState(!state)} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    {state ? 'Set Object' : 'Remove Object'}
                </button>
                <div className={'flex flex-row mt-4'}>
                    <button>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={'bg-red-500 h-10 w-10'} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>T1</p>
                            </div>
                        </div>
                    </button>
                    <button>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={'bg-red-500 h-10 w-10'} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>T2</p>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setButtonOne(!buttonOne)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={'bg-red-500 h-10 w-10'} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>K1</p>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setButtonTwo(!buttonTwo)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={'bg-red-500 h-10 w-10'} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>K2</p>
                            </div>
                        </div>
                    </button>


                    <div className={'ml-5'}>
                        <CircleSlider setSliderValue={setSliderValue}/>
                    </div>

                </div>
            </div>
            </>
    )
}

export default  HomeTab