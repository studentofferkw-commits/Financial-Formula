import React, { useEffect } from 'react';

interface SchemaInjectorProps {
  schema: object;
  id: string;
}

const SchemaInjector: React.FC<SchemaInjectorProps> = ({ schema, id }) => {
  useEffect(() => {
    // Remove existing script with the same ID to prevent duplicates on HMR
    const existingScript = document.getElementById(id);
    if (existingScript) {
      existingScript.remove();
    }

    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.id = id;
    script.innerHTML = JSON.stringify(schema);
    document.head.appendChild(script);

    return () => {
      // Cleanup on component unmount
      const scriptToRemove = document.getElementById(id);
      if (scriptToRemove) {
        scriptToRemove.remove();
      }
    };
  }, [schema, id]); // Rerun effect if schema or id changes

  return null; // This component doesn't render anything
};

export default SchemaInjector;