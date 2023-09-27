import TopNav from "../../components/TopNav/TopNav";
import { Divider } from "primereact/divider";
import { Avatar } from "primereact/avatar";
import { Button } from "primereact/button";
export default function Services() {
  return (
    <div>
      <div className="flex w-full justify-between bg-white">
        <div className="w-full">
          <TopNav title="Services" />
        </div>
        <a href="/services/create">
          <Button icon="pi pi-plus" text />
        </a>
      </div>
      <section className="p-5 flex flex-col gap-5">
        <div className="rounded-xl bg-white p-5">
          <h1 className="text-2xl font-semibold text-[--primary]">Owner</h1>
          <Divider />
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <Avatar
                image="https://source.unsplash.com/random"
                size="large"
                shape="circle"
              />
              <h1 className="text-xl font-medium">James Bond</h1>
              <div className="flex items-center gap-2">
                <Button icon="pi pi-pencil" text rounded />
                <Button icon="pi pi-trash" text rounded severity="danger" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Avatar
                image="https://source.unsplash.com/random"
                size="large"
                shape="circle"
              />
              <h1 className="text-xl font-medium">James Bond</h1>
              <div className="flex items-center gap-2">
                <Button icon="pi pi-pencil" text rounded />
                <Button icon="pi pi-trash" text rounded severity="danger" />
              </div>
            </div>
          </div>
        </div>


        <div className="rounded-xl bg-white p-5">
          <h1 className="text-2xl font-semibold text-[--primary]">Supervisor</h1>
          <Divider />
          <div className="flex flex-col gap-5">
            <div className="flex items-center justify-between">
              <Avatar
                image="https://source.unsplash.com/random"
                size="large"
                shape="circle"
              />
              <h1 className="text-xl font-medium">James Bond</h1>
              <div className="flex items-center gap-2">
                <Button icon="pi pi-pencil" text rounded />
                <Button icon="pi pi-trash" text rounded severity="danger" />
              </div>
            </div>
            <div className="flex items-center justify-between">
              <Avatar
                image="https://source.unsplash.com/random"
                size="large"
                shape="circle"
              />
              <h1 className="text-xl font-medium">James Bond</h1>
              <div className="flex items-center gap-2">
                <Button icon="pi pi-pencil" text rounded />
                <Button icon="pi pi-trash" text rounded severity="danger" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
