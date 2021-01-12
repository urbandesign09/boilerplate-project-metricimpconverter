/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    let result;
    //split input string into two parts
    //take first part as number
    //use regex to split 
    const numRegex = /^[^a-zA-Z\s]+/g; //matches everything that comes before text
    
    result = input.match(numRegex);
    if (result === null){
      result = 1;
    } else {
      result = result[0];
      if(result.includes('/')){
        const newResult = result.split('/');
        if (newResult.length > 2){
          result = 'invalid number';
        }
        else {
          result = Number(newResult[0])/Number(newResult[1]);
        }
      }
      else{
        result = Number(result);
      }
    }


    
    //if there is a fraction, need to convert to an equation
    return result; //if invalid, returns null
  };
  
  this.getUnit = function(input) {
    let result;
    //split input string into two parts
    //take second part as unit
    //change case so its all lower
    const unitRegex = /[a-zA-Z]+$/g; //negative lookahead for anything that is not text, then matches only the following text
    result = input.match(unitRegex);

    if(result === null){
      result = 'invalid unit'; //user did not provide units
    } else {
      result = result[0]; //user did provide unit
      if (result === 'L' || result === 'l'){ //if it is L or l
      result = 'L';
      } else {
        result = result.toLowerCase();
        const possibleList = ['gal', 'mi', 'km', 'lbs', 'kg'];
        if (possibleList.includes(result)===false){
          result = 'invalid unit';
        }
      }
    }
    return result; //if invalid, returns null
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    //take the init Unit and conver that to the equivalent
    //ID which unit it will replace
    //for loop

    const map = {
      'gal': 'L',
      'L':'gal',
      'mi':'km',
      'km': 'mi',
      'lbs':'kg',
      'kg':'lbs'
    };
    //let expect = ['gallons', 'liters', 'miles', 'kilometers', 'pounds', 'kilograms'];
    result = map[initUnit];
    return result;
    //if invalid, returns undefined;
  };

  this.spellOutUnit = function(unit) {
    let result;
    //takes the unit abbrev into a full spelling
    //runs unit through array and matches to full spelling
    
    const fullSpelling = {
      'gal': 'gallons',
      'L':'liters',
      'l':'liters',
      'mi':'miles',
      'km':'kilometers',
      'lbs':'pounds',
      'kg':'kilograms',
    };
    result = fullSpelling[unit];
    return result;
    //if invalid, returns undefined;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;

    const initUnitLower = initUnit.toLowerCase();

    const converter = {
      'gal': galToL,
      'l': 1/galToL,
      'mi': miToKm,
      'km': 1/miToKm,
      'lbs':lbsToKg,
      'kg':1/lbsToKg
    };
    result = initNum * converter[initUnitLower];
    result = Math.round(result * 100000)/100000;
    //takes init num and init unit
    //matches init unit to mirrored unit
    //converts init num to mirrored unit num
    return result;
    //if invalid, returns NaN;
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    //returns the resultant string 
    //result should be:
      //initNum
      //initUnit 
      //+ converts to
      //returnNum + //returnUnit
    
    //if initNum is invalid, invalid number
    //if initUnit is invalid, invalid unit
    //if both invalid, return 'invalid number and unit'
    const initUnitFull = this.spellOutUnit(initUnit);
    const returnUnitFull = this.spellOutUnit(returnUnit);

    result = `${initNum} ${initUnitFull} converts to ${returnNum} ${returnUnitFull}`;
    return result;
  };
  
}

module.exports = ConvertHandler;

