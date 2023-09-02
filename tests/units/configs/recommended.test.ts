import { resolve, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chdir, cwd } from 'node:process';
import { afterEach, beforeEach, describe, expect } from 'vitest';
import { ESLint } from 'eslint';

const curFilePath = fileURLToPath(import.meta.url);
const originalCwd = cwd();
const fixturesRoot = resolve(curFilePath, '../../../fixtures/configs');
const pkgRoot = resolve(curFilePath, '../../../../dist');

describe('configs/recommended', () => {
  describe('in an ESM package', (it) => {
    let linter: ESLint;

    beforeEach(() => {
      chdir(join(fixturesRoot, 'esm'));
      linter = new ESLint({
        baseConfig: {
          extends: ['plugin:@typescript-eslint/recommended', join(pkgRoot, 'configs/recommended.js')],
          parser: '@typescript-eslint/parser',
          rules: {
            // for testing only
            '@typescript-eslint/no-unused-vars': 'off',
          },
        },
        useEslintrc: false,
      });
    });

    afterEach(() => {
      chdir(originalCwd);
    });

    it('validates pascal case', async () => {
      const report = await linter.lintText(
        `
      export interface ITestSomething {}      
      export interface iTestSomething {}
      export interface I_TestSomething {}
      
      export type TTestSomething = { prop: 'value' };
      export type tTestSomething = { prop: 'value' };
      export type T_TestSomething = { prop: 'value' };
      `,
        {
          filePath: join(fixturesRoot, 'test.js'),
        },
      );

      expect(report[0].messages).toMatchSnapshot();
    });

    it('validates interface prefixes', async () => {
      const report = await linter.lintText(
        `
      export interface ITestSomething {}
      interface TestSomething {}
      `,
        {
          filePath: join(fixturesRoot, 'test.js'),
        },
      );

      expect(report[0].messages).toMatchSnapshot();
    });

    it('validates type aliase prefixes', async () => {
      const report = await linter.lintText(
        `
      export type TTestSomething = { prop: 'value' };
      type TestSomething = { prop: 'value' };
      `,
        {
          filePath: join(fixturesRoot, 'test.js'),
        },
      );

      expect(report[0].messages).toMatchSnapshot();
    });
  });
});
