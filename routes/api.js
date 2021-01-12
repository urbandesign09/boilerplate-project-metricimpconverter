/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

const expect = require('chai').expect;
const ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  let convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      let input = req.query.input;
      let initNum = convertHandler.getNum(input);
      let initUnit = convertHandler.getUnit(input);
      let returnNum = convertHandler.convert(initNum, initUnit);
      let returnUnit = convertHandler.getReturnUnit(initUnit);
      let toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
      
      //res.json
      //set up if statements
      //if initNum is 'invalid number' && initUnit is 'invalid unit'
      if (initNum === 'invalid number' && initUnit === 'invalid unit'){
        return res.json('invalid number and unit');
      }
    
      //if initNum is 'invalid number'
      else if (initNum === 'invalid number'){
        return res.json('invalid number');
      }

      //if initUnit is 'invalid unit'
      else if (initUnit === 'invalid unit'){
        return res.json('invalid unit');
      }

      res.json({initNum: initNum, initUnit: initUnit, returnNum: returnNum, returnUnit: returnUnit, string: toString});      
      
      
    });
    
};
