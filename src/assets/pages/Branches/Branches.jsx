
import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import TopNav from "../../components/TopNav/TopNav";
import Branch from "./Labels/Branch";

export default function Branches() {
  const [branches, setBranches] = useState([
    { id: 1, name: "Lisunova Korzinka" },
    { id: 2, name: "Drujba Texnopark" },
    { id: 3, name: "Fayzobod Gai" },
  ]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;

    const { source, destination } = result;
    const newBranches = Array.from(branches);
    const [movedBranch] = newBranches.splice(source.index, 1);
    newBranches.splice(destination.index, 0, movedBranch);

    setBranches(newBranches);
  };

  return (
    <div>
      <TopNav
        title="Branches"
        addButton
        titleDialog="Branch"
        labelName="Name"
        buttonSuccess="Save"
        buttonDanger="Cancel"
      />
      <section className="p-2 mt-9">
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="branches">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {branches.map((branch, index) => (
                  <Draggable key={branch.id} draggableId={branch.id.toString()} index={index}>
                    {(provided) => (
                      <div
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        ref={provided.innerRef}
                      >
                        <Branch
                          rTop={index === 0}
                          rBottom={index === branches.length - 1}
                          name={branch.name}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </section>
    </div>
  );
}