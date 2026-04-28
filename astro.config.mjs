// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.packershub.in',
  trailingSlash: 'always',
  redirects: {
    '/nellore-packers-movers': '/packers-movers-nellore',
    '/hyderabad-packers-movers': '/packers-movers-hyderabad',
    '/chennai-packers-movers': '/packers-movers-chennai',
    '/bangalore-packers-movers': '/packers-movers-bengaluru',
    '/vijayawada-packers-movers': '/packers-movers-vijayawada',
  }
});
