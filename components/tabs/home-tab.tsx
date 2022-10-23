import Controls from "./subcomponents/home-tab/controls";
import Screen from "./subcomponents/home-tab/VRScene.jsx";

interface IProps {
    activeRun: boolean
}

const HomeTab = ({ activeRun }: IProps) => {
    // var tag = document.createElement('script');
    // tag.async = true;
    // tag.src = 'THE PATH TO THE JS FILE OR A CDN LINK';
    // var body = document.getElementsByTagName('body')[0];
    // body.appendChild(tag);

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