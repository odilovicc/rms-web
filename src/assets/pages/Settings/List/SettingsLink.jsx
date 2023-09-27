import { BrowserRouter as Router,Link } from 'react-router-dom'

export default function SettingsLink(props) {
  const { rounded, roundedBottom,roundedTop } = props;

  return (
    <div>
      <Link to={props.to}>
        <div className={`px-6 py-4 flex items-center gap-5 bg-white ${rounded ? 'rounded-none' : 'rounded-2xl'} ${roundedBottom ? 'rounded-b-none' : 'rounded-2xl'} ${roundedTop ? 'rounded-t-none' : 'rounded-2xl'}`}>
          <i className={props.iconName}></i>
          <h1>{props.linkName}</h1>
          <i className="ml-auto pi pi-arrow-right opacity-25"></i>
        </div>
      </Link>
    </div>
  );
}