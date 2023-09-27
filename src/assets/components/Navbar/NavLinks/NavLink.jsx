
export default function NavLink(props) {
  const {unactive} = props
  return (
    <a href={props.navigate} className={`flex items-center flex-col gap-2 ${unactive ? "opacity-50" : "opacity-100"}`}>
      {/* Icon section */}
      <div>
        <i className={props.iconClass} style={{ fontSize: "1.2rem" }}></i>
      </div>
      {/* Icon section */}
      {/* Link title section */}
      <div>
        <h1 className="text-sm font-normal text-[--primary]">
          {props.linkname}
        </h1>
      </div>
      {/* Link title section */}
    </a>
  );
}
