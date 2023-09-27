import SettingsLink from './List/SettingsLink'
export default function Settings() {
    return(
        <div className="p-5">
            <SettingsLink iconName="pi pi-user" linkName="Profile" to="/profile" />
            <br />
            <SettingsLink iconName="pi pi-home" linkName="Company" roundedBottom="false" />
            <SettingsLink iconName="pi pi-map-marker" linkName="Branches" rounded="false" to="/branches" />
            <SettingsLink iconName="pi pi-user" linkName="Staff" roundedTop="false" to="/staff" />
            <br />
            <SettingsLink iconName="pi pi-home" linkName="Services" roundedBottom="false" to="/services" />
            <SettingsLink iconName="pi pi-map-marker" linkName="Products" roundedTop="false" />
            <br />
            <SettingsLink iconName="pi pi-sign-out" linkName="Log Out" />
            
        </div>
    )
}