import TopNav from "../../components/TopNav/TopNav";
import { Button } from "primereact/button";
import { Avatar } from "primereact/avatar";
import { BrowserRouter as Router,Route,Link, Routes } from 'react-router-dom'

export default function Services() {
  return (
    <div>
      <div className="flex items-center gap-2 bg-white">
        <div className="w-full">
          <TopNav title="Services" />
        </div>
        <Link to="/services/create">
          <Button icon="pi pi-plus" text />
        </Link>
      </div>
      <section className="p-5 flex flex-col gap-5">
        <section className="rounded-xl bg-white p-3" id="owner">
          <h1 className="text-sm text-[--primary] font-semibold">Owner</h1>
          <hr className="my-2" />
          <section>
            <div className="flex items-center gap-4">
              <Avatar
                shape="circle"
                size="normal"
                image="https://source.unsplash.com/random"
                alt=""
              />
              <h1>James Bond</h1>
              <div className="ml-auto flex gap-2 items-center">
                <a
                  href="#"
                  className="pi pi-pencil"
                  style={{ color: "#FFC700" }}
                ></a>
                <a
                  href="#"
                  className="pi pi-times"
                  style={{ color: "red" }}
                ></a>
              </div>
            </div>
          </section>
        </section>
        <section className="rounded-xl bg-white p-3" id="supervisor">
          <h1 className="text-sm text-[--primary] font-semibold">Supervisor</h1>
          <hr className="my-2" />
          <section>
            <div className="flex items-center gap-4">
              <Avatar
                shape="circle"
                size="normal"
                image="https://source.unsplash.com/random"
                alt=""
              />
              <h1>James Bond</h1>
              <div className="ml-auto flex gap-2 items-center">
                <a
                  href="#"
                  className="pi pi-pencil"
                  style={{ color: "#FFC700" }}
                ></a>
                <a
                  href="#"
                  className="pi pi-times"
                  style={{ color: "red" }}
                ></a>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
