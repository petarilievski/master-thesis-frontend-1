import Controls from "./subcomponents/home-tab/controls";

interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {

    return (<>
        <div className={'flex flex-col justify-center items-center'}>
            <div className={'mb-4'}>
            </div>
            <Controls />
        </div>
    </>)
}
export default HomeTab