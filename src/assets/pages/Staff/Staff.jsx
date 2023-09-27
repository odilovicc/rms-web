import TopNav from "../../components/TopNav/TopNav";
import { Button } from "primereact/button";
import {Divider} from 'primereact/divider'
import { Avatar } from "primereact/avatar";
export default function Staff() {
  return (
    <div>
      <div className="flex gap-2 bg-white">
        <div className="w-full">
          <TopNav title="Staff" />
        </div>
        <a href="/staff/create"><Button icon="pi pi-plus" text /></a>
      </div>
      <section className="p-5 flex flex-col gap-5">
        <section className="rounded-xl bg-white p-5" id="owner">
          <h1 className="text-2xl text-[--primary] font-semibold">Owner</h1>
          <Divider/>
          <section>
            <div className="flex items-center justify-between gap-5">
              <Avatar shape="circle" size="large" image="https://source.unsplash.com/random" alt="" />
              <h1>James Bond</h1>
              <div className="flex gap-2 items-center">
                <Button icon="pi pi-pencil" rounded text/>
                <Button icon="pi pi-trash" severity="danger" text rounded/>
              </div>
            </div>
          </section>
        </section>
        <section className="rounded-xl bg-white p-5" id="owner">
          <h1 className="text-2xl text-[--primary] font-semibold">Supervisor</h1>
          <Divider/>
          <section>
            <div className="flex items-center justify-between gap-5">
              <Avatar shape="circle" size="large" image="https://source.unsplash.com/random" alt="" />
              <h1>James Bond</h1>
              <div className="flex gap-2 items-center">
                <Button icon="pi pi-pencil" rounded text/>
                <Button icon="pi pi-trash" severity="danger" text rounded/>
              </div>
            </div>
          </section>
        </section>
      </section>
    </div>
  );
}
