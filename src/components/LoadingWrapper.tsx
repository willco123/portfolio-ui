import React, { useState, useEffect } from "react";
import { useSelectedLayoutSegment } from "next/navigation";

const LoadingWrapper = <T extends object>(
  ChildComponent: React.ComponentType<T>,
) => {
  const WrappedComponent: React.FC<T> = (props) => {
    const [currentRoute, setCurrentRoute] = useState<string | null>(null);
    const segment = useSelectedLayoutSegment();

    useEffect(() => {
      setCurrentRoute(segment);
    }, [segment]);

    props = { ...props };

    return currentRoute ? <ChildComponent {...props} /> : <div>Loading...</div>;
  };

  return WrappedComponent;
};

export default LoadingWrapper;
