import Controls from "./subcomponents/home-tab/controls";

interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {
    return (<>
        <Controls />
    </>)
}
export default HomeTab