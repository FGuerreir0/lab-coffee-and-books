'use strict';

const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['coffee_shop', 'bookstore']
    },
    location: {
      type: {
        type: String,
        default: 'Point'
      },
      coordinates: [
        {
          type: mongoose.Schema.Types.Decimal128,
          min: -180,
          max: 180
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model('Place', placeSchema);
