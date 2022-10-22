import CircularSlider from '@fseehawer/react-circular-slider';

interface IProps {
    setSliderValue: (value: number) => void
}

const CircleSlider = ({ setSliderValue }: IProps) => {
    return (<>
        <CircularSlider
            onChange={ (value: number) => { setSliderValue(value) } }
            min={0}
            max={10}
            width={100}
            label={"Volts"}
            verticalOffset={"0rem"}
            valueFontSize={"1.5rem"}
            knobColor="#6B7280"
            progressColorFrom="#E5E7EB"
            progressColorTo="#6B7280"
            trackColor="#F3F4F6"
            dataIndex={0}
        />
    </>)
}

export default CircleSlider