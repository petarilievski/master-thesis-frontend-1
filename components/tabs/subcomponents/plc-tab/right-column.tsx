import Image from "next/image";
import picture from "../../../../public/images/plc.jpg"

interface IProps {
    activateRun: (state: boolean) => void
    activeRun: boolean
}

const RightColumn = ({activateRun, activeRun} : IProps) => {

    return (<>
        <div className={'absolute z-10 bg-green-500 rounded w-4 h-2'} style={{right: 307, top:230}}></div>
        <div className={`absolute z-10 ${activeRun ? 'bg-green-500' : 'bg-red-500'} rounded w-4 h-2`} style={{right: 307, top:243}}></div>
        <div onClick={() => activateRun(!activeRun)}
             className={'absolute cursor-pointer z-10 bg-gray-400 rounded w-5 h-9'}
             style={{right: 590, top:160}}>
            {activeRun ?
                <div className={'rounded-3xl flex pt-1 pr-1 pb-1 pl-1 justify-between'}>
                    <div className={'bg-black h-3 w-3'} style={{ borderRadius: 50 }}></div>
                </div>
                :
                <div className={'rounded-3xl flex pt-5 pr-1 pb-1 pl-1 justify-between'}>
                    <div className={'bg-black h-3 w-3'} style={{ borderRadius: 50 }}></div>
                </div>
            }
        </div>
        <Image src={picture} layout={'responsive'} objectFit={'contain'} />
    </>)
}

export default  RightColumn