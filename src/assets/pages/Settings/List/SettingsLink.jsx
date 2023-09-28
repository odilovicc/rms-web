import { BrowserRouter as Router,Link } from 'react-router-dom'
import {Avatar} from "primereact/avatar";
export default function SettingsLink(props) {
  const { rounded, roundedBottom,roundedTop,profile } = props;
  return (
    <div>
      <Link to={props.to}>
        <div className={`px-4 py-2 flex items-center gap-3 bg-white ${rounded ? 'rounded-none' : 'rounded-2xl'} ${roundedBottom ? 'rounded-b-none' : 'rounded-2xl'} ${roundedTop ? 'rounded-t-none' : 'rounded-2xl'}`}>
          <div className={`${profile ? 'block' : 'hidden'}`}><Avatar image="https://source.unsplash.com/random" size="large"/></div>
          <h1 className={props.iconBg} style={{padding: "4px", paddingLeft: "8px", paddingRight: "8px", borderRadius: "8px", color: "white"}}><i className={props.iconName}></i></h1>
          <h1>{props.linkName}</h1>
          <i className="ml-auto pi pi-arrow-right opacity-25"></i>
        </div>
      </Link>
    </div>
  );
}