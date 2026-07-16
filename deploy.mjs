import { execSync } from 'child_process';
import { cpSync, writeFileSync, mkdtempSync, rmSync } from 'fs';
import { tmpdir } from 'os';
import { join } from 'path';

const BRANCH = 'gh-pages';
const distDir = join(process.cwd(), 'dist');
const remote = execSync('git remote get-url origin', { encoding: 'utf8' }).trim();

let userName = 'Deploy Bot';
let userEmail = 'deploy@localhost';
try {
  userName = execSync('git config user.name', { encoding: 'utf8' }).trim();
  userEmail = execSync('git config user.email', { encoding: 'utf8' }).trim();
} catch {}

const tmpDir = mkdtempSync(join(tmpdir(), 'gh-deploy-'));

try {
  const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: tmpDir });

  run('git init');
  run(`git config user.name "${userName}"`);
  run(`git config user.email "${userEmail}"`);
  run(`git checkout --orphan ${BRANCH}`);
  cpSync(distDir, tmpDir, { recursive: true });
  writeFileSync(join(tmpDir, '.nojekyll'), '');
  cpSync(join(tmpDir, 'index.html'), join(tmpDir, '404.html'));
  run('git add .');
  run('git commit -m "Deploy to GitHub Pages"');
  run(`git push "${remote}" ${BRANCH} --force`);
  console.log('Deploy completato con successo!');
} finally {
  rmSync(tmpDir, { recursive: true, force: true });
}
