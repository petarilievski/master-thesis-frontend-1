import Image from 'next/image'
import logo from '../tabs/subcomponents/home-tab/images/FEIT-logo.png'

interface IProps {
    activateTab: (tab: number) => void
    activeTab: number
}

const NavBar = ({activateTab, activeTab}: IProps) => {

        return (
        <>
            <div>
                <nav className="bg-gray-300 border-gray-300 sm:px-2 py-2.5 rounded">
                    <div className="container flex justify-between flex-wrap items-center ml-4">
                        <a className="flex items-center">
                            <Image src={logo}
                                   width={60}
                                   height={60}
                            />
                                <span className="ml-3 self-center text-xl font-semibold whitespace-nowrap">FEEIT</span>
                        </a>
                        <div className="w-full md:block md:w-auto">
                            <ul className="flex flex-col py-4 mt-4
                            rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0
                            md:text-sm md:font-medium md:border-0 bg-gray-300">
                                <li className={'cursor-pointer'} onClick={() => activateTab(0)}>
                                    <a
                                       className={`block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent  md:p-0 hover:text-white hover:scale-120
                                        ${activeTab === 0 ? "text-blue-500 bg-blue-200" : ""}`}>Home</a>
                                </li>
                                <li className={'cursor-pointer'} onClick={() => activateTab(1)}>
                                    <a
                                        className={`block py-2 pr-4 pl-3 text-gray-700 rounded md:bg-transparent  md:p-0 hover:text-white hover:scale-120
                                        ${activeTab === 1 ? "text-blue-500 bg-blue-200" : ""}`}>PLC</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>

            </div>
        </>
    )
}
    export default NavBar