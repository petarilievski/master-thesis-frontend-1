import RightColumn from "./subcomponents/plc-tab/right-column";
import LeftColumn from "./subcomponents/plc-tab/left-column";

interface IProps {
    activateRun: (state: boolean) => void
    activeRun: boolean
}
const PlcTab = ({activateRun, activeRun} : IProps) => {
    return (
        <>
            <div className={'grid grid-flow-col gap-3'}>
                <div className={'col-span-1'}>
                  <LeftColumn />
                </div>

                <div className={'col-span-4'}>
                    <RightColumn activeRun={activeRun} activateRun={activateRun}/>
                </div>
            </div>
        </>
    )
}

export default  PlcTab