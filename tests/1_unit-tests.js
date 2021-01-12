/*
*
*
*       FILL IN EACH UNIT TEST BELOW COMPLETELY
*       -----[Keep the tests in the same order!]----
*       (if additional are added, keep them at the very end!)
*/

const chai = require('chai');
let assert = chai.assert;
const ConvertHandler = require('../controllers/convertHandler.js');

let convertHandler = new ConvertHandler();

suite('Unit Tests', function(){
  
  suite('Function convertHandler.getNum(input)', function() {
    
    test('Whole number input', function(done) {
      let input = '32L';
      assert.equal(convertHandler.getNum(input),32);
      done();
    });
    
    test('Decimal Input', function(done) {
      let input = '3.2lbs';
      assert.equal(convertHandler.getNum(input),3.2);
      done();
    });
    
    test('Fractional Input', function(done) {
      let input = '1/2km';
      assert.equal(convertHandler.getNum(input),0.5);
      done();
    });
    
    test('Fractional Input w/ Decimal', function(done) {
      let input = '0.5/2lbs';
      assert.equal(convertHandler.getNum(input),0.25);
      done();
    });
    
    test('Invalid Input (double fraction)', function(done) {
      let input = '(5/3)/2kg';
      assert.equal(convertHandler.getNum(input),'invalid number');
      done();
    });
    
    test('No Numerical Input', function(done) {
      let input = 'kg';
      assert.equal(convertHandler.getNum(input), 1);
      done();
    }); 
    
  });
  
  //rewrite these
  suite('Function convertHandler.getUnit(input)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg','GAL','L','MI','KM','LBS','KG'];
      let expect = ['gal', 'L', 'mi', 'km', 'lbs', 'kg', 'gal','L','mi','km','lbs','kg'];
      //forEach runs through each element
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getUnit(ele), expect[i]);
      });
      done();
    });
    
    test('Unknown Unit Input', function(done) {
      //assert.notEqual
      //anything that is not the approved input
      let input = '34kgb';
      assert.equal(convertHandler.getUnit(input), 'invalid unit');
      done();
    });  
    
  });
  

  //rewrite these
  suite('Function convertHandler.getReturnUnit(initUnit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','L','mi','km','lbs','kg'];
      let expect = ['L','gal','km','mi','kg','lbs'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.getReturnUnit(ele), expect[i]);
      });
      done();
    });
    
  });  
  
  //rewrite these
  suite('Function convertHandler.spellOutUnit(unit)', function() {
    
    test('For Each Valid Unit Inputs', function(done) {
      let input = ['gal','l','mi','km','lbs','kg'];
      let expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
      input.forEach(function(ele, i) {
        assert.equal(convertHandler.spellOutUnit(ele), expect[i]);
      })
      done();
    });
    
  });
  
  suite('Function convertHandler.convert(num, unit)', function() {
    
    test('Gal to L', function(done) {
      let input = [5, 'Gal'];
      let expected = 18.9271;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected,0.1); //0.1 tolerance
      done();
    });
    
    test('L to Gal', function(done) {
      let input = [3.4, 'L'];
      let expected = 0.89819;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
    });
    
    test('Mi to Km', function(done) {
      let input = [1, 'Mi'];
      let expected = 1.60934;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
      //done();
    });
    
    test('Km to Mi', function(done) {
      let input = [1, 'Km'];
      let expected = 0.62137;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
      //done();
    });
    
    test('Lbs to Kg', function(done) {
      let input = [3.5, 'Lbs'];
      let expected = 1.58757;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
      //done();
    });
    
    test('Kg to Lbs', function(done) {
      let input = [40, 'Kg'];
      let expected = 88.18498;
      assert.approximately(convertHandler.convert(input[0],input[1]),expected, 0.1);
      done();
      //done();
    });
    
  });

});