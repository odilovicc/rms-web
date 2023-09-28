export default function Branch(props) {
  const { stock, rTop, rBottom } = props;
  return (
    <div>
      <div
        className={`${
          stock ? "rounded-none" : "rounded-none"} ${
          rTop ? "rounded-t-xl" : "rounded-none"} ${
          rBottom ? "rounded-b-xl" : "rounded-none"}
         bg-white p-4 flex`}
      >
        <h1>{props.name}</h1>
        {/* Action Buttons */}
        <div className="ml-auto flex gap-3">
            <a href="#"><i className="pi pi-pencil" style={{color: "#FFC700"}}></i></a>
            <a href="#"><i className="pi pi-times" style={{color: "red"}}></i></a>
        </div>
        {/* Action Buttons */}
        
      </div>
      <hr />
    </div>
  );
}
