import SettingsLink from './List/SettingsLink'
import {Link} from "react-router-dom";
import {Avatar} from "primereact/avatar";
export default function Settings() {
    return(
        <div className="p-5">
            <Link to="/profile">
                <div className={`px-4 py-2 flex items-center gap-5 bg-white rounded-xl`}>
                    <Avatar image="https://source.unsplash.com/random" size="normal"/>
                    <h1>Profile</h1>
                    <i className="ml-auto pi pi-arrow-right opacity-25"></i>
                </div>
            </Link>
            <br />
            <SettingsLink iconBg="bg-[#ff9900]" iconName="pi pi-home" linkName="Company" roundedBottom />
            <SettingsLink iconBg="bg-[#6184ff]" iconName="pi pi-map-marker" linkName="Branches" rounded to="/branches" />
            <SettingsLink iconBg="bg-[#61ffc6]" iconName="pi pi-user" linkName="Staff" roundedTop to="/staff" />
            <br />
            <SettingsLink iconBg="bg-red-500" iconName="pi pi-home" linkName="Services" roundedBottom to="/services" />
            <SettingsLink iconBg="bg-[#ff9a61]" iconName="pi pi-map-marker" linkName="Products" roundedTop />
            <br />
            <SettingsLink iconBg="bg-red-500" iconName="pi pi-sign-out" linkName="Log Out" />
            
        </div>
    )
}