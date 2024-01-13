import React from 'react';
import useBaseUrl from '@docusaurus/useBaseUrl';

import { CodePreview } from 'docusaurus-plugin-code-preview';

export default function Playground(props) {
    return (
    <CodePreview
      output={{
        outputs: [
          {
            name: 'JavaScript',
            value: 'javascript',
          },
          {
            name: 'Python',
            value: 'python',
          },
        ],
        // This is the default selected option in the rendered component
        defaultOutput: 'javascript',
      }}
      // Your existing options
    />
  );
  return <CodePreview {...props} src={useBaseUrl(props.src)} />;
}
