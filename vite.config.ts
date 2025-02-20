import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import babelMacros from "vite-plugin-babel-macros";
import { lingui } from '@lingui/vite-plugin';
import AutoImport from 'unplugin-auto-import/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),
    babelMacros(),
    reactRouter(),
    tsconfigPaths(),
    lingui(),
    AutoImport({
      imports: [
        'react',
        {
          'react': [
            'useState',
            'useEffect',
            'useContext',
            'useMemo',
            'useCallback',
            'useRef',
            'useReducer',
            'useLayoutEffect',
          ],
          'react-dom': [
            'render',
            'hydrate',
            'createPortal',
            'findDOMNode',
            'unmountComponentAtNode',
          ],
          '@lingui/react': [
            'I18nProvider',
            'Trans',
          ],
          '@lingui/macro': [
            't',
            'plural',
            'select',
            'selectOrdinal',
          ],
          '@lingui/core': [
            'i18n',
          ],
          'react-router': [
            'isRouteErrorResponse',
            'Links',
            'Meta',
            'Outlet',
            'Scripts',
            'ScrollRestoration',
          ],
          '@tanstack/react-query': [
            'QueryClientProvider',
          ],
          '@tanstack/react-query-devtools': [
            'ReactQueryDevtools',
          ],
          './lib/react-query': [
            'queryClient',
          ],
          './+types/root': [
            'Route',
          ],
        },
      ],
      dirsScanOptions: {
        types: true // Enable auto import the types under the directories
      },
      dirs: [
        './app',
      ],
      dts: true, // Generate TypeScript declaration file
    }),
  ],
});
