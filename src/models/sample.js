/**
 * Sample Model Define
 */
'use strict';


export default function (sequelize, DataTypes) {
  let Sample = sequelize.define('Sample', {
    sample: DataTypes.STRING
  });

  return Sample;
}

