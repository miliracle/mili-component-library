import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    ...nxE2EPreset(__filename, {
      cypressDir: 'src',
      bundler: 'vite',
      webServerCommands: {
        default: 'nx run mili-component-library:serve',
        production: 'nx run mili-component-library:preview',
      },
      ciWebServerCommand: 'nx run mili-component-library:serve-static',
    }),
    baseUrl: 'http://localhost:4200',
  },
});
