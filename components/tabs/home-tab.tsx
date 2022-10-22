import Controls from "./subcomponents/home-tab/controls";
import Screen from "./subcomponents/home-tab/screen";

interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {
    return (<>
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'mb-4'}>
                <Screen />
            </div>
            <Controls />
        </div>
    </>)
}
export default HomeTab