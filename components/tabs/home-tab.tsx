import Controls from "./subcomponents/home-tab/controls"
import VR from "./subcomponents/home-tab/VR"
interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {

    return (<>
        <div className={'flex flex-col justify-center items-center'}>
            <VR />
            <div className={'absolute bottom-0'}>
                <Controls />
            </div>
        </div>
    </>)
}
export default HomeTab