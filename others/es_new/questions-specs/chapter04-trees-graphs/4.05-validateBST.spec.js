import { expect } from 'chai';
import { Tree } from './helpers';
import * as funcs from './4.05-validateBST';

for (let key in funcs) {
  let func = funcs[key];

  describe('ch4-q05: ' + key, function() {

    beforeEach(function() {
      this.tree = new Tree();
    });

    it('throws error when tree is invalid', function() {
      expect(() => func(null)).to.throw('invalid tree');
      expect(() => func(undefined)).to.throw('invalid tree');
    });

    it('returns true for single node tree', function() {
      this.tree.add(11);
      expect(func(this.tree)).to.be.true;
    });

    it('returns true for larger BSTs', function() {
      // Tree class maintains BST property so this should be valid
      [100, 20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.be.true;
      [200, 150, 120, 115, 145, 130, 135, 160, 180, 175, 170, 165, 190].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.be.true;
      [220, 205, 210, 225, 230, 215, 240].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.be.true;
    });

    if (func.name === 'noDupesIsValidBST') {
      it('fails for binary tree with duplicate values', function() {
        [10, 10, 15].forEach(v => this.tree.add(v));

        this.tree.root.right.value = 10;
        expect(func(this.tree)).to.be.true;
        this.tree.root.right.value = 15;

        [5, 10, 15, 20, 0, 5].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;

        this.tree.root.right.right.value = 15;

        [20, 5, 25, 0].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;
        [25, 30, 1, 2, 3, 4, 5].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;
      });
    } else {
      it('returns true for BST with duplicate values', function() {
        // Tree class maintains BST property so this should be valid
        [10, 10, 15].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;

        this.tree.root.right.value = 10;
        expect(func(this.tree)).to.be.false;
        this.tree.root.right = null;

        [5, 10, 15, 20, 0, 5].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;
        [20, 5, 25, 0].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;
        [25, 30, 1, 2, 3, 4, 5].forEach(v => this.tree.add(v));
        expect(func(this.tree)).to.be.true;
      });
    }

    it('returns correct value with simple trees', function() {
      [2, 1, 3].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.be.true;
      this.tree.root.left.value = 4;
      expect(func(this.tree)).to.be.false;

      this.tree.root = null;
      [100, 110, 120, 130].forEach(v => this.tree.add(v));
      expect(func(this.tree)).to.be.true;
      this.tree.root.right.right.value = 100;
      expect(func(this.tree)).to.be.false;
    });

    it('returns false for larger trees that are not BSTs', function() {
      // Tree class maintains BST property so this should be valid
      [20, 10, 5, 1, 2, 3, 7, 8, 9, 15, 35, 25, 30, 45].forEach(v => this.tree.add(v));
      // now we need to invalidate BST
      this.tree.root.value = 50;
      expect(func(this.tree)).to.be.false;
      this.tree.root = null;
      [200, 150, 120, 115, 145, 130, 135, 160, 180, 175, 170, 165, 190].forEach(v => this.tree.add(v));
      this.tree.root.left.left.value = 200;
      expect(func(this.tree)).to.be.false;
      this.tree.root.value = 100;
      expect(func(this.tree)).to.be.false;
      this.tree.root.left.right = 145;
      expect(func(this.tree)).to.be.false;
    });

  });

}
