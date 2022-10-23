import {useState} from "react";
import CircleSlider from "./circle-slider";

const Controls = () => {
    const [state, setState] = useState(false)
    const [tasterOne, setTasterOne] = useState(false)
    const [tasterTwo, setTasterTwo] = useState(false)
    const [buttonOne, setButtonOne] = useState(false)
    const [buttonTwo, setButtonTwo] = useState(false)
    const [sliderValue, setSliderValue] = useState(0)

    return (
        <>
            <div className={'flex flex-col justify-center items-center'}>
                <button onClick={() => setState(!state)} className={`text-white font-bold py-2 px-4 rounded
                ${state ? 'bg-red-400 hover:bg-red-700' : 'bg-red-700 hover:bg-red-400'}`}>
                    {state ? 'Set Object' : 'Remove Object'}
                </button>

                <div className={'flex flex-row mt-4'}>
                    <button onMouseDown={() => setTasterOne(true)} onMouseUp={() => setTasterOne(false)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={`h-10 w-10 ${tasterOne ? 'bg-red-700' : 'bg-red-400 '}`} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>T1</p>
                            </div>
                        </div>
                    </button>
                    <button onMouseDown={() => setTasterTwo(true)} onMouseUp={() => setTasterTwo(false)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={`h-10 w-10 ${tasterTwo ? 'bg-red-700' : 'bg-red-400 '}`} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>T2</p>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setButtonOne(!buttonOne)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={`h-10 w-10 ${buttonOne ? 'bg-red-700' : 'bg-red-400 '}`} style={{ borderRadius: 50 }}>
                                <p className={'text-black mt-2'}>K1</p>
                            </div>
                        </div>
                    </button>
                    <button onClick={() => setButtonTwo(!buttonTwo)}>
                        <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                            <div className={`h-10 w-10 ${buttonTwo ? 'bg-red-700' : 'bg-red-400 '}`} style={{ borderRadius: 50 }}>
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

export default  Controls