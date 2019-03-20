/*
 * File generated by Test generator (dotup.dotup-vscode-test-generator)
 * Date: 2019-03-17 18:28:36
*/
// tslint:disable: newline-per-chained-call
// tslint:disable-next-line: no-implicit-dependencies
import { expect } from 'chai';
import { GitConfigContent, IBranch } from '../src/gitconfig';

describe('Test class GitConfigContent', () => {

  it('GitConfigContent-branch', () => {
    // Arguments
    const branch1: IBranch[] = [
      {
        name: 'test',
        merge: 'merg',
        remote: 'rem'
      }
    ];

    // Property call
    const gitConfigContent = new GitConfigContent();
    gitConfigContent.branch = branch1;
    const result = gitConfigContent.branch;

    // Expect result
    expect(result).equals(branch1);
  });

});