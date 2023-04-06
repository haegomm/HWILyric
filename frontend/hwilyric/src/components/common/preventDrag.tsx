import React from "react";

const withDragStart = <P extends object>(
  WrappedComponent: React.ComponentType<P>
) => {
  const handleDragStart = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  const WithDragStart: React.FC<P> = (props) => {
    return (
      <div draggable onDragStart={handleDragStart}>
        <WrappedComponent {...props} />
      </div>
    );
  };

  return WithDragStart;
};

export default withDragStart;
